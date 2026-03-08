import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useServices } from '../../../context/ServicesContext';
import PageSecondaryHero from '@/components/PageSecondaryHero';

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export default function ServiceDetailsPage() {
    const { slug } = useParams();
    const { services } = useServices();
    const service = services.find((s) => slugify(s.name) === slug);

    if (!service) {
        return (
            <div className="bg-white">
                <PageSecondaryHero title="Service Not Found" eyebrow="404" darkGradientOverlay />
                <section className="container-px mx-auto max-w-xl py-16 text-center">
                    <p className="mb-6 text-gray-600">
                        The service you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Back to Services
                    </Link>
                </section>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <PageSecondaryHero
                title={service.name}
                eyebrow="Our Services"
                image={service.image}
                darkGradientOverlay
            >
                <p className="leading-relaxed">
                    {service.description.slice(0, 180)}
                    {service.description.length > 180 ? '…' : ''}
                </p>
            </PageSecondaryHero>

            <section className="container-px mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
                <div className="mb-12">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Overview
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                        About this service
                    </h2>
                    <div className="mt-3 h-1 w-16 rounded-full bg-secondary" aria-hidden />
                </div>
                <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-600">
                    {service.description}
                </p>

                <div className="mb-12">
                    <h2 className="mb-6 font-display text-xl font-bold text-gray-900 sm:text-2xl">
                        Key offerings
                    </h2>
                    <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4 transition-colors hover:border-secondary/30 hover:bg-secondary/5"
                            >
                                <span
                                    className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary"
                                    aria-hidden
                                />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap items-center gap-4 border-t border-gray-100 pt-10">
                    <Link
                        to="/quote"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary/90"
                    >
                        Request a Quote
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:border-primary/30 hover:text-primary"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        All services
                    </Link>
                </div>
            </section>
        </div>
    );
}
