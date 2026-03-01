import React from "react";
import Hero from "./Hero";
import AboutSummary from "./AboutSummary";
import ServicesSection from "./ServicesSection";
import ProjectsPreview from "./ProjectsPreview";
import WhyChooseUs from "./WhyChooseUs";
import StatsSection from "./StatsSection";
import ClientsPartners from "./ClientsPartners";
import CtaSection from "./CtaSection";

export default function MainPage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSummary />
      <ProjectsPreview />
      <WhyChooseUs />
      <StatsSection />
      <ClientsPartners />
      <CtaSection />
    </>
  );
}
