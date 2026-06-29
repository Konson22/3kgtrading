import { Helmet } from 'react-helmet-async';

/**
 * Sync document head on client-side route changes using server-rendered SEO from window.__SEO__
 * or optional overrides passed as props.
 */
export default function SeoHead({
    title,
    description,
    canonical,
    ogImage,
    robots = 'index, follow',
    keywords = '',
}) {
    const initial =
        typeof window !== 'undefined' && window.__SEO__
            ? window.__SEO__
            : {};

    const meta = {
        title: title ?? initial.title ?? '3K General Trading Co. Ltd',
        description: description ?? initial.description ?? '',
        canonical: canonical ?? initial.canonical ?? window.location.href,
        ogImage: ogImage ?? initial.og_image ?? '',
        robots: robots ?? initial.robots ?? 'index, follow',
        keywords: keywords ?? initial.keywords ?? '',
    };

    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            {meta.keywords ? (
                <meta name="keywords" content={meta.keywords} />
            ) : null}
            <meta name="robots" content={meta.robots} />
            <link rel="canonical" href={meta.canonical} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.ogImage} />
            <meta property="og:url" content={meta.canonical} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.ogImage} />
        </Helmet>
    );
}
