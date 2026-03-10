import PageSecondaryHero from '../../../components/PageSecondaryHero';

const SectionHeader = ({ eyebrow, title, description }) => (
    <div className="mb-10 text-center md:text-left">
        {eyebrow && (
            <span className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase sm:text-sm">
                {eyebrow}
            </span>
        )}
        <h2 className="mt-2 mb-3 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            {title}
        </h2>
        <div
            className="mx-auto h-1 w-14 rounded-full bg-primary md:mx-0"
            aria-hidden
        />
        {description && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:mx-0">
                {description}
            </p>
        )}
    </div>
);

export default function Careers() {
    return (
        <div className="bg-white">
            <PageSecondaryHero
                title="Working at 3K General Trading Ltd"
                eyebrow="Join Our Team"
                image="/images/team.jpg"
                darkGradientOverlay
            >
                <p>
                    Be part of a team that is building reliable, quality
                    services in construction, financial management, and property
                    solutions across South Sudan.
                </p>
            </PageSecondaryHero>

            <section className="px-5 py-10 sm:py-16 lg:py-20">
                <div className="container-px mx-auto max-w-5xl">
                    <SectionHeader
                        eyebrow="Current Openings"
                        title="Open Positions"
                        description="We regularly update this page with new opportunities. If you don’t see a suitable position, you can still send us your CV for future consideration."
                    />
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-8 text-center sm:px-8">
                        <h3 className="mb-2 text-base font-semibold text-gray-900 sm:text-lg">
                            No open positions at the moment
                        </h3>
                        <p className="mb-4 text-sm text-gray-600 sm:text-base">
                            We&apos;re not actively hiring for specific roles
                            right now, but we are always happy to hear from
                            talented professionals.
                        </p>
                        <p className="text-sm text-gray-600 sm:text-base">
                            Send your CV and a short cover letter to{' '}
                            <a
                                href="mailto:info@3kgtrading.com"
                                className="font-medium text-secondary hover:underline"
                            >
                                info@3kgtrading.com
                            </a>{' '}
                            and we will reach out when a suitable opportunity
                            arises.
                        </p>
                    </div>
                    <p className="mt-4 text-xs text-gray-500 sm:text-sm">
                        We treat all applications confidentially and will only
                        contact shortlisted candidates.
                    </p>
                </div>
            </section>

            <section className="container-px mx-auto max-w-5xl px-5 py-10 sm:py-16 lg:py-20">
                <SectionHeader
                    eyebrow="Our Culture"
                    title="How We Work"
                    description="We focus on teamwork, continuous improvement, and serving our clients with excellence."
                />
                <div className="grid gap-5 sm:gap-7 md:grid-cols-3">
                    {[
                        {
                            title: 'Growth & Learning',
                            desc: 'We encourage our team to develop their skills through on-the-job learning, mentorship, and continuous improvement.',
                        },
                        {
                            title: 'Collaboration',
                            desc: 'Projects are delivered by cross-functional teams who work closely together to solve complex challenges.',
                        },
                        {
                            title: 'Impact',
                            desc: 'Our work supports businesses, organizations, and communities across South Sudan with reliable, quality services.',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:-translate-y-1 hover:border-primary/30 sm:p-6"
                        >
                            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white">
                                <span className="text-sm font-semibold">
                                    {i + 1}
                                </span>
                            </div>
                            <h3 className="mb-2 text-base font-bold text-primary sm:mb-3 sm:text-lg">
                                {item.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
