import PageSecondaryHero from "../../../components/PageSecondaryHero";

const SectionHeader = ({ eyebrow, title }) => (
  <div className="mb-10">
    {eyebrow && (
      <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]">{eyebrow}</span>
    )}
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">{title}</h2>
    <div className="w-14 h-1 bg-primary rounded-full" aria-hidden />
  </div>
);

export default function About() {
  return (
    <div className="bg-white">
      <PageSecondaryHero
        title="About 3K GTC"
        eyebrow="Accountability, Transparency & Compliance"
        image="/images/team.jpg"
      />

      {/* Who We Are */}
      <section className="py-20 container-px max-w-5xl mx-auto">
        <SectionHeader title="Who We Are" />
        <div className="prose prose-lg text-gray-600 max-w-none">
          <p className="leading-relaxed mb-6">
            3K General Trading Ltd is a multiservice provider company which strives to supply variety of quality services and products to clients/customers in South Sudan in private and public sector, nongovernmental organizations and intergovernmental establishments.
          </p>
          <p className="leading-relaxed">
            Since its establishment, 3K General Trading Ltd has been focusing in areas of Financial Management, Property Management, Small Business Consultancy and General Construction. We are committed to offering quality services and products at all times, according to national and international accepted standards.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container-px max-w-5xl mx-auto">
          <SectionHeader eyebrow="Our Beliefs" title="The Philosophy behind Our Business" />
          <p className="text-gray-600 leading-relaxed mb-12 max-w-3xl">
            3K GTC provides safe, reliable, customer-focused and sustainable services. We know that doing so requires a high-performing organization that is financially sound, innovative and offers employees satisfying service.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Nature of People",
                desc: "We believe that our employees want to do a good job. If their purpose and functions are clearly defined, if they are empowered, and if they are given the proper tools and knowledge, they will do excellent work without excessive supervision.",
              },
              {
                title: "The Way We Work",
                desc: "3K GTC believes that the best work is done when individuals operate within the organization in consultative, cross-functional teams. The job of managers is to promote collaboration and provide the right strategies, structures and systems.",
              },
              {
                title: "The Way We Lead",
                desc: "The job of managers and supervisors at 3K GTC is to make it easier for their employees to serve customers. It is a privilege that must be continuously earned by serving and mentoring others.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-soft border border-gray-100 hover:border-primary/20 transition-colors">
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 container-px max-w-5xl mx-auto">
        <SectionHeader eyebrow="Our Direction" title="Vision & Mission" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-l-4 border-primary">
            <h3 className="text-xl font-bold text-primary mb-3">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a leader in the provision of quality services with knowledge based on deal structuring, backed by strong risk analysis.
            </p>
          </div>
          <div className="relative p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl border-l-4 border-secondary">
            <h3 className="text-xl font-bold text-secondary mb-3">Mission Statement</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the desired provider of diverse inexpensive and timely commercial services that meet varied clientele dynamic needs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-px max-w-5xl mx-auto">
          <SectionHeader eyebrow="What We Stand For" title="Our Core Values" />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Accountability", desc: "The courage to take ownership of problems, mistakes, successes and failures. The identification of problems is important and the delivery of solutions is vital." },
              { title: "Desire to Improve", desc: "We expect our employees to constantly seek ways to improve as professionals and as leaders." },
              { title: "Humility", desc: "3K GTC serves a national need. No one person is more important than another and no one can do their job without the team." },
              { title: "Commitment to Safety", desc: "The understanding that the health and personal well-being of co-workers and customers come before all else." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl shadow-soft border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
                  {item.title.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 container-px max-w-5xl mx-auto">
        <SectionHeader eyebrow="Our Objectives" title="Strategic Goals" />
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "To provide quality products and services to all clients across South Sudan",
            "To be more reliable in service delivery",
            "To be competitive in our business services",
            "To be ethically sound",
            "To value safety and security of all employees and clients",
          ].map((goal, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
              <span className="text-gray-700">{goal}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Company Structure */}
      <section className="py-20 bg-primary">
        <div className="container-px max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-white/80 font-semibold text-sm uppercase tracking-[0.2em]">Organization</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">Company Structure</h2>
            <div className="w-14 h-1 bg-white/80 rounded-full mx-auto" aria-hidden />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Board Chairman & CEO", "Managing Director", "Internal Auditor", "Projects/Operation Manager", "Sales Manager", "Chief Engineer"].map((role, i) => (
              <div key={i} className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium text-white backdrop-blur-sm transition-colors">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
