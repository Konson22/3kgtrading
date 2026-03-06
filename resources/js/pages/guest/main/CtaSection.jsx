import React from "react";
import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container-px max-w-4xl mx-auto text-center text-white">
        <p className="text-white/90 font-bold text-lg mb-2">Motto</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">"Quality and Reliability"</h2>
        <p className="text-white/90 text-lg mb-8">
          We strive to create value for our clients with distinct quality that guarantees satisfaction, delivered reliably using innovative technologies that suit modern standards.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
        >
          Get in Touch
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
