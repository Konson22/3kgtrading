import React from "react";

const uniqueness = [
  "Efficiency & Effectiveness",
  "Financial Strength and Stability",
  "Strength in Creativity and Quality Innovations",
  "Professionals' Capacity and Operating Standards",
  "Geographically Diverse Portfolios",
  "Customers' Complaints' Response Mechanism",
];

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function OurUniquenessSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-px max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]">What Sets Us Apart</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Uniqueness</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" aria-hidden />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {uniqueness.map((item, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                <CheckIcon />
              </div>
              <p className="text-gray-700 font-medium pt-1">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
