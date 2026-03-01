import React from "react";
import { Link } from "react-router-dom";
import PageSecondaryHero from "@/components/PageSecondaryHero";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <>
      <PageSecondaryHero
        title="Careers"
        eyebrow="Join our team"
      >
        <p>
          We are always looking for dedicated professionals to join 3K General Trading. Check back
          for open positions or get in touch to express your interest.
        </p>
      </PageSecondaryHero>
      <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
        <p className="text-neutral-600">
          Current openings will be listed here. For general enquiries, please contact us.
        </p>
        <Button asChild className="mt-6">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>
    </>
  );
}
