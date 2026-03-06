import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const heroSlides = [
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

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    transition: { duration: 0.5, ease: "easeIn" },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.5 },
  }),
};

export default function HeroSection2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentIndex];

  return (
    <section className="relative lg:h-[80vh] h-[75vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.image}')` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-primary/5" />

          {/* Content */}
          <div className="absolute pb-16 lg:pb-0 inset-0 z-10 flex flex-col lg:justify-center justify-end items-start text-left px-4 sm:px-6">
            <div className="max-w-4xl">
              <motion.h1
                custom={1}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              >
                {slide.slogan}
              </motion.h1>
              <motion.p
                custom={2}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10"
              >
                {slide.subSlogan}
              </motion.p>
              <motion.div
                custom={3}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="lg:flex hidden flex-col sm:flex-row gap-4 justify-start"
              >
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Our Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                custom={3}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="lg:hidden block"
              >
                <Link
                  to="/request-service"
                  className="flex items-center w-max px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  Request our service
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
