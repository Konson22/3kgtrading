<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class EnsureStaffHasBranch
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if (! $user) {
            return $next($request);
        }

        if ($user->isAdmin() || $user->branch_id) {
            return $next($request);
        }

        if ($request->routeIs('settings.*', 'logout')) {
            return $next($request);
        }

        return Inertia::render('pending-branch-assignment')->toResponse($request);
    }
}
