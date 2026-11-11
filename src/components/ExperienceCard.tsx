import type { Experience } from "../types/experience.types";
import Card from "./Card";

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <Card className="relative">
            <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                    <h3 className="text-xl font-bold text-text">
                        {experience.role}
                    </h3>

                    <p className="mt-1 font-semibold text-primary">
                        {experience.company}
                    </p>

                    <p className="mt-1 text-sm text-muted">
                        {experience.location}
                    </p>
                </div>

                <span className="text-sm font-medium text-muted sm:text-right">
                    {experience.period}
                </span>
            </div>

            <p className="mb-6 leading-7 text-muted">
                {experience.description}
            </p>

            <ul className="mb-6 space-y-3">
                {experience.highlights.map((highlight) => (
                    <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-muted"
                    >
                        <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                        />
                        {highlight}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </Card>
    );
};

export default ExperienceCard;