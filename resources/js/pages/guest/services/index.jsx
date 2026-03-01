import React from "react";
import { Link } from "react-router-dom";
import PageSecondaryHero from "@/components/PageSecondaryHero";
import { useServices } from "@/context/ServicesContext";

export default function ServicesPage() {
  const { services } = useServices();

  return (
    <>
      <PageSecondaryHero
        title="Our Services"
        eyebrow="What we offer"
      >
        <p>
          We deliver high-quality, compliant solutions to government institutions, NGOs, and the
          private sector across South Sudan.
        </p>
      </PageSecondaryHero>
      <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
        <div className="space-y-12">
          {services.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm lg:p-8"
            >
              <h2 className="text-xl font-semibold text-neutral-800">{service.title}</h2>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                {service.introduction}
              </p>
              {service.services?.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {service.services.map((item, i) => (
                    <li key={i}>
                      <span className="font-medium text-neutral-800">{item.name}</span>
                      <p className="mt-0.5 text-sm text-neutral-600">{item.description}</p>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-6 text-neutral-600 leading-relaxed">
                {service.closing}
              </p>
              <Link
                to={`/services/${service.slug}`}
                className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Read full details →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
