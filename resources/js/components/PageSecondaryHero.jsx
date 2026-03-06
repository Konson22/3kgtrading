import React from "react";

export default function PageSecondaryHero({ title, eyebrow, children, image }) {
  return (
    <section className="bg-primary-dark text-white" style={{
      backgroundImage:image ? `url(${image})` : 'none',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
    }}>
      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-14 lg:py-24">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/90 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-4">
          {title}
        </h1>
        {children && (
          <div className="max-w-3xl text-sm sm:text-base text-white/90">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
