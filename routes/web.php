<?php

use App\Http\Controllers\ContactRequestController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

$baseHost = parse_url((string) config('app.url'), PHP_URL_HOST);
$baseDomain = $baseHost ?: 'app.local';

if (str_starts_with($baseDomain, 'admin.')) {
    $baseDomain = substr($baseDomain, 6);
}

$adminDomain = 'admin.'.$baseDomain;

// Root route behaves differently depending on host:
// - admin.[baseDomain]: send admins to admin dashboard, others to login
// - base domain / anything else: render guest SPA entry
Route::get('/', function (Request $request) use ($adminDomain) {
    if ($request->getHost() === $adminDomain) {
        if ($request->user()?->role === 'admin') {
            return redirect()->route('admin.dashboard');
        }

        return redirect()->to('/login');
    }

    return view('guest');
})->name('home');

// Admin panel on admin.[baseDomain] only
Route::domain($adminDomain)->group(function () {
    Route::middleware(['auth', 'verified'])->group(function () {
        require __DIR__.'/admin.php';
    });
});

// Public / guest site + user settings on the base domain
Route::domain($baseDomain)->group(function () {
    // API-like endpoints for the public site
    Route::post('api/contact-request', ContactRequestController::class)
        ->withoutMiddleware([VerifyCsrfToken::class]);

    // Authenticated user settings routes (profile, password, etc.)
    require __DIR__.'/settings.php';

    // Guest SPA catch-all – everything else goes to the React guest app
    Route::get('/{any?}', function () {
        return view('guest');
    })->where('any', '^(?!api|dashboard|admin|expert|user|login|register|password|verification|user-password|settings).*$')
      ->name('guest');
});

// Fallback: keep admin subdomain users on admin area, others 404
Route::fallback(function (Request $request) use ($adminDomain) {
    if ($request->getHost() === $adminDomain) {
        if ($request->user()?->role === 'admin') {
            return redirect()->route('admin.dashboard');
        }

        return redirect()->to('/login');
    }

    abort(404);
});
