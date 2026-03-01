import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/data/site";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full !min-h-[90vh]"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[90vh] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-neutral-900/30"
                aria-hidden
              />
              <div className="container-px relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-end pb-24 pt-32 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-40">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                  {slide.eyebrow}
                </p>
                <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  {slide.headline}
                </h1>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="shadow-lg">
                    <Link to="/contact">{slide.ctaPrimary}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="border-2 border-white/90 bg-transparent text-white hover:bg-white hover:text-neutral-900"
                  >
                    <Link to="/projects">{slide.ctaSecondary}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
