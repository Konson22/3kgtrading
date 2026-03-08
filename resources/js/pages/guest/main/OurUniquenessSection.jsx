import React from 'react';
import { HandCoins, TrendingUp, MessageCircle, Banknote } from 'lucide-react';

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
        <section className="relative overflow-hidden bg-primary-dark py-14 sm:py-20 lg:py-24">
            <div className="container-px relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
                {/* Centered header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                        What Sets Us Apart
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Our Uniqueness
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
                        The pillars that guide how we work and deliver for our
                        clients across South Sudan.
                    </p>
                    <div
                        className="mx-auto mt-5 h-1 w-16 rounded-full bg-secondary"
                        aria-hidden
                    />
                </div>

                {/* Card grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8">
                    {uniqueness.map((item, i) => {
                        const Icon = itemIcons[i] ?? Banknote;
                        return (
                            <article
                                key={i}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-primary/20 bg-white p-6 shadow-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 sm:p-8"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10" aria-hidden />
                                <div className="relative flex items-start justify-between gap-4">
                                    <span
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-secondary/90 sm:h-14 sm:w-14"
                                        aria-hidden
                                    >
                                        <Icon
                                            className="h-6 w-6 sm:h-7 sm:w-7"
                                            strokeWidth={1.75}
                                        />
                                    </span>
                                    <span
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-sm font-bold text-white"
                                        aria-hidden
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="relative mt-5 font-display text-lg font-bold text-gray-900 sm:text-xl">
                                    <span className="border-b-2 border-secondary/30 pb-1 transition-colors group-hover:border-secondary">
                                        {item.name}
                                    </span>
                                </h3>
                                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                                    {item.desc}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
