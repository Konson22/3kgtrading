import React from "react";
import { useParams, Link } from "react-router-dom";
import { useServices } from "../../../../context/ServicesContext";

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const { services } = useServices();
  const service = services.find((s) => slugify(s.name) === slug);

  if (!service) {
    return (
      <div className="bg-white">
        <PageSecondaryHero title="Service Not Found" eyebrow="404" />
        <section className="py-16 container-px max-w-xl mx-auto text-center">
          <p className="text-gray-600 mb-6">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/services" className="text-primary font-semibold hover:underline">
            ← Back to Services
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <p
      >
        <p>{service.description}</p>
      </p>
      <section className="py-16 container-px max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Key offerings</h2>
        <ul className="space-y-2 mb-12">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Link to="/quote" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          Request a Quote
        </Link>
      </section>
    </div>
  );
}
