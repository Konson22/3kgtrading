import { Banknote, HandCoins, MessageCircle, TrendingUp } from 'lucide-react';
import ClipPathIconFrame, { iconFrames } from '@/components/ClipPathIconFrame';

const uniqueness = [
    {
        name: 'Efficiency & Effectiveness',
        desc: 'We deliver on time and within budget, even where logistics and infrastructure are challenging across South Sudan.',
    },
    {
        name: 'Financial Strength and Stability',
        desc: 'Stable finances and prudent management so we can honour commitments to clients and communities for the long term.',
    },
    {
        name: 'Strength in Creativity and Quality Innovations',
        desc: 'Solutions that suit local conditions and meet international quality standards—built for the South Sudanese context.',
    },
    {
        name: 'Geographically Diverse Portfolios',
        desc: 'Presence and experience across South Sudan’s states and regions, with understanding of local needs and opportunities.',
    },
];

const itemIcons = [HandCoins, TrendingUp, MessageCircle, Banknote];

export default function OurUniquenessSection() {
    return (
        <section className="relative overflow-hidden bg-primary-dark py-12 sm:py-20 lg:py-24">
            <div
                className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
                aria-hidden
            />

            <div className="container-px relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary sm:tracking-[0.2em]">
                        What Sets Us Apart
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                        Our Uniqueness
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:mt-4 sm:text-base md:text-lg">
                        The pillars that guide how we work and deliver for our
                        clients across South Sudan.
                    </p>
                    <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-secondary sm:mt-5 sm:w-16" aria-hidden />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:gap-8">
                    {uniqueness.map((item, index) => {
                        const Icon = itemIcons[index] ?? Banknote;
                        const frame = iconFrames[index] ?? iconFrames[0];

                        return (
                            <article
                                key={item.name}
                                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-medium sm:rounded-2xl sm:p-6 md:p-8"
                            >
                                <div
                                    className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 bg-primary/5 transition duration-300 group-hover:bg-primary/10 sm:-right-6 sm:-top-6 sm:h-20 sm:w-20"
                                    style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                                    aria-hidden
                                />

                                <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-5 sm:text-left">
                                    <ClipPathIconFrame Icon={Icon} frame={frame} index={index} align="start" />
                                    <div className="min-w-0 flex-1 sm:pt-1">
                                        <h3 className="font-display text-base font-bold text-gray-900 sm:text-lg md:text-xl">
                                            {item.name}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:mt-3 sm:text-base">
                                            {item.desc}
                                        </p>
                                        <div
                                            className="mx-auto mt-3 h-1 w-8 rounded-full bg-gray-200 transition-all duration-300 group-hover:w-14 group-hover:bg-secondary sm:mx-0 sm:mt-4 sm:w-10 sm:group-hover:w-16"
                                            aria-hidden
                                        />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
