import Container from "../components/PageContent/Container";
import SectionHeading from "../components/Headers/SectionHeading";
import ExperienceCard from "../components/PageContent/ExperiencePage/ExperienceCard";
import { experience } from "../data/experience";
import Reveal from "../components/Animations/Reveal";

const ExperienceContainer = () => {
  return (
    <section id="experience" className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Career"
            title="Professional Experience"
            description="My professional journey building frontend applications and delivering scalable software solutions."
          />
        </Reveal>

        <div className="space-y-6">
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`} delay={0.15}>
              <ExperienceCard experience={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExperienceContainer;
