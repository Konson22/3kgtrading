import PageSecondaryHero from '../../../components/PageSecondaryHero';

const SectionHeader = ({ eyebrow, title }) => (
    <div className="mb-10">
        {eyebrow && (
            <span className="text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
                {eyebrow}
            </span>
        )}
        <h2 className="mt-2 mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            {title}
        </h2>
        <div className="h-1 w-14 rounded-full bg-primary" aria-hidden />
    </div>
);

export default function About() {
    return (
        <div className="bg-white">
            <PageSecondaryHero
                title="About Us"
                eyebrow="Accountability, Transparency & Compliance"
                image="/images/gallery/3K-General-Trading-team3.png"
                darkGradientOverlay
            />

            {/* Who We Are */}
            <section className="container-px mx-auto max-w-5xl px-5 py-8 lg:py-20">
                <SectionHeader title="Who We Are" />
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-6 leading-relaxed">
                        3Kg General Trading Ltd is a multiservice provider
                        company which strives to supply variety of quality
                        services and products to clients/customers in South
                        Sudan in private and public sector, nongovernmental
                        organizations and intergovernmental establishments.
                    </p>
                    <p className="leading-relaxed">
                        Since its establishment, 3Kg General Trading Ltd has
                        been focusing in areas of Financial Management, Property
                        Management, Small Business Consultancy and General
                        Construction. We are committed to offering quality
                        services and products at all times, according to
                        national and international accepted standards.
                    </p>
                </div>
            </section>

            {/* Philosophy */}
            <section className="px-5 py-20">
                <div className="container-px mx-auto max-w-5xl">
                    <SectionHeader
                        eyebrow="Our Beliefs"
                        title="The Philosophy behind Our Business"
                    />
                    <p className="mb-12 max-w-3xl leading-relaxed text-gray-600">
                        3Kg General Trading Ltd provides safe, reliable,
                        customer-focused and sustainable services. We know that
                        doing so requires a high-performing organization that is
                        financially sound, innovative and offers employees
                        satisfying service.
                    </p>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: 'The Nature of People',
                                desc: 'We believe that our employees want to do a good job. If their purpose and functions are clearly defined, if they are empowered, and if they are given the proper tools and knowledge, they will do excellent work without excessive supervision.',
                            },
                            {
                                title: 'The Way We Work',
                                desc: '3K GTC believes that the best work is done when individuals operate within the organization in consultative, cross-functional teams. The job of managers is to promote collaboration and provide the right strategies, structures and systems.',
                            },
                            {
                                title: 'The Way We Lead',
                                desc: 'The job of managers and supervisors at 3K GTC is to make it easier for their employees to serve customers. It is a privilege that must be continuously earned by serving and mentoring others.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="">
                                <h3 className="mb-3 text-lg font-bold text-primary">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="container-px mx-auto max-w-5xl px-5 py-20">
                <SectionHeader
                    eyebrow="Our Direction"
                    title="Vision & Mission"
                />
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 shadow-soft">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            Vision
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-primary">
                            Where we are going
                        </h3>
                        <p className="leading-relaxed text-gray-800">
                            To be a leader in the provision of quality services with knowledge based on
                            deal structuring, backed by strong risk analysis.
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 shadow-soft">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                            <span className="h-2 w-2 rounded-full bg-secondary" />
                            Mission
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-secondary">
                            How we get there
                        </h3>
                        <p className="leading-relaxed text-gray-800">
                            To be the desired provider of diverse inexpensive and timely commercial
                            services that meet varied clientele dynamic needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-primary-dark px-5 py-20">
                <div className="container-px mx-auto max-w-5xl">
                    <div className="mb-10 text-center">
                        <span className="text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
                            What We Stand For
                        </span>
                        <h2 className="mt-2 mb-3 text-2xl font-bold text-white sm:text-3xl">
                            Our Core Values
                        </h2>
                        <div
                            className="mx-auto h-1 w-14 rounded-full bg-white/80"
                            aria-hidden
                        />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {[
                            {
                                title: 'Accountability',
                                desc: 'The courage to take ownership of problems, mistakes, successes and failures. The identification of problems is important and the delivery of solutions is vital.',
                            },
                            {
                                title: 'Desire to Improve',
                                desc: 'We expect our employees to constantly seek ways to improve as professionals and as leaders.',
                            },
                            {
                                title: 'Humility',
                                desc: '3K GTC serves a national need. No one person is more important than another and no one can do their job without the team.',
                            },
                            {
                                title: 'Commitment to Safety',
                                desc: 'The understanding that the health and personal well-being of co-workers and customers come before all else.',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft"
                            >
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg font-bold text-white">
                                    {item.title.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="mb-2 font-bold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-white/90">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Goals */}
            <section className="bg-white py-16 sm:py-20">
                <div className="container-px mx-auto max-w-5xl">
                    <div className="mb-10 text-center">
                        <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                            Our Objectives
                        </span>
                        <h2 className="mt-2 mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                            Strategic Goals
                        </h2>
                        <div
                            className="mx-auto h-1 w-14 rounded-full bg-secondary"
                            aria-hidden
                        />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            'To provide quality products and services to all clients across South Sudan',
                            'To be more reliable in service delivery',
                            'To be competitive in our business services',
                            'To be ethically sound',
                            'To value safety and security of all employees and clients',
                        ].map((goal, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                            >
                                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                                <span className="text-gray-700">{goal}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Structure */}
            <section className="bg-white py-16 sm:py-20">
                <div className="container-px mx-auto max-w-5xl">
                    <div className="mb-10 text-center">
                        <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                            Organization
                        </span>
                        <h2 className="mt-2 mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                            Company Structure
                        </h2>
                        <div
                            className="mx-auto h-1 w-14 rounded-full bg-secondary"
                            aria-hidden
                        />
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {[
                            'Board Chairman & CEO',
                            'Managing Director',
                            'Internal Auditor',
                            'Projects/Operation Manager',
                            'Sales Manager',
                            'Chief Engineer',
                        ].map((role, i) => (
                            <div
                                key={i}
                                className="rounded-full border border-primary/10 bg-primary/5 px-5 py-2.5 text-xs font-medium text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 sm:text-sm"
                            >
                                {role}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
