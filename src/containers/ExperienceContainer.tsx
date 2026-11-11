import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import { experience } from "../data/experience";

const ExperienceContainer = () => {
    return (
        <section id="experience" className="py-24">
            <Container>
                <SectionHeading
                    eyebrow="Career"
                    title="Professional Experience"
                    description="My professional journey building frontend applications and delivering scalable software solutions."
                />

                <div className="space-y-6">
                    {experience.map((item) => (
                        <ExperienceCard
                            key={`${item.company}-${item.role}`}
                            experience={item}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ExperienceContainer;