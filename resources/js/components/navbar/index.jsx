import { router, usePage } from '@inertiajs/react';
import { Bell, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';
import { MODULES } from '@/data/inventorySystemModules';
import { getCategoryUi, resolveCategory } from '@/lib/business-category';
import { cn } from '@/lib/utils';

function titleFromPath(path) {
    const clean = path.split('?')[0] || '/';
    if (clean === '/dashboard' || clean === '/') return 'Dashboard';
    const parts = clean.replace(/^\//, '').split('/').filter(Boolean);
    if (
        (parts[0] === 'admin' || parts[0] === 'branch') &&
        parts[1]
    ) {
        return parts[1]
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
    }
    if (parts[0] === 'modules' && parts[1] && MODULES[parts[1]]) {
        return MODULES[parts[1]].shortTitle;
    }
    const seg = parts[0];
    if (!seg) return 'Dashboard';
    return seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' ');
}

function branchContextPost(branchId) {
    router.post(
        '/context/branch',
        { branch_id: branchId },
        { preserveScroll: true },
    );
}

export default function Navbar({ onMenuOpen }) {
    const { url, props } = usePage();
    const { auth, business, businessContext, branches = [], currentBranch, title: pageTitle } = props;
    const user = auth?.user;
    const title = pageTitle || titleFromPath(url.split('?')[0]);
    const businessTagline = [business?.name, business?.slogan]
        .filter(Boolean)
        .join(' · ');
    const category = resolveCategory(props);
    const categoryUi = getCategoryUi(category);
    const showBranchSelect =
        user?.is_admin && Array.isArray(branches) && branches.length > 1;

    return (
        <header
            className={cn(
                'sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between gap-4',
                'border-b border-neutral-200 bg-white/90 px-3 backdrop-blur-md sm:px-4',
                'supports-[backdrop-filter]:bg-white/75',
            )}
        >
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                {typeof onMenuOpen === 'function' ? (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="shrink-0 lg:hidden"
                        aria-label="Open menu"
                        onClick={onMenuOpen}
                    >
                        <PanelLeft className="size-5" />
                    </Button>
                ) : null}
                <div className="min-w-0">
                    <h1 className="truncate font-display text-base font-semibold text-neutral-900">
                        {title}
                    </h1>
                    <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                        {businessContext ? (
                            <span
                                className={cn(
                                    'shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase',
                                    categoryUi.typeBadgeClass,
                                )}
                            >
                                {categoryUi.typeBadgeLabel}
                            </span>
                        ) : null}
                        {businessTagline ? (
                            <p className="truncate text-xs text-neutral-500">
                                {businessTagline}
                            </p>
                        ) : null}
                        {showBranchSelect ? (
                            <Select
                                value={
                                    currentBranch?.id != null
                                        ? String(currentBranch.id)
                                        : undefined
                                }
                                onValueChange={(v) =>
                                    branchContextPost(Number(v))
                                }
                            >
                                <SelectTrigger
                                    className="h-7 w-[min(100%,11rem)] border-neutral-200 bg-white text-xs"
                                    aria-label="Active branch"
                                >
                                    <SelectValue placeholder="Branch" />
                                </SelectTrigger>
                                <SelectContent>
                                    {branches.map((b) => (
                                        <SelectItem
                                            key={b.id}
                                            value={String(b.id)}
                                        >
                                            {b.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        ) : currentBranch ? (
                            <p className="truncate text-xs text-neutral-600">
                                {currentBranch.name}
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="text-neutral-500"
                    aria-label="Notifications"
                    disabled
                    title="Coming soon"
                >
                    <Bell className="size-5" />
                </Button>

                {auth?.user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="h-10 max-w-[200px] gap-2 px-2 hover:bg-neutral-100"
                                data-test="navbar-user-menu"
                            >
                                <UserInfo user={auth.user} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="w-56 rounded-lg"
                        >
                            <UserMenuContent user={auth.user} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : null}
            </div>
        </header>
    );
}
