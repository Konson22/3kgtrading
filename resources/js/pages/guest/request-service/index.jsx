import React, { useState } from "react";
import PageSecondaryHero from "../../../components/PageSecondaryHero";
import { useServices } from "../../../context/ServicesContext";

export default function RequestServicePage() {
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
      <div className="bg-white">
        <PageSecondaryHero
          title="Request Submitted"
          eyebrow="Thank You"
        />
        <section className="py-20 container-px max-w-xl mx-auto text-center">
          <div className="p-8 bg-secondary/10 rounded-2xl border border-secondary/20">
            <p className="text-gray-700 text-lg mb-4">
              Thank you for your interest. We have received your service request and will get back to you shortly.
            </p>
            <p className="text-gray-600 text-sm">
              Our team will contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <PageSecondaryHero
        title="Request Our Service"
        eyebrow="Get Started"
      >
        <p>Fill out the form below and our team will reach out to discuss your needs.</p>
      </PageSecondaryHero>
      <section className="py-16 container-px max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                placeholder="+211 929 986 001"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Required *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message / Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
              placeholder="Describe your requirements or project details..."
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </section>
    </div>
  );
}
