import type { SkillCategory } from "../../../types/skill.types";
import Card from "../../UI/Card";

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard = ({ category }: SkillCardProps) => {
  return (
    <Card className="hover:border-primary/50 h-full transition-colors duration-200">
      <h3 className="text-text text-lg font-semibold">{category.title}</h3>

      <p className="text-muted mt-2 text-sm leading-6">
        {category.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="border-border bg-background text-muted hover:border-primary/50 hover:text-text rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;
