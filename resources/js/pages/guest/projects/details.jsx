import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PageSecondaryHero from "@/components/PageSecondaryHero";
import SectionHeading from "@/components/SectionHeading";
import { useProjects } from "@/context/ProjectsContext";

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

function formatValue(num) {
  if (num == null) return "—";
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return String(num);
}

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { projects } = useProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <PageSecondaryHero title="Project Not Found" eyebrow="Oops" />
        <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
          <p className="text-neutral-600">
            The project you’re looking for doesn’t exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="mt-4 inline-block font-medium text-primary underline-offset-4 hover:underline"
          >
            View all projects
          </Link>
        </section>
      </>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <PageSecondaryHero
        title={project.project}
        eyebrow="Project"
      >
        <p>
          {project.client} · {project.category} · {project.status}
        </p>
      </PageSecondaryHero>

      <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {project.image && (
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-600 leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {project.impact && (
              <div>
                <h3 className="text-lg font-semibold text-neutral-800">Impact</h3>
                <p className="mt-2 text-neutral-600 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            )}

            {project.clientFeedback && (
              <blockquote className="border-l-4 border-primary pl-4 italic text-neutral-600">
                "{project.clientFeedback}"
                <footer className="mt-2 not-italic text-sm text-neutral-500">
                  — {project.client}
                </footer>
              </blockquote>
            )}

            {project.gallery?.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Gallery</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((item, i) => (
                    <figure key={i} className="overflow-hidden rounded-lg bg-neutral-100">
                      <img
                        src={item.src}
                        alt={item.caption || ""}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      {item.caption && (
                        <figcaption className="p-3 text-sm text-neutral-600">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
              >
                Start a project
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
            <div className="sticky top-24 space-y-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div>
                <SectionHeading
                  title="Project overview"
                  titleClassName="text-lg font-semibold text-neutral-800 tracking-tight"
                  accentLine={false}
                />
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-medium text-neutral-500">Client</dt>
                    <dd className="text-neutral-800">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-neutral-500">Category</dt>
                    <dd className="text-neutral-800">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-neutral-500">Status</dt>
                    <dd className="text-neutral-800">{project.status}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-neutral-500">Location</dt>
                    <dd className="text-neutral-800">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-neutral-500">Period</dt>
                    <dd className="text-neutral-800">
                      {formatDate(project.startDate)} – {formatDate(project.endDate)}
                    </dd>
                  </div>
                  {project.employmentSize && (
                    <div>
                      <dt className="font-medium text-neutral-500">Team size</dt>
                      <dd className="text-neutral-800">{project.employmentSize}</dd>
                    </div>
                  )}
                  {project.monthlyValue != null && (
                    <div>
                      <dt className="font-medium text-neutral-500">Monthly value</dt>
                      <dd className="text-neutral-800">{formatValue(project.monthlyValue)}</dd>
                    </div>
                  )}
                  {project.annualValue != null && (
                    <div>
                      <dt className="font-medium text-neutral-500">Annual value</dt>
                      <dd className="text-neutral-800">{formatValue(project.annualValue)}</dd>
                    </div>
                  )}
                </dl>
              </div>
              {project.tools?.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-neutral-800">Tools & systems</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((t, i) => (
                      <li
                        key={i}
                        className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 border border-neutral-200"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.tags?.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-neutral-800">Tags</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((t, i) => (
                      <li
                        key={i}
                        className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link
                to="/contact"
                className="inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Contact us →
              </Link>
            </div>
          </aside>
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-16 border-t border-neutral-200 pt-12">
            <SectionHeading
              title="Other projects"
              subtitle="More of our work."
              className="mb-8"
            />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="block overflow-hidden rounded-lg border border-neutral-200 bg-white transition-colors hover:border-primary/30 hover:bg-neutral-50"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                      <img
                        src={p.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium uppercase tracking-wide text-primary">
                        {p.category}
                      </span>
                      <span className="mt-1 block font-medium text-neutral-800">
                        {p.project}
                      </span>
                      <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                        {p.description}
                      </p>
                    </div>
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
