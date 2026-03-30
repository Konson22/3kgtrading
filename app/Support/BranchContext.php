<?php

namespace App\Support;

use App\Models\Branch;
use App\Models\Business;
use App\Models\Product;
use App\Models\User;

class BranchContext
{
    /**
     * Business the current user belongs to (via their branch), used for category, nav, and shared props.
     */
    public static function business(?User $user = null): ?Business
    {
        $id = self::tenantBusinessId($user);

        return $id ? Business::query()->find($id) : null;
    }

    public static function tenantBusinessId(?User $user): ?int
    {
        if (! $user) {
            return null;
        }

        $user->loadMissing('branch');

        if ($user->branch_id && $user->branch && $user->branch->business_id) {
            return (int) $user->branch->business_id;
        }

        return Business::query()->value('id');
    }

    /** @return \Illuminate\Support\Collection<int, Branch> */
    public static function branchesForUser(User $user)
    {
        $tenantId = self::tenantBusinessId($user);

        if (! $tenantId) {
            return collect();
        }

        if ($user->isAdmin()) {
            return Branch::query()
                ->where('business_id', $tenantId)
                ->where('is_active', true)
                ->orderBy('name')
                ->get();
        }

        if ($user->branch_id) {
            return Branch::query()->whereKey($user->branch_id)->get();
        }

        return collect();
    }

    public static function currentBranch(User $user): ?Branch
    {
        $tenantId = self::tenantBusinessId($user);

        if (! $tenantId) {
            return null;
        }

        if ($user->isAdmin()) {
            $branchId = session('current_branch_id');

            if ($branchId) {
                $branch = Branch::query()
                    ->where('business_id', $tenantId)
                    ->whereKey($branchId)
                    ->first();

                if ($branch) {
                    return $branch;
                }
            }

            if ($user->branch_id) {
                return Branch::query()
                    ->where('business_id', $tenantId)
                    ->whereKey($user->branch_id)
                    ->first();
            }

            return Branch::query()
                ->where('business_id', $tenantId)
                ->orderBy('id')
                ->first();
        }

        if (! $user->branch_id) {
            return null;
        }

        return Branch::query()
            ->where('business_id', $tenantId)
            ->whereKey($user->branch_id)
            ->first();
    }

    public static function activeBranchId(?User $user): ?int
    {
        if (! $user) {
            return null;
        }

        return self::currentBranch($user)?->id;
    }

    /**
     * Active products scoped to this tenant (category.business_id) or uncategorized catalog rows.
     */
    public static function activeProductsCountForTenant(?User $user): int
    {
        $tenantId = self::tenantBusinessId($user);
        $query = Product::query()->where('is_active', true);

        if (! $tenantId) {
            return (int) $query->count();
        }

        return (int) $query
            ->where(function ($q) use ($tenantId) {
                $q->whereNull('category_id')
                    ->orWhereHas('category', function ($c) use ($tenantId) {
                        $c->where('business_id', $tenantId);
                    });
            })
            ->count();
    }
}
