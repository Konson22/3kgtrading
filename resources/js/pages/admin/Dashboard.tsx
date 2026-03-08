import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';

type Stats = {
    services: number;
    projects: number;
    contact_submissions: number;
    service_requests: number;
};

type Props = {
    stats: Stats;
};

export default function Dashboard({ stats }: Props) {
    return (
        <AdminLayout>
            <Head title="Dashboard" />
            <div className="space-y-8 p-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Dashboard
                </h1>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title="Services"
                        value={stats.services}
                        href="/services"
                    />
                    <StatCard
                        title="Projects"
                        value={stats.projects}
                        href="/projects"
                    />
                    <StatCard
                        title="Contact submissions"
                        value={stats.contact_submissions}
                        href="/messages"
                    />
                    <StatCard
                        title="Service requests"
                        value={stats.service_requests}
                        href="/messages"
                    />
                </div>
            </div>
        </AdminLayout>
    );
}

function StatCard({
    title,
    value,
    href,
}: {
    title: string;
    value: number;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary/50"
        >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {title}
            </p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                {value}
            </p>
        </Link>
    );
}
