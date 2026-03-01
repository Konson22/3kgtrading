import React from "react";
import PageSecondaryHero from "@/components/PageSecondaryHero";

export default function ClientsPartnersPage() {
  return (
    <>
      <PageSecondaryHero
        title="Clients & Partners"
        eyebrow="Who we work with"
      >
        <p>
          We work with government institutions, NGOs, and private sector organizations across
          South Sudan.
        </p>
      </PageSecondaryHero>
      <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
        <p className="text-neutral-600">
          Logo and case study content can be added here. Placeholder blocks below.
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          {["Government", "NGOs", "Private Sector"].map((label) => (
            <div
              key={label}
              className="flex h-24 w-40 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-sm font-medium text-neutral-600"
            >
              {label}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
