
import { motion, useReducedMotion } from "motion/react";
import Container from "../components/PageContent/Container";

const HomeContainer = () => {
    const shouldReduceMotion = useReducedMotion();

    const entranceAnimation = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 24,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section
            id="home"
            className="flex min-h-screen items-center py-24"
        >
            <Container>
                <motion.div
                    variants={entranceAnimation}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: shouldReduceMotion ? 0 : 0.7,
                        ease: "easeOut",
                    }}
                    className="max-w-3xl"
                >
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        Senior Software Engineer
                    </p>

                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-text sm:text-6xl lg:text-7xl">
                        Hi, I'm Samer Ali.
                        <span className="mt-2 block bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                            I build modern, scalable web experiences.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                        Senior Software Engineer specializing in frontend
                        engineering, with expertise in React, TypeScript,
                        and building scalable, reusable user interfaces.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors duration-200 hover:bg-primary-hover"
                        >
                            Contact Me
                            <span aria-hidden="true" className="ml-2">
                                →
                            </span>
                        </a>

                        <a
                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                            download
                            className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text transition-colors duration-200 hover:border-primary hover:bg-card"
                        >
                            Download Resume
                            <span aria-hidden="true" className="ml-2">
                                ↓
                            </span>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-3 text-sm text-muted">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        Focused on building great user experiences
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default HomeContainer;
