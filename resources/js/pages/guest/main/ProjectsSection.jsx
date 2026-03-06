import React from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../../../context/ProjectsContext";

export default function ProjectsSection() {
  const { projects } = useProjects();
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section className="py-20 bg-white">
      <div className="container-px max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Experience, Our Pride</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Current and Past Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering quality projects across South Sudan with reputable clients including SSUWC, East Africa Go Green, and more.
          </p>
        </div>
        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row gap-4 p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-soft transition-all"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-primary font-medium text-sm">{project.client}</p>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-4 md:text-right">
                <div>
                  <span className="text-xs text-gray-500">Value (USD)</span>
                  <p className="font-semibold text-primary">{project.value}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Duration</span>
                  <p className="font-medium text-gray-700">{project.startDate} – {project.endDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            View all projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
