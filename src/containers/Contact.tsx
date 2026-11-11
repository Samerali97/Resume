import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Container from "../components/PageContent/Container";
import SectionHeading from "../components/Headers/SectionHeading";
import Card from "../components/UI/Card";
import Reveal from "../components/Animations/Reveal";

const contactLinks = [
  {
    label: "Email",
    value: "Samerali1997@yahoo.com",
    href: "mailto:Samerali1997@yahoo.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/samerali1997/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "View my profile",
    href: "https://github.com/Samerali97",
    icon: FaGithub,
  },
];

const ContactContainer = () => {
  return (
    <section id="contact" className="py-24">
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's connect"
            description="I'm always open to discussing software engineering opportunities, interesting projects, and ways to build great products."
          />
        </Reveal>

        <Reveal delay={0.2}>
          <Card className="border-primary/20 bg-surface/80">
            <div className="space-y-6">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={
                      link.label === "Email" ? undefined : "noopener noreferrer"
                    }
                    className="group border-border bg-background/50 hover:border-primary/50 flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 text-primary rounded-lg p-3">
                        <Icon size={20} aria-hidden="true" />
                      </div>

                      <div>
                        <p className="text-text font-semibold">{link.label}</p>
                        <p className="text-muted mt-1 text-sm">{link.value}</p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-muted group-hover:text-primary shrink-0 transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
};

export default ContactContainer;
