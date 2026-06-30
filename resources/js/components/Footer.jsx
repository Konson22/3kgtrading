import React from 'react';
import { Link } from 'react-router-dom';
import { companyName, contact, social } from '@/data/site';
import { trackEmailClick, trackPhoneClick } from '@/lib/analytics';

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white">
            <div className="container-px mx-auto max-w-6xl px-5 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <p className="mb-4 text-lg font-bold">{companyName}</p>
                        <p className="mb-2 text-sm text-white/90">
                            Accountability, Transparency & Compliance
                        </p>
                        <p className="text-sm font-semibold text-white/90">
                            &ldquo;Quality and Reliability&rdquo;
                        </p>
                    </div>
                    <div>
                        <p className="mb-4 text-lg font-bold">Quick Links</p>
                        <ul className="space-y-2">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/about', label: 'About' },
                                { to: '/services', label: 'Services' },
                                { to: '/projects', label: 'Projects' },
                                { to: '/contact', label: 'Contact' },
                                { to: '/request-service', label: 'Request a Quote' },
                                { to: '/careers', label: 'Careers' },
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
                        <p className="mb-4 text-lg font-bold">Locations</p>
                        <ul className="space-y-2">
                            {[
                                { to: '/locations/juba', label: 'Juba' },
                                { to: '/locations/south-sudan', label: 'South Sudan' },
                                { to: '/locations/east-africa', label: 'East Africa' },
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
                        <p className="mb-4 text-lg font-bold">Contact</p>
                        <address className="space-y-1 text-sm text-white/90 not-italic">
                            <p>{contact.address}</p>
                            {contact.phones.slice(0, 2).map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/\D/g, '')}`}
                                    onClick={() => trackPhoneClick('footer')}
                                    className="block hover:text-white"
                                >
                                    {phone.replace('+211 (0) ', '+211 ')}
                                </a>
                            ))}
                            <a
                                href={`mailto:${contact.email}`}
                                onClick={() => trackEmailClick('footer')}
                                className="block hover:text-white"
                            >
                                {contact.email}
                            </a>
                        </address>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/20 pt-8 text-center text-sm text-white/80 sm:flex-row sm:justify-between">
                    <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/privacy" className="transition-colors hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="transition-colors hover:text-white">
                            Terms & Conditions
                        </Link>
                        <a
                            href={social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-white"
                            aria-label="Facebook"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
