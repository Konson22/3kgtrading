import { Link } from 'react-router-dom';
import { ArrowRight, CalendarRange, CircleDollarSign } from 'lucide-react';
import { useProjects } from '@/context/ProjectsContext';

const isOngoing = (project) => String(project.endDate).toLowerCase() === 'ongoing';

function slugify(str) {
    return str.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s-]+/g, '-').trim();
}

function formatValue(value) {
    return `$${value} USD`;
}

export default function ProjectsSection() {
    const { projects } = useProjects();
    const displayedProjects = [
        ...projects.filter(isOngoing),
        ...projects.filter((project) => !isOngoing(project)),
    ].slice(0, 3);

    return (
        <section className="relative overflow-hidden bg-gradient-light py-12 sm:py-20 lg:py-24">
            <div
                className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl"
                aria-hidden
            />

            <div className="container-px relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:tracking-[0.2em] sm:text-sm">
                        Our Experience, Our Pride
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                        Current Projects
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base md:text-lg">
                        Delivering quality projects across South Sudan with reputable clients including SSUWC,
                        East Africa Go Green, and more.
                    </p>
                    <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-secondary sm:mt-5 sm:w-16" aria-hidden />
                </div>

                {displayedProjects.length > 0 ? (
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                        {displayedProjects.map((project, index) => {
                            const projectSlug = slugify(project.name);
                            const projectUrl = `/projects/${projectSlug}`;

                            return (
                                <article
                                    key={project.id}
                                    className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-medium sm:rounded-2xl"
                                >
                                    <div
                                        className="pointer-events-none absolute -right-4 -top-4 z-10 h-16 w-16 bg-primary/5 transition duration-300 group-hover:bg-primary/10 sm:-right-6 sm:-top-6 sm:h-20 sm:w-20"
                                        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                                        aria-hidden
                                    />

                                    <Link
                                        to={projectUrl}
                                        className="flex flex-1 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[5/3]">
                                            <img
                                                src={project.image}
                                                alt={`${project.name} project`}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                            {isOngoing(project) && (
                                                <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                                                    Ongoing
                                                </span>
                                            )}
                                            <span
                                                className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center bg-primary/90 text-[10px] font-bold text-white shadow-sm sm:right-4 sm:top-4 sm:h-8 sm:w-8 sm:text-xs"
                                                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                                                aria-hidden
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                                            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary sm:text-xs">
                                                {project.client}
                                            </span>
                                            <h3 className="mt-2 font-display text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary sm:text-lg md:text-xl">
                                                {project.name}
                                            </h3>
                                            <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600 sm:line-clamp-3 sm:text-base">
                                                {project.description}
                                            </p>

                                            <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-600 sm:text-sm">
                                                <div className="flex items-center gap-2">
                                                    <CalendarRange className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                                                    <span>
                                                        {project.startDate} – {project.endDate}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 font-semibold text-primary">
                                                    <CircleDollarSign className="h-4 w-4 shrink-0" aria-hidden />
                                                    <span>{formatValue(project.value)}</span>
                                                </div>
                                            </div>

                                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                                                View project details
                                                <ArrowRight className="h-4 w-4" aria-hidden />
                                            </span>
                                        </div>
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <p className="mt-10 text-center text-sm text-gray-600 sm:text-base">
                        No ongoing projects to display at the moment.
                    </p>
                )}

                <div className="mt-8 text-center sm:mt-14">
                    <Link
                        to="/projects"
                        className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary/90 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
                    >
                        View all projects
                        <ArrowRight className="h-5 w-5" aria-hidden />
                    </Link>
                </div>
            </div>
        </section>
    );
}
