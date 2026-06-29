# Search Engine Submission Checklist

## Pre-Submission

- [x] `sitemap.xml` generated at `/sitemap.xml`
- [x] `sitemap-images.xml` at `/sitemap-images.xml`
- [x] `robots.txt` includes Sitemap directives
- [x] Per-page titles and meta descriptions
- [x] Canonical URLs on all pages
- [x] JSON-LD structured data
- [ ] Set `APP_URL=https://3kgtrading.com` in production `.env`
- [ ] Add verification tokens to `.env` (see below)

## Environment Variables to Configure

```env
APP_URL=https://3kgtrading.com
GOOGLE_SITE_VERIFICATION=your-google-token
BING_SITE_VERIFICATION=your-bing-token
BING_SITE_AUTH_TOKEN=your-bing-auth-token
YANDEX_VERIFICATION=your-yandex-token
INDEXNOW_KEY=your-random-key-string
GTM_CONTAINER_ID=GTM-XXXXXXX
META_PIXEL_ID=
X_PIXEL_ID=
WHATSAPP_NUMBER=211929986001
```

## Google Search

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property `https://3kgtrading.com`
3. Verify via HTML meta tag (`GOOGLE_SITE_VERIFICATION`)
4. Submit sitemap: `https://3kgtrading.com/sitemap.xml`
5. Request indexing for: `/`, `/services`, `/contact`, `/request-service`, location pages

## Bing & Yahoo

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site and verify via meta tag (`BING_SITE_VERIFICATION`)
3. Upload `BingSiteAuth.xml` — served at `/BingSiteAuth.xml` when `BING_SITE_AUTH_TOKEN` is set
4. Submit sitemap: `https://3kgtrading.com/sitemap.xml`
5. Enable IndexNow in Bing Webmaster (uses `INDEXNOW_KEY`)

## IndexNow Setup

1. Generate a random key (e.g. `a1b2c3d4e5f6`)
2. Set `INDEXNOW_KEY=a1b2c3d4e5f6` in `.env`
3. Verify key file: `https://3kgtrading.com/a1b2c3d4e5f6.txt`
4. Run: `php artisan sitemap:generate --indexnow`
5. Scheduled daily via `routes/console.php`

Participating engines: Bing, Yandex, Seznam, Naver, and others.

## Yandex

1. [Yandex Webmaster](https://webmaster.yandex.com/)
2. Verify via `YANDEX_VERIFICATION` meta tag
3. Submit sitemap URL

## DuckDuckGo / Brave / Ecosia

No direct submission. These engines use Bing and/or their own crawlers. Ensure:

- Fast page load
- Semantic HTML
- No tracking without consent (privacy-friendly)
- Valid sitemap submitted to Bing

## AI Search (ChatGPT, Perplexity, Gemini, Copilot)

No submission API. Optimize via:

- FAQPage schema (implemented)
- Clear H1 + page summaries
- Organization/LocalBusiness entity data
- Accurate NAP and `sameAs` social profiles
- Fast, crawlable HTML with server-rendered meta

## Post-Deploy Commands

```bash
php artisan config:cache
php artisan sitemap:generate --indexnow
```

## Monitoring

- Google Search Console: impressions, clicks, coverage
- Bing Webmaster: crawl errors, IndexNow status
- GA4 / GTM: conversion events (`form_submit`, `whatsapp_click`, etc.)
