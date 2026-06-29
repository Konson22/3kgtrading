<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @include('partials.tracking-scripts')

        <title>{{ $seo['title'] }}</title>
        <meta name="description" content="{{ $seo['description'] }}">
        @if ($seo['keywords'])
            <meta name="keywords" content="{{ $seo['keywords'] }}">
        @endif
        <meta name="robots" content="{{ $seo['robots'] }}">
        <link rel="canonical" href="{{ $seo['canonical'] }}">

        <meta property="og:title" content="{{ $seo['title'] }}">
        <meta property="og:description" content="{{ $seo['description'] }}">
        <meta property="og:image" content="{{ $seo['og_image'] }}">
        <meta property="og:url" content="{{ $seo['canonical'] }}">
        <meta property="og:type" content="{{ $seo['og_type'] }}">
        <meta property="og:site_name" content="{{ config('seo.site_name') }}">
        <meta property="og:locale" content="{{ config('seo.locale') }}">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $seo['title'] }}">
        <meta name="twitter:description" content="{{ $seo['description'] }}">
        <meta name="twitter:image" content="{{ $seo['og_image'] }}">

        @if (config('seo.google_site_verification'))
            <meta name="google-site-verification" content="{{ config('seo.google_site_verification') }}">
        @endif
        @if (config('seo.bing_site_verification'))
            <meta name="msvalidate.01" content="{{ config('seo.bing_site_verification') }}">
        @endif
        @if (config('seo.yandex_verification'))
            <meta name="yandex-verification" content="{{ config('seo.yandex_verification') }}">
        @endif

        @include('partials.seo-jsonld', ['seo' => $seo])

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

        <script>
            window.__SEO__ = @json($seo);
        </script>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/guest.tsx'])
    </head>
    <body class="font-sans antialiased">
        @if (config('seo.gtm_container_id'))
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ config('seo.gtm_container_id') }}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        @endif
        <div id="guest-app"></div>
    </body>
</html>
