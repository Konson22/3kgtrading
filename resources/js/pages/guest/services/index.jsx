import React from 'react';
import { Link } from 'react-router-dom';
import PageSecondaryHero from '@/components/PageSecondaryHero';
import { useServices } from '@/context/ServicesContext';

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

function ServiceDetailCard({ service }) {
    return (
        <article className="group overflow-hidden bg-white transition-all duration-300">
            <div className="relative aspect-[16/10] min-h-[180px] w-full flex-shrink-0 overflow-hidden rounded-md sm:min-h-[220px]">
                <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col pt-4">
                <h2 className="mb-2 font-display text-xl font-bold text-gray-900 sm:mb-3 sm:text-2xl lg:text-3xl">
                    {service.name}
                </h2>
                <p className="mb-4 line-clamp-5 flex-1 text-sm leading-relaxed text-gray-600 sm:mb-5 sm:text-base">
                    {service.description}
                </p>
                <Link
                    to={`/services/${slugify(service.name)}`}
                    className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold text-primary hover:underline sm:mt-3 sm:text-sm"
                >
                    Learn more
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
        </article>
    );
}

export default function ServicesPage() {
    const { services } = useServices();
    return (
        <div className="bg-white">
            <PageSecondaryHero
                title="Our Services"
                eyebrow="What We Do"
                image="/images/contruction-building2.png"
                darkGradientOverlay
            >
                <p>
                    3K General Trading Ltd offers financial management, property
                    management, small business consultancy and general
                    construction in its operational mandate.
                </p>
            </PageSecondaryHero>

            <section className="container-px mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
                <div className="mb-8 text-center sm:mb-12 lg:mb-16">
                    <p className="text-xs font-semibold tracking-wider text-primary uppercase sm:text-sm">
                        What we offer
                    </p>
                    <h2 className="mt-1.5 font-display text-xl font-bold text-gray-900 sm:mt-2 sm:text-2xl lg:text-3xl">
                        Our service areas
                    </h2>
                    <div
                        className="mx-auto mt-2 h-1 w-12 rounded-full bg-secondary sm:mt-3 sm:w-16"
                        aria-hidden
                    />
                </div>
                <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
                    {services.map((service) => (
                        <ServiceDetailCard key={service.id} service={service} />
                    ))}
                </div>
            </section>

            <section className="border-t border-gray-100 bg-gray-50 py-12 sm:py-16 lg:py-20">
                <div className="container-px mx-auto max-w-3xl px-4 text-center sm:px-6">
                    <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                        Our commitment
                    </span>
                    <h2 className="mt-1.5 font-display text-xl font-bold text-gray-900 sm:mt-2 sm:text-2xl lg:text-3xl">
                        Value Proposition
                    </h2>
                    <div
                        className="mx-auto mt-2 mb-6 h-1 w-12 rounded-full bg-primary sm:mt-3 sm:mb-8 sm:w-16"
                        aria-hidden
                    />
                    <div className="space-y-4 text-left text-gray-600 sm:space-y-6">
                        <p className="text-sm leading-relaxed sm:text-base">
                            Making access to short term financing easy for both
                            individuals and SME's. Short turnaround time,
                            minimal documentation, precise credit appraisal and
                            efficient service. Innovative and efficient channels
                            for clients to access financial services. Great
                            customer service and experience.
                        </p>
                        <p className="text-sm leading-relaxed sm:text-base">
                            Sustainable development is embedded in our core
                            business strategy. We seek to build a smarter world
                            through enhancing our value creation and engaging
                            our stakeholders.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
