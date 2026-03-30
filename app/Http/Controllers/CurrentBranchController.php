<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Support\BranchContext;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class CurrentBranchController extends Controller
{
    public function update(Request $request): RedirectResponse
    {
        if (! $request->user()?->isAdmin()) {
            abort(403);
        }

        $business = BranchContext::business($request->user());

        if (! $business) {
            abort(404);
        }

        $validated = $request->validate([
            'branch_id' => ['required', 'integer', 'exists:branches,id'],
        ]);

        $branch = Branch::query()
            ->where('business_id', $business->id)
            ->whereKey($validated['branch_id'])
            ->firstOrFail();

        session(['current_branch_id' => $branch->id]);

        return back();
    }
}
