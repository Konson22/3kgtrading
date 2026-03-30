import {
    ArrowRight,
    CheckCircle2,
    FileOutput,
    ListChecks,
    Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function ModuleOverview({
    title,
    description,
    keyFeatures = [],
    outputs = [],
    sections = [],
    optional = false,
}) {
    return (
        <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                    {optional ? (
                        <Badge
                            variant="secondary"
                            className="bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200"
                        >
                            Optional module
                        </Badge>
                    ) : null}
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                        <Sparkles className="size-3.5" aria-hidden />
                        Specification
                    </span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl dark:text-neutral-100">
                    {title}
                </h2>
                <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
                    {description}
                </p>
            </div>

            {sections.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                    {sections.map((section) => (
                        <Card
                            key={section.name}
                            className="border-neutral-200/80 bg-white/80 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/40"
                        >
                            <CardHeader className="pb-2">
                                <CardTitle className="font-display text-base">
                                    {section.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                                    {section.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-2"
                                        >
                                            <CheckCircle2
                                                className="mt-0.5 size-4 shrink-0 text-secondary"
                                                aria-hidden
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : null}

            {keyFeatures.length > 0 ? (
                <Card className="border-neutral-200/80 bg-white/80 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/40">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <ListChecks className="size-5 text-primary" />
                            <CardTitle className="font-display text-lg">
                                Key features
                            </CardTitle>
                        </div>
                        <CardDescription>
                            Planned capabilities for this module in your POS
                            suite.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {keyFeatures.map((item, i) => (
                                <li
                                    key={i}
                                    className={cn(
                                        'flex gap-3 rounded-lg border border-neutral-100 bg-neutral-50/80 px-3 py-2.5 text-sm dark:border-neutral-800 dark:bg-neutral-900/50',
                                    )}
                                >
                                    <CheckCircle2
                                        className="mt-0.5 size-4 shrink-0 text-secondary"
                                        aria-hidden
                                    />
                                    <span className="text-neutral-800 dark:text-neutral-200">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ) : null}

            {outputs.length > 0 ? (
                <Card className="border-neutral-200/80 bg-gradient-to-br from-secondary/[0.08] to-transparent dark:from-secondary/10">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <FileOutput className="size-5 text-secondary" />
                            <CardTitle className="font-display text-lg">
                                Outputs
                            </CardTitle>
                        </div>
                        <CardDescription>
                            Reports and records this module produces.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-wrap gap-2">
                            {outputs.map((item) => (
                                <li
                                    key={item}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-secondary/20 bg-white/90 px-3 py-1 text-sm font-medium text-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-200"
                                >
                                    <ArrowRight
                                        className="size-3.5 text-secondary"
                                        aria-hidden
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ) : null}

            <p className="rounded-xl border border-dashed border-neutral-200 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-400">
                Implementation Roadmap: backend routes, forms, and live data will
                connect to these screens in upcoming iterations. Use this view
                as the agreed functional scope from your module documentation.
            </p>
        </div>
    );
}
