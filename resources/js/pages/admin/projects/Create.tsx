import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProjectsCreate() {
    const breadcrumbs = [
        { title: 'Projects', href: '/projects' },
        { title: 'Create', href: '/projects/create' },
    ];

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        client: '',
        start_date: '',
        end_date: '',
        value: '',
        description: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/projects');
    }

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Create project" />
            <div className="space-y-6 p-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Create project
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
                                placeholder="e.g. November 2021"
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
                                placeholder="e.g. Ongoing"
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
                            placeholder="e.g. 187,000"
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
                            Create
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
