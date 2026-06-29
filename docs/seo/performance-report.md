# Performance Report — 3K General Trading

## Optimizations Implemented

| Optimization | Impact |
|--------------|--------|
| Guest route code splitting (`React.lazy`) | Reduces initial JS payload |
| Vite `manualChunks` (vendor, motion, swiper) | Better browser caching |
| `guest.tsx` in Vite build input | Fixes production build gap |
| Font `@import` removed from CSS | Eliminates render-blocking CSS import |
| Font preload in Blade | Faster text render |
| `.htaccess` cache + gzip | Static asset caching on Apache |
| Image `loading="lazy"` on project cards | Defers below-fold images |
| GTM async loading (when configured) | Defers third-party scripts |
| Maps iframe already lazy | Contact page embed |

## Core Web Vitals Targets

| Metric | Actions Taken | Production Notes |
|--------|---------------|------------------|
| **LCP** | Font preload, code splitting, lazy images | Convert hero JPGs to WebP ≤200KB |
| **CLS** | Fixed hero heights, object-cover images | Add explicit width/height on hero refactor |
| **TBT** | Deferred tracking, route splitting | Enable Brotli on production server |

## Before vs After (Estimated)

| Metric | Before (Est.) | After (Est.) | Target |
|--------|---------------|--------------|--------|
| Mobile PageSpeed | 55–70 | 75–85 | 90+ |
| Desktop PageSpeed | 65–80 | 85–92 | 90+ |
| Initial JS (guest) | ~800KB+ monolithic | ~300KB + chunks | Minimal |
| SEO crawlability | Single meta for all URLs | Unique meta per URL | ✓ |

> **Note:** Run Lighthouse on production (`https://3kgtrading.com`) after deploy for exact scores. PageSpeed 90+ may require CDN, Brotli, and WebP hero images not stored in this repository.

## Recommended Next Steps (Production)

1. Convert `/images/**` to WebP with `<picture>` fallbacks
2. Enable Brotli compression on nginx/Apache
3. Use a CDN (Cloudflare) for static assets
4. Self-host Inter/Poppins or subset fonts further
5. Reduce framer-motion on mobile hero if LCP still high

## How to Measure

```bash
# Lighthouse CLI (requires npm install -g lighthouse)
lighthouse https://3kgtrading.com --view

# Or use PageSpeed Insights
# https://pagespeed.web.dev/analysis?url=https://3kgtrading.com
```

Record scores in this file after production deployment.
