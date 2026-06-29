# Ranking Recommendations — South Sudan & East Africa

## Local SEO Priorities

1. **Google Business Profile** — Claim and verify listing at Malakia Plaza, Juba. Match NAP exactly with website.
2. **Bing Places** — Create listing; sync with Bing Webmaster Tools.
3. **Facebook Page** — Already linked; post project updates regularly for social signals (Bing weights these).
4. **Local citations** — List on South Sudan business directories with consistent NAP.

## Keyword Strategy

Target keywords now integrated into page meta and content:

| Keyword | Primary Page |
|---------|--------------|
| General Trading Company in South Sudan | Homepage, `/locations/south-sudan` |
| Building Materials Supplier in Juba | `/locations/juba`, General Construction service |
| Procurement Services in South Sudan | `/services`, homepage |
| Logistics Company in South Sudan | Homepage FAQ, `/locations/south-sudan` |
| Import and Export Services in South Sudan | `/services`, `/locations/east-africa` |
| Office Supplies in South Sudan | `/locations/south-sudan` |
| Trading and Procurement Company in East Africa | `/locations/east-africa` |

## Content Recommendations

1. **Case studies** — Expand project detail pages with outcomes, photos, client quotes (Article schema).
2. **Blog/news** — Project completions, SSUWC partnerships; submit via IndexNow on publish.
3. **FAQ expansion** — Add service-specific FAQs to each `/services/:slug` page.
4. **Testimonials** — Add client quotes with `Review` schema when available.

## Link Building

- Partner pages: SSUWC, NGO clients (with permission)
- South Sudan chamber of commerce / trade associations
- Industry directories for construction and procurement
- Press releases for major project wins

## Technical Maintenance

```bash
# Regenerate sitemap after content changes
php artisan sitemap:generate --indexnow

# Schedule runs daily (already configured in routes/console.php)
# Ensure cron: * * * * * php /path/to/artisan schedule:run
```

## AI Search Visibility

- Keep FAQ answers factual and concise (ideal for AI snippets)
- Use clear entity name: **3K General Trading Co. Ltd**
- Maintain consistent address/phone across web and social
- Add `author` and `datePublished` when blog/case studies launch

## Conversion Optimization

- WhatsApp button tracks `whatsapp_click` — monitor in GA4
- Sticky mobile bar increases mobile conversions
- Unified "Request a Quote" CTA reduces confusion
- Trust stats (10+ years, 50+ projects) build credibility

## Competitive Advantage in South Sudan

- Emphasize compliance, government/NGO experience
- Highlight SSUWC and infrastructure project portfolio
- Fast quote response — monitor `form_submit` conversion rate
- Mobile-first UX (critical for local market bandwidth)
