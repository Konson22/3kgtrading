import React, { useState } from "react";
import { useServices } from "../context/ServicesContext";

const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:border-transparent outline-none transition-colors";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

export default function RequestServiceForm({
    source = "contact-section",
    title = "Request a Service",
    variant = "secondary",
}) {
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                },
                body: JSON.stringify({
                    ...formData,
                    source,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit request. Please try again.");
            }

            setSubmitted(true);
        } catch (err) {
            console.error(err);
            setError(
                "Something went wrong while sending your request. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="p-10 rounded-2xl bg-gray-50 border border-secondary/30 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-8 h-8 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You</h3>
                <p className="text-gray-700 mb-4">
                    We have received your request and will get back to you shortly.
                </p>
                <p className="text-gray-600 text-sm">
                    We&apos;ll contact you at{" "}
                    <strong className="text-gray-900">{formData.email}</strong> or{" "}
                    <strong className="text-gray-900">{formData.phone}</strong>.
                </p>
            </div>
        );
    }

    const buttonBase =
        "w-full sm:w-auto px-8 py-4 font-semibold rounded-lg disabled:opacity-70 disabled:cursor-not-allowed transition-colors";
    const buttonVariantClasses =
        variant === "primary"
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-secondary text-white hover:bg-secondary/90";

    return (
        <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-gray-50 border border-gray-200 space-y-5"
        >
            <h3 className="text-xl font-bold mb-6">{title}</h3>
            {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md px-3 py-2">
                    {error}
                </p>
            )}
            <div>
                <label htmlFor="request-name" className={labelClass}>
                    Full Name *
                </label>
                <input
                    type="text"
                    id="request-name"
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
                    <label htmlFor="request-email" className={labelClass}>
                        Email *
                    </label>
                    <input
                        type="email"
                        id="request-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="request-phone" className={labelClass}>
                        Phone *
                    </label>
                    <input
                        type="tel"
                        id="request-phone"
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
                <label htmlFor="request-company" className={labelClass}>
                    Company / Organization
                </label>
                <input
                    type="text"
                    id="request-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your company name"
                />
            </div>
            <div>
                <label htmlFor="request-service" className={labelClass}>
                    Service Required *
                </label>
                <select
                    id="request-service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                        <option
                            key={s.id}
                            value={s.name}
                            className="bg-white text-gray-900"
                        >
                            {s.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="request-message" className={labelClass}>
                    Message / Requirements
                </label>
                <textarea
                    id="request-message"
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
                disabled={isSubmitting}
                className={`${buttonBase} ${buttonVariantClasses}`}
            >
                {isSubmitting ? "Sending..." : "Submit Request"}
            </button>
        </form>
    );
}

