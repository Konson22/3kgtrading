import React from 'react';
import { Link } from 'react-router-dom';
import PageSecondaryHero from '@/components/PageSecondaryHero';
import FaqSection, { southSudanFaqs } from '@/components/FaqSection';
import SeoHead from '@/components/SeoHead';
import { companyName } from '@/data/site';

export default function SouthSudanLocationPage() {
    return (
        <>
            <SeoHead
                title="General Trading & Procurement in South Sudan | 3K General Trading"
                description="Trusted general trading company serving all of South Sudan with construction materials, import/export, logistics, and industrial supplies."
                keywords="General Trading Company in South Sudan, Logistics Company in South Sudan, Office Supplies in South Sudan"
            />
            <PageSecondaryHero
                title="General Trading Company in South Sudan"
                eyebrow="South Sudan"
                image="/images/building.jpg"
                darkGradientOverlay
            >
                <p>
                    {companyName} delivers procurement services, construction materials, logistics, and import/export
                    solutions to clients across South Sudan.
                </p>
            </PageSecondaryHero>
            <section className="container-px mx-auto max-w-4xl py-16">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Nationwide Procurement & Logistics</h2>
                <p className="mb-6 text-gray-600 leading-relaxed">
                    From our headquarters in Juba, we support government ministries, NGOs, international organisations,
                    and private businesses with procurement services in South Sudan. Our expertise spans construction
                    materials supply, office supplies, industrial supplies, and end-to-end logistics management.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/request-service" className="inline-flex min-h-[44px] items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90">
                        Request a Quote
                    </Link>
                    <Link to="/locations/juba" className="inline-flex min-h-[44px] items-center text-primary font-medium hover:underline">
                        Services in Juba →
                    </Link>
                    <Link to="/locations/east-africa" className="inline-flex min-h-[44px] items-center text-primary font-medium hover:underline">
                        East Africa operations →
                    </Link>
                </div>
            </section>
            <FaqSection title="South Sudan Services FAQ" faqs={southSudanFaqs} />
        </>
    );
}
