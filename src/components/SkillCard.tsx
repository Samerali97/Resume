import type { SkillCategory } from "../types/skill.types";
import Card from "./Card";

interface SkillCardProps {
    category: SkillCategory;
}

const SkillCard = ({ category }: SkillCardProps) => {
    return (
        <Card className="h-full transition-colors duration-200 hover:border-primary/50">
            <h3 className="text-lg font-semibold text-text">
                {category.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted">
                {category.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-muted transition-colors hover:border-primary/50 hover:text-text"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </Card>
    );
};

export default SkillCard;