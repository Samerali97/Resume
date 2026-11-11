import Container from "../components/PageContent/Container";
import SectionHeading from "../components/Headers/SectionHeading";
import SkillCard from "../components/PageContent/SkillPage/SkillCard";
import { skillCategories } from "../data/skills";
import Reveal from "../components/Animations/Reveal";

const SkillsContainer = () => {
    return (
        <section id="skills" className="py-24">
            <Container>
                <Reveal>
                    <SectionHeading
                        eyebrow="Technical Skills"
                        title="Technologies I work with"
                        description="A collection of technologies, tools, and practices I use to build and maintain modern software applications."
                    />
                </Reveal>

                <div className="grid gap-6 md:grid-cols-2">
                    {skillCategories.map((category, index) => (
                        <Reveal key={category.title} delay={index * 0.12}>
                            <SkillCard
                                category={category}
                            />
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SkillsContainer;