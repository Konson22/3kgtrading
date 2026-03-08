import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';

type ContactSubmission = {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
    message: string;
    read_at: string | null;
    created_at: string;
};

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
    contactSubmissions: ContactSubmission[];
    serviceRequests: ServiceRequest[];
};

export default function MessagesIndex({
    contactSubmissions,
    serviceRequests,
}: Props) {
    const breadcrumbs = [{ title: 'Messages', href: '/messages' }];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Messages" />
            <div className="space-y-8 p-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Messages
                </h1>

                <section>
                    <h2 className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                        Contact form submissions
                    </h2>
                    {contactSubmissions.length === 0 ? (
                        <p className="text-gray-500">
                            No contact submissions yet.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {contactSubmissions.map((sub) => (
                                <div
                                    key={sub.id}
                                    className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                        <span className="font-medium text-gray-900 dark:text-gray-100">
                                            {sub.name}
                                        </span>
                                        <span>{sub.email}</span>
                                        {sub.phone && <span>{sub.phone}</span>}
                                        {sub.subject && (
                                            <span>· {sub.subject}</span>
                                        )}
                                        <span className="ml-auto">
                                            {new Date(
                                                sub.created_at,
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="mt-2 whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                                        {sub.message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                        Service requests
                    </h2>
                    {serviceRequests.length === 0 ? (
                        <p className="text-gray-500">
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
                                        {req.company && (
                                            <span>· {req.company}</span>
                                        )}
                                        {req.service && (
                                            <span>· {req.service}</span>
                                        )}
                                        <span className="ml-auto">
                                            {new Date(
                                                req.created_at,
                                            ).toLocaleDateString()}
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
                </section>
            </div>
        </AdminLayout>
    );
}
