import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const heroSlides = [
  {
    id: 1,
    service: "Financial Management",
    slogan: "Smart Finance for Stronger Businesses",
    subSlogan:
      "Expert financial management, SME financing advisory, and strategic solutions to help businesses grow with confidence.",
    image: "/images/services/financial-management.jpg",
  },
  {
    id: 2,
    service: "Property Management",
    slogan: "Your Property, Professionally Managed",
    subSlogan:
      "Reliable real estate solutions including property sales, rent management, and professional consultancy.",
    image: "/images/services/property-real-estate.jpg",
  },
  {
    id: 3,
    service: "Small Business Consultancy",
    slogan: "Empowering Small Businesses to Grow",
    subSlogan:
      "Business development, financial access, and strategic guidance designed to help entrepreneurs succeed.",
    image: "/images/services/small-business-consultancy.jpg",
  },
  {
    id: 4,
    service: "General Construction",
    slogan: "Building Today for a Stronger Tomorrow",
    subSlogan:
      "Comprehensive construction services including buildings, infrastructure, boreholes, electrical works, and fabrication.",
    image: "/images/services/general-construction.jpg",
  },
];

export default function HeroSection() {
  return (
    <section className="hero-section relative min-h-screen flex flex-col overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        speed={800}
        className="absolute inset-0 w-full h-full"
      >
        {heroSlides.map((slide) => (
          <HeroSlide key={slide.id} slide={slide} />
        ))}
      </Swiper>

      {/* Static CTA bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-r from-black/70 via-black/60 to-black/70 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto container-px py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-white/80 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Our Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <p className="text-white/70 text-sm hidden md:block">
            Quality & Reliability
          </p>
        </div>
      </div>
    </section>
  );
}


function HeroSlideBackground({ slide }) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${slide.image}')` }}
    />
  );
}

function HeroSlideGradient() {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
  );
}

function HeroSlide({ slide }) {
  return (
    <SwiperSlide className="relative !h-full">
      <div className="absolute inset-0">
        <HeroSlideBackground slide={slide} />
        <HeroSlideGradient />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        <div className="absolute inset-0 z-10 flex flex-col justify-center container-px">
          <div className="max-w-3xl pl-4 sm:pl-6 border-l-4 border-secondary">
            <div className="hero-slide-content">
              <span className="hero-animate hero-eyebrow inline-block px-3 py-1 bg-secondary/20 text-secondary font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] rounded mb-6">
                {slide.service}
              </span>
              <h1 className="hero-animate hero-title font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
                {slide.slogan}
              </h1>
              <p className="hero-animate hero-desc text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {slide.subSlogan}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}

