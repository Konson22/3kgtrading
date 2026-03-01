import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PageSecondaryHero from "@/components/PageSecondaryHero";
import SectionHeading from "@/components/SectionHeading";
import { useServices } from "@/context/ServicesContext";

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { services } = useServices();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <PageSecondaryHero title="Service Not Found" eyebrow="Oops" />
        <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
          <p className="text-neutral-600">
            The service you’re looking for doesn’t exist or has been moved.
          </p>
          <Link
            to="/services"
            className="mt-4 inline-block font-medium text-primary underline-offset-4 hover:underline"
          >
            View all services
          </Link>
        </section>
      </>
    );
  }

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageSecondaryHero
        title={service.title}
        eyebrow="Service"
      >
        <p>{service.shortDescription}</p>
      </PageSecondaryHero>

      <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {service.image && (
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src={service.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="prose prose-neutral max-w-none space-y-6">
              <p className="text-neutral-600 leading-relaxed text-base">
                {service.introduction}
              </p>
              {service.services?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">What we offer</h3>
                  <ul className="space-y-4">
                    {service.services.map((item, i) => (
                      <li key={i}>
                        <span className="font-medium text-neutral-800">{item.name}</span>
                        <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="text-neutral-600 leading-relaxed text-base">
                {service.closing}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
              >
                Request a quotation
              </Link>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                Back
              </button>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <SectionHeading
                title="Need this service?"
                subtitle="Get in touch for a tailored quote or to discuss your requirements."
                titleClassName="text-lg font-semibold text-neutral-800 tracking-tight"
                subtitleClassName="text-sm text-neutral-600 mt-2 leading-relaxed"
              />
              <Link
                to="/contact"
                className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Contact us →
              </Link>
            </div>
          </aside>
        </div>

        {otherServices.length > 0 && (
          <div className="mt-16 border-t border-neutral-200 pt-12">
            <SectionHeading
              title="Other services"
              subtitle="Explore more of what we offer."
              className="mb-8"
            />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="block rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-primary/30 hover:bg-neutral-50"
                  >
                    <span className="font-medium text-neutral-800">{s.title}</span>
                    <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                      {s.shortDescription}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
