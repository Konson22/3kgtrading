import React from "react";
import { Link } from "react-router-dom";
import { useServices } from "../../../context/ServicesContext";

export default function ServicesSection() {
  const { services } = useServices();
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white ">
      <div className="container-px max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="text-secondary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 sm:mt-3 mb-3 sm:mb-4">
            Our Services
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary rounded-full mx-auto mb-4 sm:mb-6" aria-hidden />
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            3K General Trading Ltd offers financial management, property management, small business consultancy and general construction services.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
        <div className="text-center mt-10 sm:mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg text-sm sm:text-base"
          >
            View all services
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}



export function ServiceCard({ service }) {
  return (
    <Link
      key={service.id}
      to="/services"
      className="group flex flex-col overflow-hidden "
    >
      {service.image && (
        <div className="aspect-video sm:aspect-[16/10] w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 lg:pt-6 pt-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 flex-1">{service.description}</p>
        <span className="inline-flex items-center gap-1 text-primary font-medium text-xs sm:text-sm mt-3 sm:mt-4 group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}