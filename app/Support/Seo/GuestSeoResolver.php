<?php

namespace App\Support\Seo;

use Illuminate\Http\Request;

class GuestSeoResolver
{
    /**
     * @return array{
     *     title: string,
     *     description: string,
     *     canonical: string,
     *     og_image: string,
     *     og_type: string,
     *     robots: string,
     *     keywords: string,
     *     breadcrumbs: array<int, array{name: string, url: string}>,
     *     schema_types: array<int, string>,
     *     faqs: array<int, array{question: string, answer: string}>,
     *     service: ?array,
     *     project: ?array,
     *     path: string,
     * }
     */
    public static function forRequest(Request $request): array
    {
        $path = '/'.ltrim($request->path(), '/');
        if ($path === '//') {
            $path = '/';
        }

        $baseUrl = rtrim((string) config('app.url'), '/');
        $pages = config('seo.pages', []);
        $defaultOg = config('seo.default_og_image', '/images/services/general-construction.jpg');

        $breadcrumbs = [['name' => 'Home', 'url' => $baseUrl.'/']];
        $schemaTypes = ['Organization', 'LocalBusiness'];
        $faqs = [];
        $service = null;
        $project = null;

        if (preg_match('#^/services/([^/]+)$#', $path, $matches)) {
            $service = self::findService($matches[1]);
            if ($service) {
                $title = $service['name'].' Services in South Sudan | 3K General Trading';
                $description = mb_substr($service['description'], 0, 155).'…';
                $ogImage = $service['image'];
                $breadcrumbs[] = ['name' => 'Services', 'url' => $baseUrl.'/services'];
                $breadcrumbs[] = ['name' => $service['name'], 'url' => $baseUrl.$path];
                $schemaTypes[] = 'Service';
                $schemaTypes[] = 'BreadcrumbList';
            } else {
                return self::notFound($path, $baseUrl);
            }
        } elseif (preg_match('#^/projects/([^/]+)$#', $path, $matches)) {
            $project = self::findProject($matches[1]);
            if ($project) {
                $title = $project['name'].' | 3K General Trading Projects';
                $description = mb_substr($project['description'], 0, 155).'…';
                $ogImage = $project['image'];
                $breadcrumbs[] = ['name' => 'Projects', 'url' => $baseUrl.'/projects'];
                $breadcrumbs[] = ['name' => $project['name'], 'url' => $baseUrl.$path];
                $schemaTypes[] = 'BreadcrumbList';
            } else {
                return self::notFound($path, $baseUrl);
            }
        } elseif (isset($pages[$path])) {
            $page = $pages[$path];
            $title = $page['title'];
            $description = $page['description'];
            $ogImage = $defaultOg;

            if ($path !== '/') {
                $label = match ($path) {
                    '/about' => 'About Us',
                    '/services' => 'Services',
                    '/projects' => 'Projects',
                    '/contact' => 'Contact Us',
                    '/request-service' => 'Request a Quote',
                    '/careers' => 'Careers',
                    '/privacy' => 'Privacy Policy',
                    '/terms' => 'Terms & Conditions',
                    '/locations/juba' => 'Juba',
                    '/locations/south-sudan' => 'South Sudan',
                    '/locations/east-africa' => 'East Africa',
                    default => $title,
                };
                $breadcrumbs[] = ['name' => $label, 'url' => $baseUrl.$path];
                $schemaTypes[] = 'BreadcrumbList';
            } else {
                $schemaTypes[] = 'WebSite';
            }

            if ($path === '/contact') {
                $schemaTypes[] = 'ContactPage';
            }

            if (str_starts_with($path, '/locations/')) {
                $faqKey = match ($path) {
                    '/locations/juba' => 'juba',
                    '/locations/south-sudan' => 'south-sudan',
                    '/locations/east-africa' => 'east-africa',
                    default => null,
                };
                if ($faqKey) {
                    $faqs = config("seo.faqs.{$faqKey}", []);
                    if ($faqs !== []) {
                        $schemaTypes[] = 'FAQPage';
                    }
                }
            }

            if ($path === '/') {
                $faqs = config('seo.faqs.home', []);
                if ($faqs !== []) {
                    $schemaTypes[] = 'FAQPage';
                }
            }
        } else {
            return self::notFound($path, $baseUrl);
        }

        $pageMeta = $pages[$path] ?? [];

        return [
            'title' => $title ?? '3K General Trading Co. Ltd',
            'description' => $description ?? '',
            'canonical' => $baseUrl.$path,
            'og_image' => self::absoluteUrl($ogImage ?? $defaultOg, $baseUrl),
            'og_type' => $pageMeta['og_type'] ?? 'website',
            'robots' => $pageMeta['robots'] ?? 'index, follow',
            'keywords' => $pageMeta['keywords'] ?? '',
            'breadcrumbs' => $breadcrumbs,
            'schema_types' => array_values(array_unique($schemaTypes)),
            'faqs' => $faqs,
            'service' => $service,
            'project' => $project,
            'path' => $path,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public static function notFound(string $path, string $baseUrl): array
    {
        return [
            'title' => 'Page Not Found | 3K General Trading',
            'description' => 'The page you are looking for could not be found.',
            'canonical' => $baseUrl.$path,
            'og_image' => self::absoluteUrl(config('seo.default_og_image', '/images/services/general-construction.jpg'), $baseUrl),
            'og_type' => 'website',
            'robots' => 'noindex, nofollow',
            'keywords' => '',
            'breadcrumbs' => [['name' => 'Home', 'url' => $baseUrl.'/']],
            'schema_types' => ['Organization', 'LocalBusiness'],
            'faqs' => [],
            'service' => null,
            'project' => null,
            'path' => $path,
        ];
    }

    /**
     * @return array<string, mixed>|null
     */
    public static function findService(string $slug): ?array
    {
        foreach (config('guest-content.services', []) as $service) {
            if (Slug::from($service['name']) === $slug) {
                return $service;
            }
        }

        return null;
    }

    /**
     * @return array<string, mixed>|null
     */
    public static function findProject(string $slug): ?array
    {
        foreach (config('guest-content.projects', []) as $project) {
            if (Slug::from($project['name']) === $slug) {
                return $project;
            }
        }

        return null;
    }

    public static function absoluteUrl(string $path, ?string $baseUrl = null): string
    {
        if (str_starts_with($path, 'http')) {
            return $path;
        }

        $base = $baseUrl ?? rtrim((string) config('app.url'), '/');

        return $base.'/'.ltrim($path, '/');
    }

    /**
     * @return array<int, string>
     */
    public static function allIndexableUrls(): array
    {
        $baseUrl = rtrim((string) config('app.url'), '/');
        $urls = [];

        foreach (array_keys(config('seo.pages', [])) as $path) {
            if ($path === '/quote') {
                continue;
            }
            $urls[] = $baseUrl.$path;
        }

        foreach (config('guest-content.services', []) as $service) {
            $urls[] = $baseUrl.'/services/'.Slug::from($service['name']);
        }

        foreach (config('guest-content.projects', []) as $project) {
            $urls[] = $baseUrl.'/projects/'.Slug::from($project['name']);
        }

        return $urls;
    }
}
