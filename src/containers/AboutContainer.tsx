
import { Code2, Layers3, Gauge, Users } from "lucide-react";
import Container from "../components/Container";
import Card from "../components/Card";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const focusAreas = [
    {
        icon: Code2,
        title: "Frontend Engineering",
        description:
            "Building modern web applications with React, TypeScript, and JavaScript.",
    },
    {
        icon: Layers3,
        title: "Reusable Architecture",
        description:
            "Creating scalable component systems and maintainable frontend architectures.",
    },
    {
        icon: Gauge,
        title: "Performance & Quality",
        description:
            "Improving application performance, accessibility, and overall user experience.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Working closely with cross-functional teams to deliver reliable software.",
    },
];

const AboutContainer = () => {
    return (
        <section id="about" className="py-24">
            <Container>
                <Reveal>
                    <SectionHeading
                        eyebrow="About Me"
                        title="A little about my journey"
                        description="My approach to building software and what drives me as an engineer."
                    />
                </Reveal>

                <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Professional Introduction */}
                    <Reveal delay={0.15}>
                        <div className="space-y-6 text-base leading-8 text-muted">
                            <p>
                                I'm a Senior Software Engineer specializing in
                                frontend engineering, with a strong focus on
                                building scalable, responsive, and maintainable
                                web applications.
                            </p>

                            <p>
                                Throughout my experience at JPMorgan Chase and
                                Cognizant, I've worked on developing reusable
                                UI components, improving application quality,
                                and translating complex requirements into
                                intuitive user experiences.
                            </p>

                            <p>
                                I enjoy working across the frontend development
                                lifecycle, from designing component architecture
                                to implementing polished interfaces and
                                collaborating with teams to deliver impactful
                                solutions.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        {/* Technical Focus */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            {focusAreas.map((area) => {
                                const Icon = area.icon;

                                return (
                                    <Card
                                        key={area.title}
                                        className="transition-colors duration-200 hover:border-primary/50"
                                    >
                                        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                                            <Icon size={22} aria-hidden="true" />
                                        </div>

                                        <h3 className="mb-2 font-semibold text-text">
                                            {area.title}
                                        </h3>

                                        <p className="text-sm leading-6 text-muted">
                                            {area.description}
                                        </p>
                                    </Card>
                                );
                            })}
                        </div>
                    </Reveal>

                </div>
            </Container>
        </section>
    );
};

export default AboutContainer;
