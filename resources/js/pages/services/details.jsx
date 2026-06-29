import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useServices } from '@/context/ServicesContext';
import PageSecondaryHero from '@/components/PageSecondaryHero';

function slugify(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function ServiceDetailsPage() {
    const { slug } = useParams();
    const { services } = useServices();
    const service = services.find((item) => slugify(item.name) === slug);
    const otherServices = services.filter((item) => slugify(item.name) !== slug).slice(0, 3);

    if (!service) {
        return (
            <div className="bg-white">
                <PageSecondaryHero title="Service Not Found" eyebrow="404" darkGradientOverlay />
                <section className="container-px mx-auto max-w-xl px-4 py-16 text-center sm:px-6 sm:py-20">
                    <p className="mb-6 text-sm text-gray-600 sm:text-base">
                        The service you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link
                        to="/services"
                        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 sm:text-base"
                    >
                        <ArrowLeft className="h-4 w-4" aria-hidden />
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

            <section className="relative overflow-hidden bg-gradient-light py-12 sm:py-20 lg:py-24">
                <div
                    className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl"
                    aria-hidden
                />

                <div className="container-px relative mx-auto max-w-4xl px-4 sm:px-6">
                    <div className="mb-8 sm:mb-10">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:tracking-[0.2em] sm:text-sm">
                            Overview
                        </span>
                        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                            About This Service
                        </h2>
                        <div className="mt-4 h-1 w-12 rounded-full bg-secondary sm:w-16" aria-hidden />
                    </div>

                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                        {service.description}
                    </p>

                    <div className="mt-10 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:mt-12 sm:rounded-2xl sm:p-6 md:p-8">
                        <h3 className="font-display text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
                            Key Offerings
                        </h3>
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
                            {service.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-start gap-2.5 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3.5 sm:gap-3"
                                >
                                    <CheckCircle2
                                        className="mt-0.5 h-4 w-4 shrink-0 text-secondary sm:h-5 sm:w-5"
                                        strokeWidth={2.25}
                                        aria-hidden
                                    />
                                    <span className="text-sm leading-relaxed text-gray-700 sm:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                        <Link
                            to="/request-service"
                            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary/90 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
                        >
                            Request a Quote
                            <ArrowRight className="h-5 w-5" aria-hidden />
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-primary/30 hover:text-primary sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
                        >
                            <ArrowLeft className="h-5 w-5" aria-hidden />
                            All Services
                        </Link>
                    </div>
                </div>
            </section>

            {otherServices.length > 0 && (
                <section className="border-t border-gray-100 bg-white py-12 sm:py-20 lg:py-24">
                    <div className="container-px mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:tracking-[0.2em] sm:text-sm">
                                Explore More
                            </span>
                            <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                                Other Services
                            </h2>
                            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-secondary sm:w-16" aria-hidden />
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                            {otherServices.map((item, index) => {
                                const itemSlug = slugify(item.name);

                                return (
                                    <article
                                        key={item.id}
                                        className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-medium sm:rounded-2xl"
                                    >
                                        <div
                                            className="pointer-events-none absolute -right-4 -top-4 z-10 h-16 w-16 bg-primary/5 transition duration-300 group-hover:bg-primary/10 sm:-right-6 sm:-top-6 sm:h-20 sm:w-20"
                                            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                                            aria-hidden
                                        />

                                        <Link
                                            to={`/services/${itemSlug}`}
                                            className="relative block aspect-[16/10] overflow-hidden sm:aspect-[5/3]"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                            <span
                                                className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center bg-primary/90 text-[10px] font-bold text-white shadow-sm sm:right-4 sm:top-4 sm:h-8 sm:w-8 sm:text-xs"
                                                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                                                aria-hidden
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </Link>

                                        <div className="flex flex-1 flex-col p-4 sm:p-5">
                                            <h3 className="font-display text-base font-bold leading-snug text-gray-900 sm:text-lg">
                                                <Link to={`/services/${itemSlug}`} className="transition-colors hover:text-primary">
                                                    {item.name}
                                                </Link>
                                            </h3>
                                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                                                {item.description}
                                            </p>
                                            <Link
                                                to={`/services/${itemSlug}`}
                                                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
                                            >
                                                Learn more
                                                <ArrowRight className="h-4 w-4" aria-hidden />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
