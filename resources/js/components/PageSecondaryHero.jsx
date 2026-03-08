import React from "react";

const darkGradient = 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.65))';

export default function PageSecondaryHero({ title, eyebrow, children, image, darkGradientOverlay }) {
  const bgImage = darkGradientOverlay
    ? image
      ? `${darkGradient}, url(${image})`
      : darkGradient
    : image
      ? `url(${image})`
      : 'none';
  return (
    <section className="bg-primary-dark text-white" style={{
      backgroundImage: bgImage,
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
