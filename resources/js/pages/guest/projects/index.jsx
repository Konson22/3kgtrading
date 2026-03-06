import React from "react";
import PageSecondaryHero from "../../../components/PageSecondaryHero";
import { useProjects } from "../../../context/ProjectsContext";

export default function ProjectsPage() {
  const { projects } = useProjects();
  return (
    <div className="bg-white">
      <PageSecondaryHero
        title="Our Projects"
        eyebrow="Our Experience, Our Pride"
        image="/images/city.jpg"
      >
        <p>Current and past projects delivered across South Sudan with reputable clients.</p>
      </PageSecondaryHero>
      <section className="py-16 container-px max-w-6xl mx-auto overflow-x-auto">
        <div className="min-w-[640px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left p-4 font-semibold">S/N</th>
                <th className="text-left p-4 font-semibold">Project Name</th>
                <th className="text-left p-4 font-semibold">Client</th>
                <th className="text-left p-4 font-semibold">Start Date</th>
                <th className="text-left p-4 font-semibold">End Date</th>
                <th className="text-right p-4 font-semibold">Project Value (USD)</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={project.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 text-gray-600">{index + 1}</td>
                  <td className="p-4 font-medium text-gray-900">{project.name}</td>
                  <td className="p-4 text-primary font-medium">{project.client}</td>
                  <td className="p-4 text-gray-600">{project.startDate}</td>
                  <td className="p-4 text-gray-600">{project.endDate}</td>
                  <td className="p-4 text-right font-semibold text-primary">{project.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
