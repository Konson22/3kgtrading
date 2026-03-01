import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { aboutSummary } from "@/data/site";



export default function AboutSummary() {
  return (
    <section id="about" className="border-b border-neutral-200 bg-white py-16 lg:py-20">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative overflow-hidden rounded-xl bg-neutral-100">
            <img
              src="/images/gallery/3K-General-Trading-team.png"
              alt="3K General Trading – Office or team"
              className="h-full w-full object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <SectionHeading
              title={aboutSummary.title}
              subtitle={aboutSummary.body}
              subtitleMaxWidth="max-w-none"
              titleClassName="text-2xl font-semibold text-neutral-800 tracking-tight"
              subtitleClassName="text-neutral-600 mt-3 leading-relaxed"
            />
            <p className="mt-4 text-neutral-600 leading-relaxed">
              {aboutSummary.closing}
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
