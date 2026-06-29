<?php

namespace App\Console\Commands;

use App\Services\IndexNowService;
use App\Support\Seo\GuestSeoResolver;
use App\Support\Seo\Slug;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate {--indexnow : Submit URLs to IndexNow after generation}';

    protected $description = 'Generate sitemap.xml and sitemap-images.xml for the guest site';

    public function handle(IndexNowService $indexNow): int
    {
        $baseUrl = rtrim((string) config('app.url'), '/');

        $sitemap = Sitemap::create();
        $imageSitemap = Sitemap::create();

        foreach (array_keys(config('seo.pages', [])) as $path) {
            $sitemap->add(
                Url::create($baseUrl.$path)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                    ->setPriority($path === '/' ? 1.0 : 0.8)
            );
        }

        foreach (config('guest-content.services', []) as $service) {
            $url = $baseUrl.'/services/'.Slug::from($service['name']);
            $sitemap->add(Url::create($url)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)->setPriority(0.7));
            $imageSitemap->add(
                Url::create($url)
                    ->addImage(GuestSeoResolver::absoluteUrl($service['image']), $service['name'])
            );
        }

        foreach (config('guest-content.projects', []) as $project) {
            $url = $baseUrl.'/projects/'.Slug::from($project['name']);
            $sitemap->add(Url::create($url)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)->setPriority(0.6));
            $imageSitemap->add(
                Url::create($url)
                    ->addImage(GuestSeoResolver::absoluteUrl($project['image']), $project['name'])
            );
        }

        $sitemap->writeToFile(public_path('sitemap.xml'));
        $imageSitemap->writeToFile(public_path('sitemap-images.xml'));

        $this->info('Sitemaps generated at public/sitemap.xml and public/sitemap-images.xml');

        if ($this->option('indexnow')) {
            $indexNow->submitAllIndexable();
            $this->info('IndexNow submission attempted.');
        }

        return self::SUCCESS;
    }
}
