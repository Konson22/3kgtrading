import { Award, CheckCircle2, FolderKanban, Users } from 'lucide-react';
import ClipPathIconFrame, { iconFrames } from '@/components/ClipPathIconFrame';
import { stats, whyChooseUs } from '@/data/site';

const statIcons = [Award, FolderKanban, Users, CheckCircle2];

export default function TrustSection() {
    return (
        <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24" aria-labelledby="trust-heading">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                aria-hidden
            />

            <div className="container-px relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:tracking-[0.2em] sm:text-sm">
                        Our Track Record
                    </span>
                    <h2
                        id="trust-heading"
                        className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl"
                    >
                        Why Choose 3K General Trading
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base md:text-lg">
                        Delivering dependable results for government, NGOs, and private sector clients across South Sudan.
                    </p>
                    <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-secondary sm:mt-5 sm:w-16" aria-hidden />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-4">
                    {stats.map((item, index) => {
                        const Icon = statIcons[index] ?? Award;
                        const frame = iconFrames[index] ?? iconFrames[0];

                        return (
                            <article
                                key={item.label}
                                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-medium sm:rounded-2xl sm:p-5 md:p-6"
                            >
                                <div
                                    className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 bg-primary/5 transition duration-300 group-hover:bg-primary/10 sm:-right-6 sm:-top-6 sm:h-20 sm:w-20"
                                    style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                                    aria-hidden
                                />
                                <ClipPathIconFrame Icon={Icon} frame={frame} index={index} align="center" />
                                <p className="font-display text-2xl font-bold leading-none text-gray-900 sm:text-3xl md:text-4xl">
                                    <span className="text-primary">{item.value}</span>
                                </p>
                                <p className="mt-2 px-1 text-[11px] font-semibold uppercase leading-snug tracking-[0.08em] text-gray-500 sm:text-xs sm:tracking-[0.12em] md:text-sm">
                                    {item.label}
                                </p>
                                <div
                                    className="mx-auto mt-3 h-1 w-8 rounded-full bg-gray-200 transition-all duration-300 group-hover:w-12 group-hover:bg-secondary sm:mt-4 sm:w-10 sm:group-hover:w-14"
                                    aria-hidden
                                />
                            </article>
                        );
                    })}
                </div>

                <div className="mt-8 rounded-xl border border-gray-100 bg-gray-50/80 p-4 shadow-sm sm:mt-14 sm:rounded-2xl sm:p-6 md:p-8 lg:p-10">
                    <h3 className="text-center font-display text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
                        What You Can Expect From Us
                    </h3>
                    <ul className="mx-auto mt-6 grid max-w-4xl gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                        {whyChooseUs.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2.5 rounded-lg border border-white bg-white px-3 py-3 shadow-sm sm:gap-3 sm:rounded-xl sm:px-4 sm:py-3.5"
                            >
                                <CheckCircle2
                                    className="mt-0.5 h-4 w-4 shrink-0 text-secondary sm:h-5 sm:w-5"
                                    strokeWidth={2.25}
                                    aria-hidden
                                />
                                <span className="text-sm leading-relaxed text-gray-700 sm:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
