<?php

namespace App\Http\Controllers\Branch;

use App\Http\Controllers\Controller;
use App\Support\BranchContext;
use App\Support\PortalModuleTitles;
use Inertia\Inertia;
use Inertia\Response;

class PortalPageController extends Controller
{
    /** @var list<string> */
    private const MODULES = [
        'dashboard',
        'pos',
        'inventory',
        'customers',
        'suppliers',
        'quotations',
        'invoices',
        'payments',
        'receipts',
        'reports',
        'settings',
    ];

    public function show(string $module): Response
    {
        if (! in_array($module, self::MODULES, true)) {
            abort(404);
        }

        $user = request()->user();

        return Inertia::render("branch/{$module}/index", [
            'portal' => 'branch',
            'module' => $module,
            'title' => PortalModuleTitles::forModule($module),
            'stats' => $module === 'dashboard' ? $this->dashboardStats($user) : null,
        ]);
    }

    /**
     * @return array<string, int|float|string|null>
     */
    private function dashboardStats(?\App\Models\User $user): array
    {
        $branchId = BranchContext::activeBranchId($user);

        return [
            'salesToday' => 0,
            'transactionsToday' => 0,
            'productsCount' => BranchContext::activeProductsCountForTenant($user),
            'lowStockCount' => 0,
            'expiringLotsCount' => $branchId
                ? \App\Models\StockLot::query()
                    ->where('branch_id', $branchId)
                    ->whereNotNull('expiry_date')
                    ->whereDate('expiry_date', '<=', now()->addDays(30))
                    ->count()
                : 0,
            'activeBranchId' => $branchId,
        ];
    }
}
