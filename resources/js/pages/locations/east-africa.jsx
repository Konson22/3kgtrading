import React from 'react';
import { Link } from 'react-router-dom';
import PageSecondaryHero from '@/components/PageSecondaryHero';
import FaqSection, { eastAfricaFaqs } from '@/components/FaqSection';
import SeoHead from '@/components/SeoHead';
import { companyName } from '@/data/site';

export default function EastAfricaLocationPage() {
    return (
        <>
            <SeoHead
                title="Trading & Procurement Company in East Africa | 3K General Trading"
                description="3K General Trading Co. Ltd — your trading and procurement partner in East Africa, headquartered in Juba, South Sudan."
                keywords="Trading and Procurement Company in East Africa, import export East Africa"
            />
            <PageSecondaryHero
                title="Trading & Procurement in East Africa"
                eyebrow="East Africa"
                image="/images/services/financial-management.jpg"
                darkGradientOverlay
            >
                <p>
                    {companyName} connects South Sudan with East Africa through reliable trading, procurement, and
                    logistics partnerships.
                </p>
            </PageSecondaryHero>
            <section className="container-px mx-auto max-w-4xl py-16">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Regional Trading & Import/Export</h2>
                <p className="mb-6 text-gray-600 leading-relaxed">
                    As a leading trading and procurement company in East Africa, we facilitate import and export
                    services, cross-border logistics, and supply chain solutions. Our Juba-based team understands
                    regional market conditions and compliance requirements for international partners.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/request-service" className="inline-flex min-h-[44px] items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90">
                        Request a Quote
                    </Link>
                    <Link to="/services" className="inline-flex min-h-[44px] items-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50">
                        Explore Services
                    </Link>
                </div>
            </section>
            <FaqSection title="East Africa FAQ" faqs={eastAfricaFaqs} />
        </>
    );
}
