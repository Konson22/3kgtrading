import PageSecondaryHero from '../../../components/PageSecondaryHero';
import { useProjects } from '../../../context/ProjectsContext';

export default function ProjectsPage() {
    const { projects } = useProjects();

    return (
        <div className="bg-white">
            <PageSecondaryHero
                title="Our Projects"
                eyebrow="Our Experience, Our Pride"
                image="/images/city.jpg"
                darkGradientOverlay
            >
                <p>
                    Current and past projects delivered across South Sudan with
                    reputable clients.
                </p>
            </PageSecondaryHero>

            {/* Card layout: mobile & tablet */}
            <section className="container-px mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:hidden">
                <div className="space-y-4 sm:space-y-5">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <span className="text-right text-sm font-semibold text-primary sm:text-base">
                                    {project.value} USD
                                </span>
                            </div>
                            <h3 className="mt-2 font-display text-base font-bold text-gray-900 sm:text-lg">
                                {project.name}
                            </h3>
                            <p className="mt-1 text-sm text-primary sm:text-base">
                                {project.client}
                            </p>
                            <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 sm:gap-x-6">
                                <div>
                                    <span className="sr-only">Start</span>
                                    <span>{project.startDate}</span>
                                </div>
                                <div>
                                    <span className="sr-only">End</span>
                                    <span>{project.endDate}</span>
                                </div>
                            </dl>
                        </article>
                    ))}
                </div>
            </section>

            {/* Table layout: desktop */}
            <section className="container-px mx-auto hidden max-w-6xl px-4 py-16 sm:px-6 lg:block">
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-left font-semibold">
                                    Project Name
                                </th>
                                <th className="p-4 text-left font-semibold">
                                    Client
                                </th>
                                <th className="p-4 text-left font-semibold">
                                    Start Date
                                </th>
                                <th className="p-4 text-left font-semibold">
                                    End Date
                                </th>
                                <th className="p-4 text-right font-semibold">
                                    Project Value (USD)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => (
                                <tr
                                    key={project.id}
                                    className="border-b border-gray-200 transition-colors last:border-b-0 hover:bg-gray-50"
                                >
                                    <td className="p-4 font-medium text-gray-900">
                                        {project.name}
                                    </td>
                                    <td className="p-4 font-medium text-primary">
                                        {project.client}
                                    </td>
                                    <td className="p-4 text-gray-600">
                                        {project.startDate}
                                    </td>
                                    <td className="p-4 text-gray-600">
                                        {project.endDate}
                                    </td>
                                    <td className="p-4 text-right font-semibold text-primary">
                                        {project.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
