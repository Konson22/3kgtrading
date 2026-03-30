<?php

namespace App\Http\Middleware;

use App\Enums\BusinessCategory;
use App\Models\User;
use App\Support\BranchContext;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => fn () => [
                'user' => $this->transformUser($request->user()),
            ],
            'business' => fn () => BranchContext::business($request->user()),
            'businessContext' => fn () => $this->businessContext($request),
            'branches' => fn () => $request->user()
                ? BranchContext::branchesForUser($request->user())->values()->all()
                : [],
            'currentBranch' => fn () => $request->user()
                ? BranchContext::currentBranch($request->user())
                : null,
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
        ];
    }

    /**
     * @return array<string, bool|string|null>|null
     */
    private function businessContext(Request $request): ?array
    {
        $business = BranchContext::business($request->user());

        if (! $business) {
            return null;
        }

        return [
            'category' => BusinessCategory::Retail->value,
            'label' => BusinessCategory::Retail->label(),
            'is_pharmacy' => false,
            'is_retail' => true,
            'is_wholesale' => false,
            'is_restaurant' => false,
            'is_other' => false,
        ];
    }

    /**
     * @return array<string, mixed>|null
     */
    private function transformUser(?User $user): ?array
    {
        if (! $user) {
            return null;
        }

        $user->loadMissing(['branch.business', 'role']);

        return array_merge($user->toArray(), [
            'is_admin' => $user->isAdmin(),
        ]);
    }
}
