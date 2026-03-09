import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';

type ServiceRequest = {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    service: string | null;
    message: string | null;
    read_at: string | null;
    created_at: string;
};

type Props = {
    serviceRequests: ServiceRequest[];
};

export default function ServiceRequestsIndex({ serviceRequests }: Props) {
    const breadcrumbs = [{ title: 'Service requests', href: '/service-requests' }];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Service requests" />
            <div className="space-y-8 p-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Service requests
                </h1>

                {serviceRequests.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400">
                        No service requests yet.
                    </p>
                ) : (
                    <div className="space-y-4">
                        {serviceRequests.map((req) => (
                            <div
                                key={req.id}
                                className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                            >
                                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-medium text-gray-900 dark:text-gray-100">
                                        {req.name}
                                    </span>
                                    <span>{req.email}</span>
                                    {req.phone && <span>{req.phone}</span>}
                                    {req.company && <span>· {req.company}</span>}
                                    {req.service && <span>· {req.service}</span>}
                                    <span className="ml-auto">
                                        {new Date(req.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                {req.message && (
                                    <p className="mt-2 whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                                        {req.message}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

