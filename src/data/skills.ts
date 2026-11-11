import type { SkillCategory } from "../types/skill.types";

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        description: "Building modern, responsive, and maintainable user interfaces.",
        skills: [
            "React",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
        ],
    },
    {
        title: "Testing & Quality",
        description: "Writing reliable code and maintaining application quality.",
        skills: ["Jest", "React Testing Library", "Unit Testing"],
    },
    {
        title: "Tools & Workflow",
        description: "Tools and practices used throughout the software development lifecycle.",
        skills: ["Git", "GitHub", "Jenkins", "Jira", "Vite", "npm", "Agile"],
    },
    {
        title: "Backend & APIs",
        description: "Expanding into backend development and full-stack engineering.",
        skills: ["Java", "Spring Boot", "REST APIs"],
    },
];