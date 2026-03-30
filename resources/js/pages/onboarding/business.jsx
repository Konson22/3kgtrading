import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';

export default function OnboardingBusiness() {
    return (
        <AuthLayout
            title="Set up your business"
            description="Create your retail store profile and first branch. You can add more locations later from the admin portal."
        >
            <Head title="Business setup" />
            <Form
                action="/onboarding/business"
                method="post"
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="business_name">Business name</Label>
                                <Input
                                    id="business_name"
                                    name="business_name"
                                    type="text"
                                    required
                                    autoFocus
                                    autoComplete="organization"
                                    placeholder="e.g. Acme General Trading"
                                />
                                <InputError
                                    message={errors.business_name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="slogan">Slogan (optional)</Label>
                                <Input
                                    id="slogan"
                                    name="slogan"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Short tagline for receipts and the app header"
                                />
                                <InputError message={errors.slogan} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="branch_name">First branch</Label>
                                <Input
                                    id="branch_name"
                                    name="branch_name"
                                    type="text"
                                    required
                                    autoComplete="off"
                                    placeholder="e.g. Downtown store"
                                />
                                <InputError message={errors.branch_name} />
                                <p className="text-muted-foreground text-xs">
                                    Administrators can switch between all branches; staff users only
                                    see the branch assigned to them.
                                </p>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={processing}
                            data-test="onboarding-submit"
                        >
                            {processing && <Spinner />}
                            Continue to dashboard
                        </Button>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
