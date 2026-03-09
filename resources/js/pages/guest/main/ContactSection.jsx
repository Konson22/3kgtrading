import React from "react";
import { Link } from "react-router-dom";
import RequestServiceForm from "../../../components/RequestServiceForm";

const contactItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Visit Us",
    value: "Malakia Plaza, Office No 18",
    sub: "Plot 10, Block M, Hai Neem, Juba",
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call Us",
    value: "+211 929 986 001",
    sub: "+211 929 986 002",
    href: "tel:+211929986001",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email Us",
    value: "info@3kgtrading.com",
    sub: null,
    href: "mailto:info@3kgtrading.com",
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 text-gray-900">
      <div className="container-px max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6" aria-hidden />
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Reach out for quality services in construction, financial management, and property solutions.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-secondary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                  {item.icon}
                </div>
                <div>
                  <span className="text-gray-600 text-xs font-semibold uppercase tracking-wider">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="block text-gray-900 font-semibold hover:text-secondary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-semibold">{item.value}</p>
                  )}
                  {item.sub && <p className="text-gray-700 text-sm mt-0.5">{item.sub}</p>}
                </div>
              </div>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:text-secondary/90 transition-colors text-sm"
            >
              View full contact details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="lg:col-span-3">
            <RequestServiceForm
              source="contact-section"
              title="Request a Service"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
