import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ctaSection } from "@/data/site";

export default function CtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-secondary py-14 lg:py-16">
      <div className="container-px mx-auto max-w-6xl text-center">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          {ctaSection.title}
        </h2>
        <Button asChild size="lg" className="mt-6 bg-white text-secondary hover:bg-white/90">
          <Link to="/contact">{ctaSection.buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}
