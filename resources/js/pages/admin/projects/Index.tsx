import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';

type Project = {
    id: number;
    name: string;
    client: string;
    start_date: string | null;
    end_date: string | null;
    value: string | null;
};

type Props = {
    projects: Project[];
};

export default function ProjectsIndex({ projects }: Props) {
    const breadcrumbs = [{ title: 'Projects', href: '/projects' }];

    function destroy(id: number) {
        if (confirm('Delete this project?')) {
            router.delete(`/projects/${id}`);
        }
    }

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        Projects
                    </h1>
                    <Button asChild>
                        <Link href="/projects/create">Add project</Link>
                    </Button>
                </div>
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                    <table className="w-full min-w-[640px]">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Client
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Period
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Value
                                </th>
                                <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {projects.map((project) => (
                                <tr
                                    key={project.id}
                                    className="bg-white dark:bg-gray-900"
                                >
                                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                                        {project.name}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                        {project.client}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                        {project.start_date ?? '—'} –{' '}
                                        {project.end_date ?? '—'}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                        {project.value ?? '—'}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <Link
                                            href={`/projects/${project.id}/edit`}
                                            className="mr-2 text-primary hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => destroy(project.id)}
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
