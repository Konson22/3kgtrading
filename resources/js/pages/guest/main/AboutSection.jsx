import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-px max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 sm:mb-6">
              Committed to Quality & Excellence
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Since its establishment, 3K General Trading Ltd has been focusing in areas of Financial Management, Property Management, Small Business Consultancy and General Construction.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              We are committed to offering quality services and products at all times, according to national and international accepted standards. To produce good results where synergies are demanded, 3K GTC has strategic business alliances with reputable companies in the region and beyond.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors text-sm sm:text-base"
            >
              Learn more about us
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative shadow-lg order-1 lg:order-2">
            <div className="absolute -right-4 -bottom-4 w-1/2 border-b-8 rounded-br-2xl border-r-8 h-1/2 border-primary" aria-hidden />
            <div className="absolute -left-4 -top-4 w-1/2 border-t-8 rounded-tl-2xl border-l-8 h-1/2 border-secondary" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/gallery/3K-General-Trading-team.png"
                alt="3K General Trading team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
