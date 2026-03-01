import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import { useServices } from "@/context/ServicesContext";

export default function ServicesSection() {
  const { services } = useServices();

  return (
    <section id="services" className=" py-16 lg:py-20">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          title="Our Core Services"
          subtitle="We deliver high-quality, compliant solutions to government institutions, NGOs, and the private sector across South Sudan."
          titleClassName="text-2xl font-semibold text-neutral-800 tracking-tight"
          subtitleClassName="text-neutral-600 mt-3 leading-relaxed max-w-2xl"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
