import React from 'react';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
    <svg
        className="h-5 w-5"
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
);

export default function CtaSection() {
    return (
        <section className="relative overflow-hidden py-20 sm:py-28">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/city.jpg')",
                }}
                aria-hidden
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-primary-dark/70" aria-hidden />
            {/* Accent bar */}
            <div
                className="absolute top-0 left-0 z-10 h-1 w-full bg-gradient-to-r from-primary via-primary/80 to-secondary"
                aria-hidden
            />
            {/* Grid */}
            <div className="absolute inset-0 z-10 opacity-[0.06]" aria-hidden />
            <div className="container-px relative z-20 mx-auto max-w-4xl px-4 text-center sm:px-6">
                <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase sm:text-sm">
                    Start your project
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                    Ready to work with us?
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                    Get a free quote or discuss your water, construction, or
                    waste management needs. We respond within 24 hours—no
                    obligation.
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                    From water point management and meter installation to solid
                    waste collection and construction we deliver quality,
                    reliability, and clear communication at every step.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                    <Link
                        to="/request-service"
                        className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-dark focus:outline-none"
                    >
                        Request a service
                        <ArrowIcon />
                    </Link>
                </div>
                <p className="mt-6 text-sm text-white/55">
                    Trusted by SSUWC, East Africa Go Green, and more across
                    South Sudan
                </p>
            </div>
        </section>
    );
}
