import React from "react";
import PageSecondaryHero from "@/components/PageSecondaryHero";
import { contact } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <PageSecondaryHero
        title="Contact Us"
        eyebrow="Get in touch"
      >
        <p>
          Ready to work with a reliable partner? Reach out for quotes, project enquiries, or
          general information.
        </p>
      </PageSecondaryHero>
      <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-neutral-800">Our Location</h2>
            <p className="mt-2 text-neutral-600">{contact.address}</p>
            <h2 className="mt-6 text-lg font-semibold text-neutral-800">Message Us</h2>
            <ul className="mt-2 space-y-1">
              {contact.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="text-primary hover:underline">
                    {e}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="mt-6 text-lg font-semibold text-neutral-800">Reach Us</h2>
            <ul className="mt-2 space-y-1">
              {contact.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="text-primary hover:underline">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-100 p-6">
            <h2 className="text-lg font-semibold text-neutral-800">Contact form</h2>
            <p className="mt-2 text-sm text-neutral-600">
              A contact form with email notification can be added here (e.g. Laravel backend +
              Inertia or API). For now, use the email and phone above.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
