import { Link } from 'react-router-dom';
import { Building2, MapPin } from 'lucide-react';
import { aboutSummary, companyName } from '@/data/site';

export default function AboutSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-light py-12 sm:py-20 lg:py-24">
            <div
                className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl"
                aria-hidden
            />

            <div className="container-px relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-16 xl:gap-20">
                    <div className="order-2 lg:order-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:tracking-[0.2em] sm:text-sm">
                            {aboutSummary.title}
                        </span>
                        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                            A Trusted Multi-Service Partner in South Sudan
                        </h2>
                        <div className="mt-4 h-1 w-12 rounded-full bg-secondary sm:w-16" aria-hidden />

                        <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base md:text-lg">
                            {aboutSummary.body}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base">
                            {aboutSummary.closing}
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                            <Link
                                to="/about"
                                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary/90 sm:w-auto sm:px-6 sm:text-base"
                            >
                                Learn more about us
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-primary/30 hover:text-primary sm:w-auto sm:px-6 sm:text-base"
                            >
                                Contact our team
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 w-full lg:order-2">
                        <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
                            <div className="relative overflow-hidden rounded-xl shadow-large ring-1 ring-black/5 sm:rounded-2xl md:rounded-3xl">
                                <img
                                    src="/images/gallery/3K-General-Trading-team.png"
                                    alt="3K General Trading professional team in Juba, South Sudan"
                                    className="aspect-[4/3] w-full object-cover sm:aspect-[5/4] lg:aspect-auto lg:min-h-[380px] xl:min-h-[480px]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 pb-4 pt-14 sm:px-6 sm:pb-6 sm:pt-20 md:px-7 md:pb-7">
                                    <div className="flex items-end justify-between gap-3 sm:gap-4">
                                        <div className="min-w-0">
                                            <p className="font-display text-base font-semibold leading-snug text-white sm:text-xl md:text-2xl">
                                                {companyName}
                                            </p>
                                            <p className="mt-1 flex items-center gap-1.5 text-xs text-white/80 sm:mt-1.5 sm:text-sm md:text-base">
                                                <MapPin className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5" aria-hidden />
                                                Juba, South Sudan
                                            </p>
                                        </div>
                                        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm sm:flex sm:h-12 sm:w-12 md:h-14 md:w-14">
                                            <Building2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={1.75} aria-hidden />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
