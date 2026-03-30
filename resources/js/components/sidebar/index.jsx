import { Link, usePage } from '@inertiajs/react';
import { useMemo } from 'react';
import {
    BarChart3,
    Bell,
    Building2,
    CloudOff,
    Cog,
    FileText,
    LayoutGrid,
    ScanLine,
    Settings,
    Truck,
    Usb,
    Users,
    Warehouse,
    X,
} from 'lucide-react';
import { getCategoryUi, resolveCategory } from '@/lib/business-category';
import { cn, toUrl } from '@/lib/utils';
import { dashboard } from '@/routes';
import { edit as profileEdit } from '@/routes/profile';

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

function buildAppNavSections(ui) {
    return [
    {
        label: 'Overview',
        items: [
            {
                label: 'Dashboard',
                href: dashboard(),
                icon: LayoutGrid,
            },
        ],
    },
    {
        label: 'Sales & stock',
        items: [
            { label: ui.posNavLabel, href: '/modules/pos', icon: ScanLine },
            { label: ui.inventoryNavLabel, href: '/modules/inventory', icon: Warehouse },
        ],
    },
    {
        label: 'Commerce',
        items: [
            { label: 'Documents', href: '/modules/documents', icon: FileText },
            { label: 'Purchasing', href: '/modules/purchasing', icon: Truck },
        ],
    },
    {
        label: 'Organization',
        items: [
            { label: 'Branches', href: '/modules/branches', icon: Building2 },
            { label: 'Users & roles', href: '/modules/users', icon: Users },
        ],
    },
    {
        label: 'Insights',
        items: [
            { label: ui.quickLinkReportsLabel, href: '/modules/reports', icon: BarChart3 },
        ],
    },
    {
        label: 'Platform',
        items: [
            {
                label: 'Notifications',
                href: '/modules/notifications',
                icon: Bell,
            },
            { label: 'Devices', href: '/modules/devices', icon: Usb },
            { label: 'Offline sync', href: '/modules/offline', icon: CloudOff },
            {
                label: 'Administration',
                href: '/modules/administration',
                icon: Cog,
            },
        ],
    },
    {
        label: 'Account',
        items: [
            {
                label: 'Settings',
                href: profileEdit(),
                icon: Settings,
            },
        ],
    },
];
}

function NavLink({ item, onNavigate }) {
    const { url } = usePage();
    const Icon = item.icon;
    const currentPath = url.split('?')[0];
    const itemPath = hrefPath(item.href);
    const active =
        currentPath === itemPath ||
        (itemPath !== '/' && currentPath.startsWith(`${itemPath}/`));

    return (
        <Link
            href={item.href}
            prefetch
            onClick={() => onNavigate?.()}
            className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                active
                    ? 'bg-primary text-white shadow-md shadow-black/20'
                    : 'text-white/80 hover:bg-white/10 hover:text-white',
            )}
        >
            <Icon className="size-4 shrink-0 opacity-90" aria-hidden />
            <span className="min-w-0 flex-1 truncate">{item.label}</span>
            {item.badge ? (
                <span className="shrink-0 rounded bg-white/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white/70">
                    {item.badge}
                </span>
            ) : null}
        </Link>
    );
}

export default function AppSidebar({ open, onClose }) {
    const { props } = usePage();
    const { business } = props;
    const category = resolveCategory(props);
    const ui = getCategoryUi(category);
    const navSections = useMemo(() => buildAppNavSections(ui), [category]);

    const footerTag = ui.isPharmacy
        ? 'Pharmacy · batch & expiry'
        : ui.isRestaurant
          ? 'Food service POS'
          : ui.isWholesale
            ? 'Wholesale suite'
            : 'POS & inventory';

    return (
        <>
            {open ? (
                <button
                    type="button"
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    aria-label="Close menu"
                    onClick={onClose}
                />
            ) : null}

            <aside
                className={cn(
                    'flex w-60 shrink-0 flex-col border-r border-white/10 bg-primary-dark text-white',
                    'fixed inset-y-0 left-0 z-50 transition-transform duration-200 ease-out',
                    'lg:static lg:z-auto lg:translate-x-0',
                    open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
                )}
            >
                <div className="flex h-14 items-center justify-between gap-2 border-b border-white/10 px-3">
                    <Link
                        href={dashboard()}
                        prefetch
                        onClick={() => onClose?.()}
                        className="min-w-0 font-display leading-tight text-white transition-opacity hover:opacity-90"
                    >
                        <span className="block truncate text-lg font-semibold tracking-tight">
                            {business?.name ?? (
                                <>
                                    3K <span className="font-normal text-white/70">POS</span>
                                </>
                            )}
                        </span>
                        <span className="mt-0.5 block truncate text-[11px] font-medium text-white/60">
                            {ui.typeBadgeLabel}
                        </span>
                    </Link>
                    <button
                        type="button"
                        className="rounded-md p-2 text-white/70 hover:bg-white/10 hover:text-white lg:hidden"
                        aria-label="Close sidebar"
                        onClick={onClose}
                    >
                        <X className="size-5" />
                    </button>
                </div>

                <nav
                    className="flex flex-1 flex-col gap-4 overflow-y-auto p-3"
                    aria-label="Main"
                >
                    {navSections.map((section) => (
                        <div key={section.label}>
                            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                                {section.label}
                            </p>
                            <div className="flex flex-col gap-1">
                                {section.items.map((item) => (
                                    <NavLink
                                        key={item.label}
                                        item={item}
                                        onNavigate={onClose}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>

                <div className="border-t border-white/10 p-3 text-center text-[11px] text-white/35">
                    {footerTag} · {ui.typeBadgeLabel}
                </div>
            </aside>
        </>
    );
}
