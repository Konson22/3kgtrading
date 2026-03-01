import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { whyChooseUs } from "@/data/site";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="border-b border-neutral-200 bg-primary py-16 lg:py-20">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          title="Why Choose 3K"
          subtitle="We combine experience, compliance, and local expertise to deliver results you can trust."
          titleClassName="text-2xl font-semibold text-white tracking-tight"
          subtitleClassName="text-white/90 mt-3 leading-relaxed max-w-2xl"
          accentClassName="bg-white"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg bg-white/10 px-4 py-3 text-white"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
                {i + 1}
              </span>
              <span className="text-sm font-medium leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
