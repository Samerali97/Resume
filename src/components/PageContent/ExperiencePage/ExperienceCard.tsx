import type { Experience } from "../../../types/experience.types";
import Card from "../../UI/Card";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className="relative">
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-text text-xl font-bold">{experience.role}</h3>

          <p className="text-primary mt-1 font-semibold">
            {experience.company}
          </p>

          <p className="text-muted mt-1 text-sm">{experience.location}</p>
        </div>

        <span className="text-muted text-sm font-medium sm:text-right">
          {experience.period}
        </span>
      </div>

      <p className="text-muted mb-6 leading-7">{experience.description}</p>

      <ul className="mb-6 space-y-3">
        {experience.highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-muted flex gap-3 text-sm leading-6"
          >
            <span
              className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
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
            className="border-border bg-background text-muted rounded-full border px-3 py-1 text-xs font-medium"
          >
            {technology}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceCard;
