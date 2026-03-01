import React from "react";

export default function PageSecondaryHero({ title, eyebrow, children }) {
  return (
    <section className="bg-primary text-white">
      <div className="container-px mx-auto max-w-6xl py-10 sm:py-14 lg:py-16">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-sm">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-4 max-w-3xl text-base text-white/95 sm:text-sm">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
