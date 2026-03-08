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

function ServiceDetailCard({ service, index }) {
    const imageFirst = index % 2 === 0;
    return (
        <article className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] sm:rounded-2xl">
            <div
                className={`flex flex-col gap-0 lg:flex-row lg:gap-0 ${!imageFirst ? 'lg:flex-row-reverse' : ''}`}
            >
                {service.image && (
                    <div className="relative aspect-[16/10] min-h-[180px] w-full flex-shrink-0 overflow-hidden sm:min-h-[220px] lg:aspect-auto lg:min-h-[280px] lg:w-[42%]">
                        <img
                            src={service.image}
                            alt={service.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                    </div>
                )}
                <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6 lg:p-8">
                    <span className="mb-2 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-primary uppercase sm:mb-3 sm:text-xs">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[9px] font-bold text-primary sm:h-6 sm:w-6 sm:text-[10px]">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        Service
                    </span>
                    <h2 className="mb-3 font-display text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl lg:text-3xl">
                        {service.name}
                    </h2>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base">
                        {service.description}
                    </p>
                    <div>
                        <h3 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase sm:mb-3 sm:text-sm">
                            Key offerings
                        </h3>
                        <ul className="space-y-2 sm:space-y-2.5">
                            {service.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2.5 text-sm text-gray-700 sm:gap-3 sm:text-base"
                                >
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link
                        to={`/services/${slugify(service.name)}`}
                        className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold text-primary hover:underline sm:mt-6 sm:text-sm"
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
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                    {services.map((service, index) => (
                        <ServiceDetailCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
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
