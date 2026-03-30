import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    Package,
    ScanLine,
    ShoppingCart,
    TriangleAlert,
    TrendingUp,
} from 'lucide-react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { getCategoryUi, getModuleBlurb, resolveCategory } from '@/lib/business-category';
import { cn } from '@/lib/utils';

export default function AdminPageShell() {
    const props = usePage().props;
    const { title, module: mod, stats } = props;
    const category = resolveCategory(props);

    return (
        <AdminLayout>
            <Head title={title} />
            {mod === 'dashboard' && stats ? (
                <DashboardBody title={title} stats={stats} category={category} />
            ) : mod === 'settings' ? (
                <SettingsBody title={title} />
            ) : (
                <ModulePlaceholder title={title} moduleKey={mod} category={category} />
            )}
        </AdminLayout>
    );
}

function DashboardBody({ title, stats, category }) {
    const ui = getCategoryUi(category);

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <Heading title={title} description={ui.adminDashboardDescription} />
                </div>
                <Button asChild className="gap-2 self-start sm:self-auto">
                    <Link href="/admin/pos">
                        {ui.openPosLabel}
                        <ArrowRight className="size-4" />
                    </Link>
                </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Sales today"
                    value={stats.salesToday ?? 0}
                    hint="All branches (aggregated)"
                    icon={ShoppingCart}
                />
                <StatCard
                    title="Transactions"
                    value={stats.transactionsToday ?? 0}
                    hint="Completed checkouts today"
                    icon={ScanLine}
                />
                <StatCard
                    title="Active products"
                    value={stats.productsCount ?? 0}
                    hint="Catalog size"
                    icon={Package}
                />
                <StatCard
                    title={ui.alertsCardTitle}
                    value={(stats.lowStockCount ?? 0) + (stats.expiringLotsCount ?? 0)}
                    hint={ui.alertsCardHint(stats, 'admin')}
                    icon={TriangleAlert}
                    emphasize
                />
            </div>
            <Card className="border-neutral-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-lg">
                        <TrendingUp className="size-5 text-emerald-700" />
                        {ui.gettingStartedTitle}
                    </CardTitle>
                    <CardDescription>{ui.gettingStartedDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" size="sm">
                        <Link href="/admin/invoices">{ui.quickLinkInvoiceLabel}</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                        <Link href="/admin/inventory">{ui.quickLinkInventoryLabel}</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                        <Link href="/admin/reports">{ui.quickLinkReportsLabel}</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

function StatCard({ title, value, hint, icon: Icon, emphasize }) {
    return (
        <Card
            className={cn(
                'border-neutral-200',
                emphasize && 'border-amber-200 bg-amber-50/40',
            )}
        >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">{title}</CardTitle>
                <Icon className={cn('size-4', emphasize ? 'text-amber-700' : 'text-neutral-400')} />
            </CardHeader>
            <CardContent>
                <p className="font-display text-2xl font-semibold tabular-nums text-neutral-900">
                    {value}
                </p>
                <p className="mt-1 text-xs text-neutral-500">{hint}</p>
            </CardContent>
        </Card>
    );
}

function SettingsBody({ title }) {
    return (
        <div className="mx-auto max-w-lg space-y-6">
            <Heading
                title={title}
                description="Business-wide defaults and document numbering will live here. Use account settings for your login profile."
            />
            <Card>
                <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>Profile, password, two-factor, appearance.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Button asChild variant="outline">
                        <Link href="/settings/profile">Open profile settings</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

function ModulePlaceholder({ title, moduleKey, category }) {
    const blurb = getModuleBlurb('admin', moduleKey, category);

    return (
        <div className="space-y-4">
            <Heading title={title} description={blurb} />
            <Card className="border-dashed border-neutral-300 bg-white">
                <CardHeader>
                    <CardTitle className="text-base">Placeholder</CardTitle>
                    <CardDescription>
                        This screen is routed and authorized. Add tables, forms, and Laravel
                        endpoints following retail inventory and checkout patterns.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
