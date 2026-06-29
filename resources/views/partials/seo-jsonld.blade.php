@php
    use App\Support\Seo\GuestSeoResolver;

    $business = config('seo.business');
    $siteName = config('seo.site_name');
    $baseUrl = rtrim(config('app.url'), '/');
    $graph = [];

    $graph[] = [
        '@type' => 'Organization',
        '@id' => $baseUrl.'/#organization',
        'name' => $business['legal_name'],
        'url' => $baseUrl,
        'logo' => GuestSeoResolver::absoluteUrl('/favicon.svg'),
        'email' => $business['emails'][0],
        'telephone' => $business['phones'][0],
        'sameAs' => $business['same_as'],
    ];

    $graph[] = [
        '@type' => 'LocalBusiness',
        '@id' => $baseUrl.'/#localbusiness',
        'name' => $business['legal_name'],
        'image' => $seo['og_image'],
        'url' => $baseUrl,
        'telephone' => $business['phones'][0],
        'email' => $business['emails'][0],
        'priceRange' => $business['price_range'],
        'address' => [
            '@type' => 'PostalAddress',
            'streetAddress' => $business['street'],
            'addressLocality' => $business['city'],
            'addressRegion' => $business['region'],
            'addressCountry' => $business['country'],
        ],
        'geo' => [
            '@type' => 'GeoCoordinates',
            'latitude' => $business['latitude'],
            'longitude' => $business['longitude'],
        ],
        'openingHours' => $business['opening_hours'],
        'areaServed' => ['Juba', 'South Sudan', 'East Africa'],
        'sameAs' => $business['same_as'],
    ];

    if (in_array('WebSite', $seo['schema_types'], true)) {
        $graph[] = [
            '@type' => 'WebSite',
            '@id' => $baseUrl.'/#website',
            'url' => $baseUrl,
            'name' => $siteName,
            'publisher' => ['@id' => $baseUrl.'/#organization'],
            'potentialAction' => [
                '@type' => 'SearchAction',
                'target' => $baseUrl.'/services?q={search_term_string}',
                'query-input' => 'required name=search_term_string',
            ],
        ];
    }

    if (in_array('BreadcrumbList', $seo['schema_types'], true) && count($seo['breadcrumbs']) > 1) {
        $items = [];
        foreach ($seo['breadcrumbs'] as $i => $crumb) {
            $items[] = [
                '@type' => 'ListItem',
                'position' => $i + 1,
                'name' => $crumb['name'],
                'item' => $crumb['url'],
            ];
        }
        $graph[] = [
            '@type' => 'BreadcrumbList',
            'itemListElement' => $items,
        ];
    }

    if (! empty($seo['service'])) {
        $graph[] = [
            '@type' => 'Service',
            'name' => $seo['service']['name'],
            'description' => $seo['service']['description'],
            'provider' => ['@id' => $baseUrl.'/#localbusiness'],
            'areaServed' => ['Juba', 'South Sudan', 'East Africa'],
            'url' => $seo['canonical'],
            'image' => GuestSeoResolver::absoluteUrl($seo['service']['image']),
        ];
    }

    if (in_array('ContactPage', $seo['schema_types'], true)) {
        $graph[] = [
            '@type' => 'ContactPage',
            'name' => $seo['title'],
            'url' => $seo['canonical'],
            'description' => $seo['description'],
        ];
    }

    if (in_array('FAQPage', $seo['schema_types'], true) && ! empty($seo['faqs'])) {
        $entities = [];
        foreach ($seo['faqs'] as $faq) {
            $entities[] = [
                '@type' => 'Question',
                'name' => $faq['question'],
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => $faq['answer'],
                ],
            ];
        }
        $graph[] = [
            '@type' => 'FAQPage',
            'mainEntity' => $entities,
        ];
    }

    $jsonLd = [
        '@context' => 'https://schema.org',
        '@graph' => $graph,
    ];
@endphp
<script type="application/ld+json">{!! json_encode($jsonLd, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}</script>
