import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white">
            <div className="container-px mx-auto max-w-6xl px-5 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="mb-4 text-lg font-bold">
                            3K General Trading Ltd
                        </h3>
                        <p className="mb-2 text-sm text-white/90">
                            Accountability, Transparency & Compliance
                        </p>
                        <p className="text-sm font-semibold text-white/90">
                            "Quality and Reliability"
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/about', label: 'About' },
                                { to: '/services', label: 'Services' },
                                { to: '/projects', label: 'Projects' },
                                { to: '/contact', label: 'Contact' },
                                {
                                    to: '/request-service',
                                    label: 'Request Service',
                                },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-white/90 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Contact</h3>
                        <address className="space-y-1 text-sm text-white/90 not-italic">
                            <p>Malakia Plaza, Office No 18</p>
                            <p>Plot No 10, Block M, Hai Neem</p>
                            <p>Juba, South Sudan</p>
                            <a
                                href="tel:+211929986001"
                                className="mt-2 block hover:text-white"
                            >
                                +211 929 986 001
                            </a>
                            <a
                                href="mailto:info@3kgtrading.com"
                                className="block hover:text-white"
                            >
                                info@3kgtrading.com
                            </a>
                        </address>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/80">
                    <p>
                        © {new Date().getFullYear()} 3K General Trading Ltd. All
                        rights reserved.
                    </p>
                    <a
                        href="https://www.3kgtrading.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-white"
                    >
                        www.3kgtrading.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
