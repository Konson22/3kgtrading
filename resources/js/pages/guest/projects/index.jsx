import React from "react";
import { Link } from "react-router-dom";
import { useProjects } from "@/context/ProjectsContext";
import PageSecondaryHero from "@/components/PageSecondaryHero";

export default function ProjectsPage() {
  const { projects } = useProjects();

  return (
    <>
      <PageSecondaryHero
        title="Our Projects"
        eyebrow="Portfolio"
      >
        <p>
          A selection of our completed and ongoing work for government, NGO, and private sector
          clients across South Sudan.
        </p>
      </PageSecondaryHero>
      <section className="container-px mx-auto max-w-6xl py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-colors hover:border-primary/30 hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {project.category}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-neutral-800">
                  {project.project}
                </h2>
                <p className="mt-2 text-sm text-neutral-600 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
