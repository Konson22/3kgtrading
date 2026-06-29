import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageSecondaryHero from '@/components/PageSecondaryHero';
import { useServices } from '@/context/ServicesContext';

function slugify(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function ServiceCard({ service, index }) {
    const serviceSlug = slugify(service.name);

    return (
        <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-medium sm:rounded-2xl">
            <div
                className="pointer-events-none absolute -right-4 -top-4 z-10 h-16 w-16 bg-primary/5 transition duration-300 group-hover:bg-primary/10 sm:-right-6 sm:-top-6 sm:h-20 sm:w-20"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                aria-hidden
            />

            <Link
                to={`/services/${serviceSlug}`}
                className="relative block aspect-[16/10] overflow-hidden sm:aspect-[5/3]"
            >
                <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span
                    className="absolute left-3 top-3 inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs"
                >
                    Service
                </span>
                <span
                    className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center bg-primary/90 text-[10px] font-bold text-white shadow-sm sm:right-4 sm:top-4 sm:h-8 sm:w-8 sm:text-xs"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                    aria-hidden
                >
                    {String(index + 1).padStart(2, '0')}
                </span>
            </Link>

            <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary sm:text-xs">
                    {service.features.length} key offerings
                </span>
                <h2 className="mt-2 font-display text-base font-bold leading-snug text-gray-900 sm:text-lg md:text-xl">
                    <Link to={`/services/${serviceSlug}`} className="transition-colors hover:text-primary">
                        {service.name}
                    </Link>
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {service.description}
                </p>

                <Link
                    to={`/services/${serviceSlug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
                >
                    View service details
                    <ArrowRight className="h-4 w-4" aria-hidden />
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
                    3K General Trading Ltd offers financial management, property management, small business
                    consultancy and general construction in its operational mandate.
                </p>
            </PageSecondaryHero>

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
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:tracking-[0.2em] sm:text-sm">
                            What We Offer
                        </span>
                        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                            Our Service Areas
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base md:text-lg">
                            Integrated solutions across construction, finance, property, and business consultancy
                            for clients across South Sudan.
                        </p>
                        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-secondary sm:mt-5 sm:w-16" aria-hidden />
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>

                    <div className="mt-8 text-center sm:mt-14">
                        <Link
                            to="/request-service"
                            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary/90 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
                        >
                            Request a quote
                            <ArrowRight className="h-5 w-5" aria-hidden />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24">
                <div className="container-px mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 shadow-sm sm:rounded-2xl sm:p-6 md:p-8 lg:p-10">
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary sm:tracking-[0.2em]">
                                Our Commitment
                            </span>
                            <h2 className="mt-3 font-display text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                                Value Proposition
                            </h2>
                            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary sm:w-16" aria-hidden />
                        </div>

                        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:gap-5">
                            <div className="flex items-start gap-3 rounded-xl border border-white bg-white px-4 py-4 shadow-sm sm:px-5">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" strokeWidth={2.25} aria-hidden />
                                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                                    Making access to short term financing easy for both individuals and SMEs. Short
                                    turnaround time, minimal documentation, precise credit appraisal and efficient
                                    service. Innovative and efficient channels for clients to access financial services.
                                    Great customer service and experience.
                                </p>
                            </div>
                            <div className="flex items-start gap-3 rounded-xl border border-white bg-white px-4 py-4 shadow-sm sm:px-5">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" strokeWidth={2.25} aria-hidden />
                                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                                    Sustainable development is embedded in our core business strategy. We seek to build
                                    a smarter world through enhancing our value creation and engaging our stakeholders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
