import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Props = {
    settings: {
        site_name: string;
    };
};

export default function SettingsIndex({ settings }: Props) {
    const breadcrumbs = [{ title: 'Settings', href: '/settings' }];

    const { data, setData, put, processing } = useForm({
        site_name: settings.site_name,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        put('/settings');
    }

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Settings" />
            <div className="space-y-6 p-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Settings
                </h1>
                <form onSubmit={submit} className="max-w-2xl space-y-4">
                    <div>
                        <Label htmlFor="site_name">Site name</Label>
                        <Input
                            id="site_name"
                            value={data.site_name}
                            onChange={(e) =>
                                setData('site_name', e.target.value)
                            }
                            className="mt-1"
                        />
                        <p className="mt-1 text-sm text-gray-500">
                            Shown in the admin panel and can be used for the
                            public site.
                        </p>
                    </div>
                    <Button type="submit" disabled={processing}>
                        Save
                    </Button>
                </form>
            </div>
        </AdminLayout>
    );
}
