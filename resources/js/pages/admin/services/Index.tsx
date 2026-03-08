import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';

type Service = {
    id: number;
    name: string;
    slug: string;
    is_published: boolean;
    sort_order: number;
};

type Props = {
    services: Service[];
};

export default function ServicesIndex({ services }: Props) {
    const breadcrumbs = [{ title: 'Services', href: '/services' }];

    function destroy(id: number) {
        if (confirm('Delete this service?')) {
            router.delete(`/services/${id}`);
        }
    }

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Services" />
            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        Services
                    </h1>
                    <Button asChild>
                        <Link href="/services/create">Add service</Link>
                    </Button>
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Slug
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {services.map((service) => (
                                <tr
                                    key={service.id}
                                    className="bg-white dark:bg-gray-900"
                                >
                                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                                        {service.name}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                        {service.slug}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={
                                                service.is_published
                                                    ? 'text-green-600 dark:text-green-400'
                                                    : 'text-gray-500'
                                            }
                                        >
                                            {service.is_published
                                                ? 'Published'
                                                : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <Link
                                            href={`/services/${service.id}/edit`}
                                            className="mr-2 text-primary hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => destroy(service.id)}
                                            className="text-red-600 hover:underline dark:text-red-400"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
