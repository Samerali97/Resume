import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Reveal from "../components/Reveal";

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
                                        rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                                        className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-background/50 p-4 transition-colors hover:border-primary/50"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="rounded-lg bg-primary/10 p-3 text-primary">
                                                <Icon size={20} aria-hidden="true" />
                                            </div>

                                            <div>
                                                <p className="font-semibold text-text">
                                                    {link.label}
                                                </p>
                                                <p className="mt-1 text-sm text-muted">
                                                    {link.value}
                                                </p>
                                            </div>
                                        </div>

                                        <ArrowUpRight
                                            size={18}
                                            className="shrink-0 text-muted transition-colors group-hover:text-primary"
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