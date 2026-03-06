import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useServices } from "../../../context/ServicesContext";
import { ServiceCard } from "./ServicesSection";


export default function ServicesSection2() {
  const { services } = useServices();
  return (
    <section className="py-24 bg-white hidden lg:block">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" aria-hidden />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            3K General Trading Ltd offers financial management, property management, small business consultancy and general construction services.
          </p>
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="services-swiper pb-14"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
          >
            View all services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}


