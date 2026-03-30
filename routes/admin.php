<?php

use App\Http\Controllers\Admin\PortalPageController;
use App\Http\Controllers\Branch\PortalPageController as BranchPortalPageController;
use App\Http\Controllers\DashboardRedirectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('dashboard', DashboardRedirectController::class)->name('dashboard');

Route::get('modules/{slug}', function (Request $request, string $slug) {
    $toModule = match ($slug) {
        'pos', 'inventory', 'reports', 'branches', 'users' => $slug,
        'documents' => 'invoices',
        'purchasing' => 'suppliers',
        'administration' => 'settings',
        'offline', 'devices', 'notifications' => 'settings',
        default => 'dashboard',
    };

    $prefix = $request->user()->isAdmin() ? 'admin' : 'branch';
    if (! $request->user()->isAdmin() && in_array($toModule, ['branches', 'users'], true)) {
        return redirect("/{$prefix}/dashboard");
    }

    return redirect("/{$prefix}/{$toModule}");
})->middleware(['auth', 'verified', 'business.setup', 'staff.branch'])
    ->where('slug', 'pos|inventory|documents|purchasing|reports|users|branches|offline|devices|notifications|administration');

Route::prefix('admin')
    ->name('admin.')
    ->middleware(['portal.admin'])
    ->group(function () {
        Route::get('{module}', [PortalPageController::class, 'show'])
            ->where('module', 'dashboard|pos|inventory|customers|suppliers|quotations|invoices|payments|receipts|reports|branches|users|settings')
            ->name('portal');
    });

Route::prefix('branch')
    ->name('branch.')
    ->middleware(['portal.branch'])
    ->group(function () {
        Route::get('{module}', [BranchPortalPageController::class, 'show'])
            ->where('module', 'dashboard|pos|inventory|customers|suppliers|quotations|invoices|payments|receipts|reports|settings')
            ->name('portal');
    });
