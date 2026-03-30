<?php

namespace App\Http\Middleware;

use App\Models\Business;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureBusinessSetupComplete
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user()) {
            return $next($request);
        }

        if (Business::query()->exists()) {
            return $next($request);
        }

        if ($request->routeIs('onboarding.*')) {
            return $next($request);
        }

        return redirect()->route('onboarding.business');
    }
}
