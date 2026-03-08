import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Project = {
    id: number;
    name: string;
    client: string;
    start_date: string | null;
    end_date: string | null;
    value: string | null;
    description: string | null;
};

type Props = {
    project: Project;
};

export default function ProjectsEdit({ project }: Props) {
    const breadcrumbs = [
        { title: 'Projects', href: '/projects' },
        { title: project.name, href: `/projects/${project.id}/edit` },
    ];

    const { data, setData, put, processing, errors } = useForm({
        name: project.name,
        client: project.client,
        start_date: project.start_date ?? '',
        end_date: project.end_date ?? '',
        value: project.value ?? '',
        description: project.description ?? '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        put(`/projects/${project.id}`);
    }

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${project.name}`} />
            <div className="space-y-6 p-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Edit project
                </h1>
                <form onSubmit={submit} className="max-w-2xl space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="mt-1"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="client">Client</Label>
                        <Input
                            id="client"
                            value={data.client}
                            onChange={(e) => setData('client', e.target.value)}
                            className="mt-1"
                        />
                        {errors.client && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.client}
                            </p>
                        )}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <Label htmlFor="start_date">Start date</Label>
                            <Input
                                id="start_date"
                                value={data.start_date}
                                onChange={(e) =>
                                    setData('start_date', e.target.value)
                                }
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="end_date">End date</Label>
                            <Input
                                id="end_date"
                                value={data.end_date}
                                onChange={(e) =>
                                    setData('end_date', e.target.value)
                                }
                                className="mt-1"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="value">Value (USD)</Label>
                        <Input
                            id="value"
                            value={data.value}
                            onChange={(e) => setData('value', e.target.value)}
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor="description">Description</Label>
                        <textarea
                            id="description"
                            rows={3}
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-800"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>
                            Update
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/projects">Cancel</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
