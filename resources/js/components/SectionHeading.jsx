import React from "react";

/**
 * Reusable section heading with optional subtitle and accent line.
 * @param {string} title - Section title
 * @param {string} [subtitle] - Optional subtitle/description below the title
 * @param {string} [className] - Optional wrapper className (e.g. for spacing)
 * @param {string} [titleClassName] - Optional title (h2) className
 * @param {string} [subtitleClassName] - Optional subtitle (p) className
 * @param {string} [subtitleMaxWidth] - Optional max-width class for subtitle (e.g. "max-w-xl", "max-w-2xl")
 * @param {boolean} [accentLine] - Show accent line under title (default true)
 * @param {string} [accentClassName] - Accent line className (default "bg-primary")
 */
export default function SectionHeading({
  title,
  subtitle,
  className = "",
  titleClassName = "text-2xl font-semibold text-slate-900 tracking-tight",
  subtitleClassName = "text-base text-slate-600 mt-3 leading-relaxed",
  subtitleMaxWidth,
  accentLine = true,
  accentClassName = "bg-primary",
}) {
  return (
    <div className={className}>
      <div className="relative inline-block">
        <h2 className={titleClassName}>{title}</h2>
        {accentLine && (
          <span
            className={`absolute left-0 -bottom-1 h-1 w-12 rounded-full ${accentClassName}`}
            aria-hidden
          />
        )}
      </div>
      {subtitle && (
        <p
          className={[subtitleClassName, subtitleMaxWidth].filter(Boolean).join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
