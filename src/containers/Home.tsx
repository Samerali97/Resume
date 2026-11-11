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
    <section id="home" className="flex min-h-screen items-center py-24">
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
          <p className="text-primary mb-6 text-sm font-semibold tracking-[0.25em] uppercase">
            Senior Software Engineer
          </p>

          <h1 className="text-text text-5xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm Samer Ali.
            <span className="from-primary to-purple mt-2 block bg-gradient-to-r bg-clip-text text-transparent">
              I build modern, scalable web experiences.
            </span>
          </h1>

          <p className="text-muted mt-8 max-w-2xl text-base leading-8 sm:text-lg">
            Senior Software Engineer specializing in frontend engineering, with
            expertise in React, TypeScript, and building scalable, reusable user
            interfaces.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-primary shadow-primary/20 hover:bg-primary-hover inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors duration-200"
            >
              Contact Me
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="border-border bg-surface text-text hover:border-primary hover:bg-card inline-flex items-center justify-center rounded-lg border px-7 py-3.5 text-sm font-semibold transition-colors duration-200"
            >
              Download Resume
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </a>
          </div>

          <div className="text-muted mt-12 flex items-center gap-3 text-sm">
            <span className="bg-success h-2 w-2 rounded-full" />
            Focused on building great user experiences
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeContainer;
