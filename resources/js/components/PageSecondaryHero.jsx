import React from 'react';

const darkGradient =
    'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.65))';

export default function PageSecondaryHero({
    title,
    eyebrow,
    children,
    image,
    darkGradientOverlay,
}) {
    const bgImage = darkGradientOverlay
        ? image
            ? `${darkGradient}, url(${image})`
            : darkGradient
        : image
          ? `url(${image})`
          : 'none';
    return (
        <section
            className="bg-primary-dark text-white"
            style={{
                backgroundImage: bgImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:py-14 lg:py-24">
                {eyebrow && (
                    <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-white/90 uppercase">
                        {eyebrow}
                    </p>
                )}
                <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                    {title}
                </h1>
                {children && (
                    <div className="max-w-3xl text-sm text-white/90 sm:text-base">
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
}
