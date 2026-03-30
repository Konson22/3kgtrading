<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureBranchPortal
{
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->user()?->isAdmin()) {
            abort(403, 'Use the admin portal for administrator accounts.');
        }

        return $next($request);
    }
}
