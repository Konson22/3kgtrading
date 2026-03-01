<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="3K General Trading Co. Ltd – Delivering integrated construction, financial management, property & real estate, and business consultancy solutions in South Sudan.">
        <title>{{ config('app.name', '3K General Trading') }} – Construction, Financial & Property Solutions</title>
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/guest.tsx'])
    </head>
    <body class="font-sans antialiased">
        <div id="guest-app"></div>
    </body>
</html>
