import { Link, usePage } from '@inertiajs/react';
import { useMemo } from 'react';
import {
    BarChart3,
    Building2,
    CreditCard,
    FileSpreadsheet,
    FileText,
    LayoutGrid,
    Receipt,
    ScanLine,
    Settings,
    Truck,
    Users,
    Warehouse,
} from 'lucide-react';
import { getCategoryUi, resolveCategory } from '@/lib/business-category';
import { cn, toUrl } from '@/lib/utils';
import { edit as profileEdit } from '@/routes/profile';

const PREFIX = '/admin';

function hrefPath(href) {
    const raw = toUrl(href);
    try {
        if (raw.startsWith('http://') || raw.startsWith('https://')) {
            return new URL(raw).pathname;
        }
    } catch {
        /* ignore */
    }
    return raw.split('?')[0] || '/';
}

export default function AdminSidebar() {
    const { url, props } = usePage();
    const { business } = props;
    const path = hrefPath(url.split('?')[0]);
    const category = resolveCategory(props);

    const sections = useMemo(() => {
        const ui = getCategoryUi(category);

        return [
            {
                label: 'Overview',
                items: [
                    { label: 'Dashboard', path: '/dashboard', icon: LayoutGrid },
                ],
            },
            {
                label: 'Sales & stock',
                items: [
                    {
                        label: ui.posNavLabel,
                        path: '/pos',
                        icon: ScanLine,
                    },
                    {
                        label: ui.inventoryNavLabel,
                        path: '/inventory',
                        icon: Warehouse,
                    },
                ],
            },
            {
                label: 'Commercial',
                items: [
                    { label: 'Customers', path: '/customers', icon: Users },
                    { label: 'Suppliers', path: '/suppliers', icon: Truck },
                    {
                        label: ui.isWholesale ? 'Quotations & MOQ' : 'Quotations',
                        path: '/quotations',
                        icon: FileSpreadsheet,
                    },
                    {
                        label: ui.isWholesale ? 'Invoices & delivery' : 'Invoices',
                        path: '/invoices',
                        icon: FileText,
                    },
                    { label: 'Payments', path: '/payments', icon: CreditCard },
                    { label: 'Receipts', path: '/receipts', icon: Receipt },
                ],
            },
            {
                label: 'Insights',
                items: [
                    {
                        label: ui.quickLinkReportsLabel,
                        path: '/reports',
                        icon: BarChart3,
                    },
                ],
            },
            {
                label: 'Organization',
                items: [
                    { label: 'Branches', path: '/branches', icon: Building2 },
                    { label: 'Users & roles', path: '/users', icon: Users },
                ],
            },
            {
                label: 'System',
                items: [{ label: 'Settings', path: '/settings', icon: Settings }],
            },
        ];
    }, [category]);

    return (
        <aside
            className={cn(
                'flex h-screen min-h-0 w-72 shrink-0 flex-col border-r border-neutral-200 bg-white',
                'font-sans text-neutral-800',
            )}
        >
            <div className="flex h-14 shrink-0 items-center border-b border-neutral-200 px-4 lg:h-16">
                <Link
                    href={`${PREFIX}/dashboard`}
                    className="min-w-0 font-display leading-tight text-neutral-900"
                >
                    <span className="block truncate text-lg font-semibold tracking-tight">
                        {business?.name ?? 'POS Admin'}
                    </span>
                    <span className="mt-0.5 block truncate text-xs font-medium text-neutral-500">
                        {getCategoryUi(category).typeBadgeLabel} · Admin
                    </span>
                </Link>
            </div>
            <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
                {sections.map((section) => (
                    <div key={section.label} className="mb-6">
                        <p className="mb-2 px-2 text-xs font-semibold tracking-wide text-neutral-400 uppercase">
                            {section.label}
                        </p>
                        <ul className="space-y-0.5">
                            {section.items.map((item) => {
                                const href = `${PREFIX}${item.path}`;
                                const active =
                                    path === href || path.startsWith(`${href}/`);
                                const Icon = item.icon;
                                return (
                                    <li key={item.path}>
                                        <Link
                                            href={href}
                                            className={cn(
                                                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                                active
                                                    ? 'bg-neutral-900 text-white'
                                                    : 'text-neutral-700 hover:bg-neutral-100',
                                            )}
                                        >
                                            <Icon className="size-4 shrink-0 opacity-80" />
                                            <span className="min-w-0 flex-1 truncate">
                                                {item.label}
                                            </span>
                                            {item.badge ? (
                                                <span
                                                    className={cn(
                                                        'shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase',
                                                        active
                                                            ? 'bg-white/20 text-white'
                                                            : item.badgeClass,
                                                    )}
                                                >
                                                    {item.badge}
                                                </span>
                                            ) : null}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
                <div className="border-t border-neutral-200 px-2 pt-4">
                    <Link
                        href={profileEdit()}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100"
                    >
                        Account & security
                    </Link>
                </div>
            </nav>
        </aside>
    );
}
