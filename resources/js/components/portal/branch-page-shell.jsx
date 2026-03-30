import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    Package,
    ScanLine,
    ShoppingCart,
    TriangleAlert,
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
import BranchLayout from '@/layouts/branch-layout';
import { getCategoryUi, getModuleBlurb, resolveCategory } from '@/lib/business-category';
import { cn } from '@/lib/utils';

export default function BranchPageShell() {
    const props = usePage().props;
    const { title, module: mod, stats } = props;
    const category = resolveCategory(props);

    return (
        <BranchLayout>
            <Head title={title} />
            {mod === 'dashboard' && stats ? (
                <DashboardBody title={title} stats={stats} category={category} />
            ) : mod === 'settings' ? (
                <SettingsBody title={title} />
            ) : (
                <ModulePlaceholder title={title} moduleKey={mod} category={category} />
            )}
        </BranchLayout>
    );
}

function DashboardBody({ title, stats, category }) {
    const ui = getCategoryUi(category);

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <Heading title={title} description={ui.branchDashboardDescription} />
                </div>
                <Button asChild className="gap-2 self-start sm:self-auto">
                    <Link href="/branch/pos">
                        {ui.openPosLabel}
                        <ArrowRight className="size-4" />
                    </Link>
                </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Sales today"
                    value={stats.salesToday ?? 0}
                    hint="This branch"
                    icon={ShoppingCart}
                />
                <StatCard
                    title="Transactions"
                    value={stats.transactionsToday ?? 0}
                    hint="Today"
                    icon={ScanLine}
                />
                <StatCard
                    title="Active products"
                    value={stats.productsCount ?? 0}
                    hint="Catalog"
                    icon={Package}
                />
                <StatCard
                    title={ui.alertsCardTitle}
                    value={(stats.lowStockCount ?? 0) + (stats.expiringLotsCount ?? 0)}
                    hint={ui.alertsCardHint(stats, 'branch')}
                    icon={TriangleAlert}
                    emphasize
                />
            </div>
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
                description="Branch staff settings — profile, password, and preferences."
            />
            <Card>
                <CardHeader>
                    <CardTitle>Account</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button asChild variant="outline">
                        <Link href="/settings/profile">Open profile settings</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

function ModulePlaceholder({ title, moduleKey, category }) {
    const blurb = getModuleBlurb('branch', moduleKey, category);

    return (
        <div className="space-y-4">
            <Heading title={title} description={blurb} />
            <Card className="border-dashed border-neutral-300 bg-white">
                <CardHeader>
                    <CardTitle className="text-base">Placeholder</CardTitle>
                    <CardDescription>
                        Build CRUD and reports with branch_id scoping for retail operations.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
