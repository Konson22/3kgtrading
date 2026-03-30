<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class DashboardRedirectController extends Controller
{
    public function __invoke(Request $request): RedirectResponse
    {
        if ($request->user()?->isAdmin()) {
            return redirect()->route('admin.portal', ['module' => 'dashboard']);
        }

        return redirect()->route('branch.portal', ['module' => 'dashboard']);
    }
}
