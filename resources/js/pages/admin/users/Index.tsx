import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
};

type Props = {
    users: User[];
};

export default function UsersIndex({ users }: Props) {
    const breadcrumbs = [{ title: 'Users', href: '/users' }];

    function destroy(id: number) {
        if (confirm('Delete this user?')) {
            router.delete(`/users/${id}`);
        }
    }

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        Users
                    </h1>
                    <Button asChild>
                        <Link href="/users/create">Add user</Link>
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
                                    Email
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Role
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
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="bg-white dark:bg-gray-900"
                                >
                                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                                        {user.name}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                        {user.email}
                                    </td>
                                    <td className="px-4 py-3 capitalize text-gray-600 dark:text-gray-400">
                                        {user.role}
                                    </td>
                                    <td className="px-4 py-3 capitalize text-gray-600 dark:text-gray-400">
                                        {user.status}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <Link
                                            href={`/users/${user.id}/edit`}
                                            className="mr-2 text-primary hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => destroy(user.id)}
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
