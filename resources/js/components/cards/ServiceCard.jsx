import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="group flex flex-col overflow-hidden ">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col py-5  sm:py-6">
        <h3 className="text-xl font-bold text-white md:text-base md:tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/90 md:text-base">
          {service.shortDescription ?? service.introduction}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="mt-4 inline-flex w-max items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 hover:underline"
        >
          <span>Learn More</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </article>
  );
}
