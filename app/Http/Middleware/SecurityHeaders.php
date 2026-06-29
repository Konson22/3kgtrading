<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecurityHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        $response->headers->set('X-Frame-Options', 'SAMEORIGIN');
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
        $response->headers->set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

        if (app()->environment('production') && $request->secure()) {
            $response->headers->set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
        }

        $viteDevServer = $this->viteDevServerOrigin();

        $scriptSrc = "'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://static.ads-twitter.com";
        $styleSrc = "'self' 'unsafe-inline' https://fonts.googleapis.com";
        $connectSrc = "'self' https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://static.ads-twitter.com https://api.indexnow.org";

        if ($viteDevServer !== null) {
            $viteWs = preg_replace('#^http#', 'ws', $viteDevServer);
            $scriptSrc .= " {$viteDevServer}";
            $styleSrc .= " {$viteDevServer}";
            $connectSrc .= " {$viteDevServer} {$viteWs}";
        }

        $csp = implode('; ', [
            "default-src 'self'",
            "script-src {$scriptSrc}",
            "style-src {$styleSrc}",
            "font-src 'self' https://fonts.gstatic.com data:",
            "img-src 'self' data: https: blob:",
            "connect-src {$connectSrc}",
            "frame-src 'self' https://www.googletagmanager.com https://www.google.com https://maps.google.com",
        ]);

        $response->headers->set('Content-Security-Policy', $csp);

        return $response;
    }

    private function viteDevServerOrigin(): ?string
    {
        if (app()->environment('production')) {
            return null;
        }

        $hotPath = public_path('hot');

        if (! is_file($hotPath)) {
            return null;
        }

        $origin = trim((string) file_get_contents($hotPath));

        return $origin !== '' ? $origin : null;
    }
}
