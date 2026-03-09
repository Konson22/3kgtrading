import React from "react";
import PageSecondaryHero from "../../../components/PageSecondaryHero";
import RequestServiceForm from "../../../components/RequestServiceForm";

export default function RequestServicePage() {
  return (
    <div className="bg-white">
      <PageSecondaryHero
        title="Request Our Service"
        eyebrow="Get Started"
      >
        <p>Fill out the form below and our team will reach out to discuss your needs.</p>
      </PageSecondaryHero>
      <section className="py-16 container-px max-w-2xl mx-auto">
        <RequestServiceForm
          source="request-service-page"
          title="Request a Service"
          variant="primary"
        />
      </section>
    </div>
  );
}
