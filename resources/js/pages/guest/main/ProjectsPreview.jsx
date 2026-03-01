import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/context/ProjectsContext";

export default function ProjectsPreview() {
  const projects = useProjects().projects;

  return (
    <section id="projects" className="border-b border-neutral-200 bg-white py-16 lg:py-20">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of our completed and ongoing work for government, NGO, and private sector clients."
          titleClassName="text-2xl font-semibold text-neutral-800 tracking-tight"
          subtitleClassName="text-neutral-600 mt-3 leading-relaxed max-w-2xl"
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-neutral-800">
                  {project.project}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-neutral-600">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
