import PageSecondaryHero from "@/components/PageSecondaryHero";
import { useServices } from "@/context/ServicesContext";

const icons = {
  finance: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  property: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  consultancy: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  construction: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

export default function ServicesPage() {
  const { services } = useServices();
  return (
    <div className="bg-white">
      <PageSecondaryHero
        title="Our Services"
        eyebrow="What We Do"
      >
        <p>3K General Trading Ltd offers financial management, property management, small business consultancy and general construction in its operational mandate.</p>
      </PageSecondaryHero>
      <section className="py-16 container-px max-w-6xl mx-auto">
        <div className="space-y-20">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                {icons[service.icon] || icons.consultancy}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key offerings:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container-px max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Value Proposition</h2>
          <p className="text-gray-600 mb-6">
            Making access to short term financing easy for both individuals and SME's. Short turnaround time, minimal documentation, precise credit appraisal and efficient service. Innovative and efficient channels for clients to access financial services. Great customer service and experience.
          </p>
          <p className="text-gray-600">
            Sustainable development is embedded in our core business strategy. We seek to build a smarter world through enhancing our value creation and engaging our stakeholders.
          </p>
        </div>
      </section>
    </div>
  );
}
