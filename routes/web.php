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
Route::get('projects', $guestView);
Route::get('projects/{id}', $guestView)->where('id', '[0-9]+');
Route::get('billing', $guestView);
Route::get('news', $guestView);
Route::get('careers', $guestView);
Route::get('contact', $guestView);
Route::get('clients-partners', $guestView);
Route::get('privacy', $guestView);
Route::get('terms', $guestView);
Route::get('apply-connection', $guestView);
Route::get('report-issue', $guestView);

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
