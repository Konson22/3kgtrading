import { Form, Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';

export default function PendingBranchAssignment() {
    return (
        <AuthLayout
            title="No branch assigned"
            description="Your account does not have a branch yet. Ask an administrator to assign you to a location, or sign out and use a different account."
        >
            <Head title="Pending branch" />
            <div className="flex flex-col gap-4">
                <Button asChild variant="outline" className="w-full">
                    <Link href="/dashboard">Try again</Link>
                </Button>
                <Form action="/logout" method="post" className="w-full">
                    {({ processing }) => (
                        <Button
                            type="submit"
                            variant="secondary"
                            className="w-full"
                            disabled={processing}
                        >
                            Sign out
                        </Button>
                    )}
                </Form>
            </div>
        </AuthLayout>
    );
}
