export default function FaqSection({ title = 'Frequently Asked Questions', faqs = [] }) {
    if (!faqs.length) {
        return null;
    }

    return (
        <section className="bg-gray-50 py-16" aria-labelledby="faq-heading">
            <div className="container-px mx-auto max-w-4xl">
                <h2 id="faq-heading" className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                    {title}
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <details
                            key={faq.question}
                            className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                        >
                            <summary className="cursor-pointer list-none font-semibold text-gray-900 marker:content-none [&::-webkit-details-marker]:hidden">
                                <span className="flex items-center justify-between gap-4">
                                    {faq.question}
                                    <span
                                        aria-hidden="true"
                                        className="text-primary transition-transform group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </span>
                            </summary>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

export const homeFaqs = [
    {
        question: 'What services does 3K General Trading offer in South Sudan?',
        answer: 'We offer general construction, financial management, property management, small business consultancy, procurement, import and export, logistics, and industrial supplies across South Sudan and East Africa.',
    },
    {
        question: 'Where is 3K General Trading located?',
        answer: 'Our head office is at Malakia Plaza, Office No 18, 4th Floor, Plot No 10, Block M, Hai Neem, Juba, South Sudan.',
    },
    {
        question: 'Do you supply construction materials in Juba?',
        answer: 'Yes. We are a building materials and construction materials supplier in Juba, serving government, NGOs, and private sector clients across South Sudan.',
    },
    {
        question: 'How can I request a quote?',
        answer: 'Visit our Request a Quote page or call +211 929 986 001. We respond promptly to procurement and service enquiries.',
    },
    {
        question: 'Do you provide logistics services in South Sudan?',
        answer: 'Yes. We operate as a logistics company in South Sudan, supporting import, export, and supply chain needs for businesses and organisations.',
    },
];

export const jubaFaqs = [
    {
        question: 'Do you deliver building materials in Juba?',
        answer: 'Yes. We supply and deliver building materials and construction supplies to clients across Juba and surrounding areas.',
    },
    {
        question: 'Can NGOs in Juba use your procurement services?',
        answer: 'Absolutely. We work with NGOs, government agencies, and private companies for procurement and logistics in Juba.',
    },
];

export const southSudanFaqs = [
    {
        question: 'Do you serve clients outside Juba?',
        answer: 'Yes. While headquartered in Juba, we serve clients across South Sudan with procurement, construction, and logistics services.',
    },
];

export const eastAfricaFaqs = [
    {
        question: 'Does 3K General Trading operate beyond South Sudan?',
        answer: 'Our primary operations are in South Sudan with East Africa regional trading and procurement partnerships. Contact us to discuss cross-border requirements.',
    },
];
