import React, { useState } from 'react';
import PageSecondaryHero from '@/components/PageSecondaryHero';

const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/3kgtrading',
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
        ),
        brandColor: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/3kgtrading',
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        brandColor: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    },
    {
        name: 'X (Twitter)',
        href: 'https://twitter.com/3kgtrading',
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        brandColor: 'hover:bg-gray-900 hover:text-white hover:border-gray-900',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/3kgtrading',
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-3.205a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" clipRule="evenodd" />
            </svg>
        ),
        brandColor: 'hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]',
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@3kgtrading',
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        brandColor: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-white">
                <PageSecondaryHero
                    title="Message Sent"
                    eyebrow="Thank You"
                    darkGradientOverlay
                />
                <section className="container-px mx-auto max-w-xl py-16 text-center sm:py-20">
                    <div className="rounded-2xl border border-secondary/20 bg-secondary/5 px-6 py-10 sm:px-10">
                        <p className="mb-4 text-lg leading-relaxed text-gray-700">
                            Thank you for reaching out. We have received your message and will get back to you shortly.
                        </p>
                        <p className="text-sm text-gray-600">
                            We will respond to <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>.
                        </p>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <PageSecondaryHero
                title="Contact Us"
                eyebrow="Get in Touch"
                darkGradientOverlay
            >
                <p>Reach out to 3K General Trading Ltd for quality services and products.</p>
            </PageSecondaryHero>

            <section className="container-px mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
                <div className="flex flex-col gap-12">
                    {/* Contact info – on top */}
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                            Visit or call
                        </span>
                        <h2 className="mt-2 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                            Office & contact
                        </h2>
                        <div className="mt-4 h-1 w-16 rounded-full bg-secondary" aria-hidden />

                        <div className="mt-8 space-y-8">
                            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                    Office location
                                </h3>
                                <address className="not-italic">
                                    <p className="font-semibold text-primary">3K General Trading Ltd</p>
                                    <p className="mt-2 leading-relaxed text-gray-600">
                                        Malakia Plaza, Office No 18
                                        <br />
                                        Plot No 10, Block M, Hai Neem
                                        <br />
                                        Juba, South Sudan
                                    </p>
                                </address>
                            </div>

                            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                    Contact information
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        { href: 'tel:+211929986001', label: '+211 929 986 001' },
                                        { href: 'tel:+211929986002', label: '+211 929 986 002' },
                                        { href: 'tel:+211989986003', label: '+211 989 986 003' },
                                    ].map((item) => (
                                        <li key={item.label}>
                                            <a
                                                href={item.href}
                                                className="flex items-center gap-3 text-gray-600 transition-colors hover:text-primary"
                                            >
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </span>
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        <a
                                            href="mailto:info@3kgtrading.com"
                                            className="flex items-center gap-3 text-gray-600 transition-colors hover:text-primary"
                                        >
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </span>
                                            info@3kgtrading.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.3kgtrading.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-gray-600 transition-colors hover:text-primary"
                                        >
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                            </span>
                                            www.3kgtrading.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                    Follow us
                                </h3>
                                <p className="mb-5 text-sm text-gray-600">
                                    Connect with us on social media for updates and news.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:scale-105 ${social.brandColor}`}
                                            title={social.name}
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form – below */}
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                            Send a message
                        </span>
                        <h2 className="mt-2 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                            Contact or request form
                        </h2>
                        <div className="mt-4 h-1 w-16 rounded-full bg-secondary" aria-hidden />

                        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                                        Full name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={inputClass}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={inputClass}
                                            placeholder="+211 929 986 001"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="General enquiry / Request a quote"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`${inputClass} resize-none`}
                                        placeholder="How can we help you?"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-6 w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary/90 sm:w-auto"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
