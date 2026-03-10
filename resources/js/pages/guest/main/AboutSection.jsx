import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="container-px mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="order-2 lg:order-1">
                        <span className="text-xs font-semibold tracking-wider text-primary uppercase sm:text-sm">
                            Who We Are
                        </span>
                        <h2 className="mt-2 mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl lg:text-4xl">
                            Committed to Quality & Excellence
                        </h2>
                        <p className="mb-3 text-sm leading-relaxed text-gray-600 sm:mb-4 sm:text-base">
                            Since its establishment, 3Kg General Trading Ltd has
                            been focusing in areas of Financial Management,
                            Property Management, Small Business Consultancy and
                            General Construction.
                        </p>
                        <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base">
                            We are committed to offering quality services and
                            products at all times, according to national and
                            international accepted standards. To produce good
                            results where synergies are demanded, 3K GTC has
                            strategic business alliances with reputable
                            companies in the region and beyond.
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-secondary sm:text-base"
                        >
                            Learn more about us
                            <svg
                                className="ml-2 h-4 w-4 shrink-0 sm:h-5 sm:w-5"
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
                    <div className="relative order-1 shadow-lg lg:order-2">
                        <div
                            className="absolute -right-4 -bottom-4 h-1/2 w-1/2 rounded-br-2xl border-r-8 border-b-8 border-primary"
                            aria-hidden
                        />
                        <div
                            className="absolute -top-4 -left-4 h-1/2 w-1/2 rounded-tl-2xl border-t-8 border-l-8 border-secondary"
                            aria-hidden
                        />
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="/images/gallery/3K-General-Trading-team.png"
                                alt="3K General Trading team"
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
