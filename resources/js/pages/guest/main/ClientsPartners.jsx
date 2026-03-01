import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

export default function ClientsPartners() {
  return (
    <section id="clients-partners" className="border-b border-neutral-200 bg-white py-16 lg:py-20">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          title="Clients & Partners"
          subtitle="We work with government institutions, NGOs, and private sector organizations across South Sudan."
          titleClassName="text-2xl font-semibold text-neutral-800 tracking-tight"
          subtitleClassName="text-neutral-600 mt-3 leading-relaxed max-w-2xl"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-neutral-600">
          <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-sm font-medium">
            Government
          </div>
          <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-sm font-medium">
            NGOs
          </div>
          <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-sm font-medium">
            Private Sector
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-neutral-600">
          Logo placeholders — replace with actual client/partner logos when available.
        </p>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/clients-partners">View Clients & Partners</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
