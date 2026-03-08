import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../../../context/ProjectsContext';

const isOngoing = (project) =>
    String(project.endDate).toLowerCase() === 'ongoing';

export default function ProjectsSection() {
    const { projects } = useProjects();
    const ongoingProjects = projects.filter(isOngoing);

    return (
        <section className="bg-gray-50 py-14 sm:py-20 lg:py-24">
            <div className="container-px mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                        Our Experience, Our Pride
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
                        Current Projects
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                        Delivering quality projects across South Sudan with
                        reputable clients including SSUWC, East Africa Go Green,
                        and more.
                    </p>
                    <div
                        className="mx-auto mt-5 h-1 w-16 rounded-full bg-secondary"
                        aria-hidden
                    />
                </div>

                {ongoingProjects.length > 0 && (
                    <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
                        {ongoingProjects.map((project) => (
                            <article
                                key={project.id}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg sm:flex-row"
                            >
                                <div className="relative h-48 w-full shrink-0 sm:h-auto sm:min-h-[200px] sm:w-56 lg:w-64">
                                    <img
                                        src={project.image}
                                        alt={`${project.name} project`}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col border-b border-gray-100 p-6 sm:border-r sm:border-b-0 sm:border-gray-100 sm:p-8">
                                    <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                                        {project.client}
                                    </span>
                                    <h3 className="mt-2 font-display text-xl font-bold text-gray-900 sm:text-2xl">
                                        {project.name}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex shrink-0 flex-row gap-6 border-t border-gray-100 bg-gray-50/80 p-6 sm:min-w-[200px] sm:flex-col sm:gap-4 sm:border-t-0 sm:border-l-0 sm:px-8 sm:py-8">
                                    <div>
                                        <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Value (USD)
                                        </span>
                                        <p className="mt-1 font-bold text-primary">
                                            {project.value}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Duration
                                        </span>
                                        <p className="mt-1 font-medium text-gray-700">
                                            {project.startDate} –{' '}
                                            {project.endDate}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                <div className="mt-12 text-center sm:mt-16">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white sm:px-8 sm:py-4 sm:text-base"
                    >
                        View all projects
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
