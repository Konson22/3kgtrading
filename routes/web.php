<?php

use App\Http\Controllers\ContactRequestController;
use App\Http\Controllers\CurrentBranchController;
use App\Http\Controllers\OnboardingController;
use App\Models\Business;
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
// - admin.[baseDomain]: send admins to dashboard, others to login
// - base domain: send authenticated users to dashboard, others to login
Route::get('/', function (Request $request) use ($adminDomain) {
    if ($request->getHost() === $adminDomain) {
        if ($request->user()?->isAdmin()) {
            if (! Business::query()->exists()) {
                return redirect()->route('onboarding.business');
            }

            return redirect()->route('dashboard');
        }

        return redirect()->to('/login');
    }

    if ($request->user()) {
        if (! Business::query()->exists()) {
            return redirect()->route('onboarding.business');
        }

        return redirect()->route('dashboard');
    }

    return redirect()->to('/login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('onboarding/business', [OnboardingController::class, 'create'])
        ->name('onboarding.business');
    Route::post('onboarding/business', [OnboardingController::class, 'store'])
        ->name('onboarding.business.store');
});

// Authenticated app (dashboard, POS, etc.) — registered globally so /dashboard works when
// APP_URL is an IP or hostname without a separate admin subdomain (avoids post-login 404).
Route::middleware(['auth', 'verified', 'business.setup', 'staff.branch'])->group(function () {
    Route::post('context/branch', [CurrentBranchController::class, 'update'])
        ->name('context.branch');
    require __DIR__.'/admin.php';
});

// Public API + user settings on the base domain
Route::domain($baseDomain)->middleware(['business.setup'])->group(function () {
    Route::post('api/contact-request', ContactRequestController::class)
        ->withoutMiddleware([VerifyCsrfToken::class]);

    require __DIR__.'/settings.php';
});

// Fallback: keep admin subdomain users on admin area, others 404
Route::fallback(function (Request $request) use ($adminDomain) {
    if ($request->getHost() === $adminDomain) {
        if ($request->user()?->isAdmin()) {
            if (! Business::query()->exists()) {
                return redirect()->route('onboarding.business');
            }

            return redirect()->route('dashboard');
        }

        return redirect()->to('/login');
    }

    abort(404);
});
