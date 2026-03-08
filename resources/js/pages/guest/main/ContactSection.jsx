import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useServices } from "../../../context/ServicesContext";

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

const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

export default function ContactSection() {
  const { services } = useServices();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
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
      <section className="py-20 text-gray-900">
        <div className="container-px max-w-2xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-gray-50 border border-secondary/30">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Thank You</h3>
            <p className="text-gray-700 mb-4">
              We have received your request and will get back to you shortly.
            </p>
            <p className="text-gray-600 text-sm">
              We&apos;ll contact you at <strong className="text-gray-900">{formData.email}</strong> or <strong className="text-gray-900">{formData.phone}</strong>.
            </p>
          </div>
        </div>
      </section>
    );
  }

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
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-gray-50 border border-gray-200 space-y-5">
              <h3 className="text-xl font-bold mb-6">Request a Service</h3>
              <div>
                <label htmlFor="contact-name" className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-email" className={labelClass}>Email *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className={labelClass}>Phone *</label>
                  <input
                    type="tel"
                    id="contact-phone"
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
                <label htmlFor="contact-company" className={labelClass}>Company / Organization</label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="contact-service" className={labelClass}>Service Required *</label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.name} className="bg-white text-gray-900">
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClass}>Message / Requirements</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe your requirements or project details..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
