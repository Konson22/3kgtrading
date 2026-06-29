<?php

use App\Http\Controllers\ContactRequestController;
use App\Support\Seo\GuestSeoResolver;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

$guestView = fn (Request $request) => view('guest', [
    'seo' => GuestSeoResolver::forRequest($request),
]);

Route::get('/', $guestView)->name('home');

Route::redirect('/quote', '/request-service', 301);

Route::get('/BingSiteAuth.xml', function () {
    $token = config('seo.bing_site_auth_token');
    abort_unless($token, 404);

    return response(
        '<?xml version="1.0"?><users><user>'.e($token).'</user></users>',
        200,
        ['Content-Type' => 'application/xml']
    );
});

Route::get('/{key}.txt', function (string $key) {
    $indexKey = config('seo.indexnow_key');
    abort_unless($indexKey && $key === $indexKey, 404);

    return response($indexKey, 200, ['Content-Type' => 'text/plain']);
})->where('key', '[a-zA-Z0-9-]+');

Route::post('api/contact-request', ContactRequestController::class)
    ->middleware('throttle:5,1')
    ->withoutMiddleware([VerifyCsrfToken::class]);

require __DIR__.'/settings.php';

Route::get('/{any?}', $guestView)
    ->where('any', '^(?!api|login|register|password|verification|user-password|settings).*$')
    ->name('guest');
