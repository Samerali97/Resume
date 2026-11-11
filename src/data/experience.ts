import type { Experience } from "../types/experience.types";

export const experience: Experience[] = [
    {
        company: "JPMorgan Chase",
        role: "Software Engineer III",
        location: "Tampa, FL",
        period: "September 2022 – Present",
        description:
            "Developing and maintaining frontend solutions for enterprise applications, with an emphasis on reusable architecture, code quality, and scalable user experiences.",
        highlights: [
            "Developed and maintained reusable UI components and shared frontend functionality, with a focus on consistency and maintainability.",
            "Established comprehensive Jest test coverage for a reusable UI library, achieving 98% coverage.",
            "Collaborated with product owners and cross-functional teams to translate business requirements into reliable frontend solutions.",
            "Supported and guided fellow developers through technical discussions, code reviews, and implementation guidance.",
            "Contributed to Agile development workflows and CI/CD processes using tools such as Jenkins and Jira.",
        ],
        technologies: ["React", "JavaScript", "TypeScript", "Jest", "Jenkins"],
    },
    {
        company: "Cognizant",
        role: "Frontend Developer",
        location: "United States",
        period: "June 2021 – September 2022",
        description:
            "Developed responsive web applications using React, translating design requirements into functional and user-friendly interfaces.",
        highlights: [
            "Built responsive frontend features using React, JavaScript, HTML, and CSS.",
            "Translated UI designs and business requirements into production-ready components.",
            "Implemented mobile-first layouts to provide consistent experiences across screen sizes.",
            "Collaborated with team members throughout the development lifecycle to deliver frontend enhancements.",
        ],
        technologies: ["React", "JavaScript", "HTML", "CSS"],
    },
];