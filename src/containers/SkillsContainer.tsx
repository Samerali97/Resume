import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillCategories } from "../data/skills";

const SkillsContainer = () => {
    return (
        <section id="skills" className="py-24">
            <Container>
                <SectionHeading
                    eyebrow="Technical Skills"
                    title="Technologies I work with"
                    description="A collection of technologies, tools, and practices I use to build and maintain modern software applications."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {skillCategories.map((category) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SkillsContainer;