import PageSecondaryHero from '../../../components/PageSecondaryHero';

const SectionHeader = ({ eyebrow, title, description }) => (
    <div className="mb-10">
        {eyebrow && (
            <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]">
                {eyebrow}
            </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">
            {title}
        </h2>
        <div className="w-14 h-1 bg-primary rounded-full" aria-hidden />
        {description && (
            <p className="mt-4 text-gray-600 max-w-2xl">
                {description}
            </p>
        )}
    </div>
);

export default function Careers() {
    return (
        <div className="bg-white">
            <PageSecondaryHero
                title="Careers at 3K GTC"
                eyebrow="Join Our Team"
                image="/images/team.jpg"
            />

            <section className="py-20 container-px max-w-5xl mx-auto">
                <SectionHeader
                    title="Working at 3K GTC"
                    eyebrow="Why Work With Us"
                    description="Be part of a team that is building reliable, quality services in construction, financial management, and property solutions across South Sudan."
                />
                <div className="prose prose-lg text-gray-600 max-w-none">
                    <p className="leading-relaxed mb-6">
                        At 3K General Trading Ltd, we believe our people are our greatest asset. We are
                        always looking for dedicated, driven professionals who share our values of
                        accountability, transparency, and commitment to quality service delivery.
                    </p>
                    <p className="leading-relaxed">
                        Whether your background is in engineering, finance, project management, or
                        operations, we offer an environment where you can grow your career while
                        contributing to meaningful projects that support our clients and communities.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container-px max-w-5xl mx-auto">
                    <SectionHeader
                        eyebrow="Current Openings"
                        title="Open Positions"
                        description="We regularly update this page with new opportunities. If you don’t see a suitable position, you can still send us your CV for future consideration."
                    />
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            No open positions at the moment
                        </h3>
                        <p className="text-gray-600 mb-4">
                            We&apos;re not actively hiring for specific roles right now, but we are
                            always happy to hear from talented professionals.
                        </p>
                        <p className="text-gray-600">
                            Send your CV and a short cover letter to{' '}
                            <a
                                href="mailto:info@3kgtrading.com"
                                className="text-secondary font-medium hover:underline"
                            >
                                info@3kgtrading.com
                            </a>{' '}
                            and we will reach out when a suitable opportunity arises.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 container-px max-w-5xl mx-auto">
                <SectionHeader
                    eyebrow="Our Culture"
                    title="How We Work"
                    description="We focus on teamwork, continuous improvement, and serving our clients with excellence."
                />
                <div className="grid md:grid-cols-3 gap-8">
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
                            className="p-6 bg-white rounded-2xl shadow-soft border border-gray-100 hover:border-primary/20 transition-colors"
                        >
                            <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

