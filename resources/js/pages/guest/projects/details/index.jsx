import { useParams, Link } from "react-router-dom";
import PageSecondaryHero from "../../../../components/PageSecondaryHero";
import { useProjects } from "../../../../context/ProjectsContext";

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const { projects } = useProjects();
  const project = projects.find((p) => slugify(p.name) === slug);

  if (!project) {
    return (
      <div className="bg-white">
        <PageSecondaryHero title="Project Not Found" eyebrow="404" />
        <section className="py-16 container-px max-w-xl mx-auto text-center">
          <p className="text-gray-600 mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/projects" className="text-primary font-semibold hover:underline">
            ← Back to Projects
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <PageSecondaryHero
        title={project.name}
        eyebrow="Project"
      >
        <p>{project.description}</p>
      </PageSecondaryHero>
      <section className="py-16 container-px max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-sm font-medium text-gray-500">Client</span>
          <p className="text-lg font-semibold text-primary">{project.client}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <span className="text-sm font-medium text-gray-500">Start Date</span>
            <p className="text-gray-900">{project.startDate}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">End Date</span>
            <p className="text-gray-900">{project.endDate}</p>
          </div>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-500">Project Value (USD)</span>
          <p className="text-xl font-bold text-primary">{project.value}</p>
        </div>
        <Link to="/quote" className="inline-block mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          Request a Quote
        </Link>
      </section>
    </div>
  );
}
