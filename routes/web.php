<?php

use App\Http\Controllers\FacebookNewsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// API: Facebook page posts for News page (https://www.facebook.com/SSUWCHQ/)
Route::get('api/facebook-news', FacebookNewsController::class);

// Guest SPA (React Router) – same view for all guest paths so client-side routing works
$guestView = fn () => view('guest');

Route::get('/', $guestView)->name('home');
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

// Admin panel: on subdomain when ADMIN_URL is set, else on main domain
if ($adminUrl = config('app.admin_url')) {
    $adminHost = parse_url($adminUrl, PHP_URL_HOST);
    if ($adminHost) {
        Route::domain($adminHost)
            ->middleware(['auth', 'verified'])
            ->group(base_path('routes/admin.php'));
    }
    Route::get('dashboard', fn () => redirect()->to(rtrim($adminUrl, '/').'/dashboard'))
        ->middleware(['auth', 'verified'])
        ->name('dashboard');
} else {
    Route::middleware(['auth', 'verified'])->group(base_path('routes/admin.php'));
}

require __DIR__.'/settings.php';
