import React from 'react';
import { Link } from 'react-router-dom';
import PageSecondaryHero from '@/components/PageSecondaryHero';
import FaqSection, { jubaFaqs } from '@/components/FaqSection';
import SeoHead from '@/components/SeoHead';
import { companyName } from '@/data/site';

export default function JubaLocationPage() {
    return (
        <>
            <SeoHead
                title="Trading & Procurement Services in Juba | 3K General Trading"
                description="Building materials supplier in Juba, South Sudan. Construction materials, office supplies, logistics, and procurement services for businesses in Juba."
                keywords="Building Materials Supplier in Juba, procurement Juba, logistics company Juba"
            />
            <PageSecondaryHero
                title="Building Materials & Procurement in Juba"
                eyebrow="Juba, South Sudan"
                image="/images/services/general-construction.jpg"
                darkGradientOverlay
            >
                <p>
                    {companyName} is your trusted building materials supplier in Juba — delivering construction materials,
                    office supplies, logistics, and procurement services to businesses across the city.
                </p>
            </PageSecondaryHero>
            <section className="container-px mx-auto max-w-4xl py-16">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Procurement & Trading Services in Juba</h2>
                <p className="mb-6 text-gray-600 leading-relaxed">
                    Based at Malakia Plaza in Juba, we supply construction materials, manage procurement for NGOs and
                    government agencies, and provide logistics support throughout Central Equatoria. Whether you need
                    building materials for a construction project or industrial supplies for your operations, our Juba
                    team delivers on time and on budget.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/request-service" className="inline-flex min-h-[44px] items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90">
                        Request a Quote
                    </Link>
                    <Link to="/services" className="inline-flex min-h-[44px] items-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50">
                        View Our Services
                    </Link>
                    <Link to="/locations/south-sudan" className="inline-flex min-h-[44px] items-center text-primary font-medium hover:underline">
                        Services across South Sudan →
                    </Link>
                </div>
            </section>
            <FaqSection title="Juba Services FAQ" faqs={jubaFaqs} />
        </>
    );
}
