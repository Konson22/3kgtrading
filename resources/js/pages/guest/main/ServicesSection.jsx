import React from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../../../context/ServicesContext';

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export default function ServicesSection() {
    const { services } = useServices();
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:hidden">
            <div className="container-px mx-auto max-w-4xl px-4 sm:px-6">
                <div className="mb-10 text-center sm:mb-14 md:mb-16">
                    <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase sm:text-sm">
                        What We Do
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-bold text-gray-900 sm:mt-3 sm:text-3xl md:text-4xl">
                        Our Services
                    </h2>
                    <div
                        className="mx-auto mt-3 h-1 w-12 rounded-full bg-secondary sm:w-16"
                        aria-hidden
                    />
                    <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                        3K General Trading Ltd offers financial management,
                        property management, small business consultancy and
                        general construction services.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center sm:mt-14">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white sm:px-8 sm:py-4 sm:text-base"
                    >
                        View all services
                        <svg
                            className="h-4 w-4 sm:h-5 sm:w-5"
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
        </section>
    );
}

export function ServiceCard({ service, index = 0 }) {
    const href = `/services/${slugify(service.name)}`;
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white">
            {service.image && (
                <div className="lg:h-[350px]">
                    <img
                        src={service.image}
                        alt={service.name}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                </div>
            )}
            <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 text-xs font-semibold tracking-wider text-secondary uppercase">
                    Service {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 font-display text-xl font-bold text-gray-900 sm:text-2xl">
                    {service.name}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {service.description}
                </p>
                <Link
                    to={href}
                    className="group/link mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                    Learn more
                    <svg
                        className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
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
    );
}
