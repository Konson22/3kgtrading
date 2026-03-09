<?php

use App\Http\Controllers\ContactRequestController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

$baseHost = parse_url((string) config('app.url'), PHP_URL_HOST);
$baseDomain = $baseHost ?: '3kgtrading.local';

if (str_starts_with($baseDomain, 'admin.')) {
    $baseDomain = substr($baseDomain, 6);
}

$adminDomain = 'admin.'.$baseDomain;

// Admin panel on admin.[baseDomain] only
Route::domain($adminDomain)->group(function () {
    Route::get('/', fn () => redirect()->route('admin.dashboard'));

    Route::middleware(['auth', 'verified'])
        ->group(base_path('routes/admin.php'));
});

// Guest SPA (React Router) – same view for all guest paths so client-side routing works
$guestView = fn () => view('guest');

// Public / guest site routes (shared between domain + IP access)
$guestRoutes = function () use ($guestView) {
    // API-like endpoints for the public site
    Route::post('api/contact-request', ContactRequestController::class)
        ->withoutMiddleware([VerifyCsrfToken::class]);

    Route::get('about', $guestView);
    Route::get('services', $guestView);
    Route::get('services/{slug}', $guestView)->where('slug', '[a-z0-9\-]+');
    Route::get('projects', $guestView);
    Route::get('projects/{id}', $guestView)->where('id', '[0-9]+');
    Route::get('contact', $guestView);
    Route::get('quote', $guestView);
    Route::get('request-service', $guestView);
    Route::get('privacy', $guestView);
    Route::get('terms', $guestView);
    Route::get('careers', $guestView);
};

// Base domain (e.g. 3kgtrading.local / production host)
Route::domain($baseDomain)->group(function () use ($guestRoutes, $guestView) {
    // Home route is named only on the base domain
    Route::get('/', $guestView)->name('home');

    // Guest routes
    $guestRoutes();

    // Authenticated user settings routes (profile, password, etc.)
    require __DIR__.'/settings.php';
});

// If you want guest routes accessible via a specific IP as well,
// you can add another domain group here, for example:
// Route::domain('172.18.149.43')->group($guestRoutes);
