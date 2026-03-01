import React from "react";
import PageSecondaryHero from "@/components/PageSecondaryHero";
import { aboutSummary } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <PageSecondaryHero title="About Us" eyebrow="3K General Trading">
        <p>{aboutSummary.body}</p>
        <p className="mt-3">{aboutSummary.closing}</p>
      </PageSecondaryHero>
      <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
        <div className="prose prose-neutral max-w-none">
          <h2 className="text-xl font-semibold text-neutral-800">Who We Are</h2>
          <p className="text-neutral-600">
            {aboutSummary.body} {aboutSummary.closing}
          </p>
          <h2 className="mt-8 text-xl font-semibold text-neutral-800">Our Commitment</h2>
          <p className="text-neutral-600">
            We are fully registered and compliant, and we specialize in construction, financial
            management, property management, and business consultancy services. Our commitment to
            professionalism, accountability, and quality delivery has made us a reliable partner
            for both public and private sector clients across South Sudan.
          </p>
        </div>
      </section>
    </>
  );
}
