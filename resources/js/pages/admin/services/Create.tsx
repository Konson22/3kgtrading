import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Props = {
    //
};

export default function ServicesCreate(_props: Props) {
    const breadcrumbs = [
        { title: 'Services', href: '/services' },
        { title: 'Create', href: '/services/create' },
    ];

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        description: '',
        image: '',
        features: [] as string[],
        sort_order: 0,
        is_published: true,
    });

    const featureStr = data.features.join('\n');

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/services');
    }

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Create service" />
            <div className="space-y-6 p-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Create service
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
                        <Label htmlFor="slug">Slug (optional)</Label>
                        <Input
                            id="slug"
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            className="mt-1"
                            placeholder="auto-generated from name"
                        />
                        {errors.slug && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.slug}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="description">Description</Label>
                        <textarea
                            id="description"
                            rows={4}
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-800"
                        />
                    </div>
                    <div>
                        <Label htmlFor="image">Image path</Label>
                        <Input
                            id="image"
                            value={data.image}
                            onChange={(e) => setData('image', e.target.value)}
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor="features">
                            Features (one per line)
                        </Label>
                        <textarea
                            id="features"
                            rows={5}
                            value={featureStr}
                            onChange={(e) =>
                                setData(
                                    'features',
                                    e.target.value
                                        .split('\n')
                                        .map((s) => s.trim())
                                        .filter(Boolean),
                                )
                            }
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-800"
                        />
                    </div>
                    <div>
                        <Label htmlFor="sort_order">Sort order</Label>
                        <Input
                            id="sort_order"
                            type="number"
                            min={0}
                            value={data.sort_order}
                            onChange={(e) =>
                                setData(
                                    'sort_order',
                                    parseInt(e.target.value, 10) || 0,
                                )
                            }
                            className="mt-1 w-24"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="is_published"
                            checked={data.is_published}
                            onChange={(e) =>
                                setData('is_published', e.target.checked)
                            }
                            className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="is_published">Published</Label>
                    </div>
                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>
                            Create
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/services">Cancel</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
