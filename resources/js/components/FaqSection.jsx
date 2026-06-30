export { homeFaqs, jubaFaqs, southSudanFaqs, eastAfricaFaqs } from '@/data/faqs';

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
