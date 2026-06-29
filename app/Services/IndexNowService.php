<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class IndexNowService
{
    public function submit(array $urls): bool
    {
        $key = config('seo.indexnow_key');

        if (! $key || $urls === []) {
            return false;
        }

        $host = parse_url((string) config('app.url'), PHP_URL_HOST);
        $keyLocation = rtrim((string) config('app.url'), '/')."/{$key}.txt";

        try {
            $response = Http::timeout(10)->post('https://api.indexnow.org/indexnow', [
                'host' => $host,
                'key' => $key,
                'keyLocation' => $keyLocation,
                'urlList' => array_values($urls),
            ]);

            if (! $response->successful()) {
                Log::warning('IndexNow submission failed', [
                    'status' => $response->status(),
                    'body' => $response->body(),
                ]);

                return false;
            }

            return true;
        } catch (\Throwable $e) {
            Log::warning('IndexNow submission error', ['message' => $e->getMessage()]);

            return false;
        }
    }

    public function submitAllIndexable(): bool
    {
        return $this->submit(\App\Support\Seo\GuestSeoResolver::allIndexableUrls());
    }
}
