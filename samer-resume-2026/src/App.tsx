
import Background from "./components/Background";
import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import SectionHeading from "./components/SectionHeading";

const App = () => {
  return (
    <>
      <Background />

      <main className="relative z-10 py-20">
        <Container>
          <SectionHeading
            eyebrow="Component Preview"
            title="Building a reusable design system"
            description="These components will provide the foundation for the rest of the portfolio."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-xl font-semibold text-text">
                Software Engineer III
              </h3>
              <p className="mt-2 text-muted">JPMorgan Chase</p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Building reusable frontend experiences and scalable UI
                solutions.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-text">
                Frontend Developer
              </h3>
              <p className="mt-2 text-muted">Cognizant</p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Developing responsive web applications with React.
              </p>
            </Card>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button type="button">Contact Me</Button>
            <Button type="button" variant="secondary">
              Download Resume
            </Button>
          </div>
        </Container>
      </main>
    </>
  );
};

export default App;
