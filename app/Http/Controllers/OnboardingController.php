<?php

namespace App\Http\Controllers;

use App\Enums\BusinessCategory;
use App\Models\Branch;
use App\Models\Business;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class OnboardingController extends Controller
{
    public function create(Request $request): RedirectResponse|Response
    {
        if (Business::query()->exists()) {
            return redirect()->route('dashboard');
        }

        return Inertia::render('onboarding/business');
    }

    public function store(Request $request): RedirectResponse
    {
        if (Business::query()->exists()) {
            return redirect()->route('dashboard');
        }

        $validated = $request->validate([
            'business_name' => ['required', 'string', 'max:255'],
            'slogan' => ['nullable', 'string', 'max:255'],
            'branch_name' => ['required', 'string', 'max:255'],
        ]);

        /** @var User $user */
        $user = $request->user();

        DB::transaction(function () use ($validated, $user): void {
            $business = Business::query()->create([
                'name' => $validated['business_name'],
                'category' => BusinessCategory::Retail,
                'slogan' => $validated['slogan'] ?: null,
            ]);

            $code = Str::upper(Str::slug($validated['branch_name'], ''));
            $code = $code !== '' ? Str::limit($code, 32, '') : 'BRANCH';
            $baseCode = $code;
            $i = 1;
            while (Branch::query()->where('code', $code)->exists()) {
                $suffix = (string) $i;
                $code = Str::limit($baseCode, 32 - strlen($suffix), '').$suffix;
                $i++;
            }

            $branch = Branch::query()->create([
                'business_id' => $business->id,
                'name' => $validated['branch_name'],
                'code' => $code,
                'is_active' => true,
            ]);

            $adminRole = Role::query()->where('slug', 'admin')->first();

            $user->forceFill([
                'branch_id' => $branch->id,
                'role_id' => $adminRole?->id ?? $user->role_id,
                'department_id' => $adminRole?->department_id ?? $user->department_id,
            ])->save();
        });

        session(['current_branch_id' => $user->fresh()->branch_id]);

        return redirect()->route('dashboard');
    }
}
