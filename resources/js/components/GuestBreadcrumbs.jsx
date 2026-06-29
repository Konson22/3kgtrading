import { Link } from 'react-router-dom';

export default function GuestBreadcrumbs({ items = [] }) {
    if (items.length <= 1) {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-gray-50">
            <ol className="container-px mx-auto flex max-w-6xl flex-wrap items-center gap-1 py-3 text-sm text-gray-600">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.url} className="flex items-center gap-1">
                            {index > 0 && (
                                <span aria-hidden="true" className="text-gray-400">
                                    /
                                </span>
                            )}
                            {isLast ? (
                                <span aria-current="page" className="font-medium text-gray-900">
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    to={item.url.replace(/^https?:\/\/[^/]+/, '') || '/'}
                                    className="hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export function breadcrumbsFromSeo() {
    if (typeof window === 'undefined' || !window.__SEO__?.breadcrumbs) {
        return [];
    }

    return window.__SEO__.breadcrumbs;
}
