import { motion } from "motion/react";
import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

const aboutCards = [
  {
    icon: BrainCircuit,
    title: "AI & Data Science",
    description:
      "Focused on intelligent workflows, data cleaning, analytics, machine learning concepts and practical AI-powered software systems.",
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "Builds modern web applications using React, Vite, Tailwind CSS, Spring Boot, REST APIs and secure authentication workflows.",
  },
  {
    icon: Workflow,
    title: "Real-World Systems",
    description:
      "Interested in practical systems that solve operational problems through automation, structured data and elegant digital interfaces.",
  },
];

const highlights = [
  {
    label: "Current Focus",
    value: "Data Science + Full-Stack Systems",
  },
  {
    label: "Degree Path",
    value: "B.Sc. (Hons) IT — Data Science",
  },
  {
    label: "Engineering Style",
    value: "Clean, secure and production-minded",
  },
  {
    label: "Design Direction",
    value: "Premium, minimal and cinematic",
  },
];

const techPills = [
  "Python",
  "React",
  "Vite",
  "Tailwind CSS",
  "Spring Boot",
  "PostgreSQL",
  "JWT",
  "OAuth2",
  "GitHub Actions",
  "AI Workflows",
];

export default function About() {
  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <div className="about-ambient about-ambient-one" />
      <div className="about-ambient about-ambient-two" />

      <div className="relative z-10 mx-auto grid w-[min(92rem,92%)] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-kicker">
            <Sparkles size={15} />
            About Thisum
          </p>

          <h2 className="section-title mt-5">
            A data science undergraduate building polished, intelligent and
            practical software.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300/86 sm:text-lg">
            Thisum Fernando is a Data Science undergraduate and full-stack
            developer focused on creating modern digital systems that combine
            clean engineering, secure web architecture, automation and
            AI-oriented thinking.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            His work sits at the intersection of data, software and real-world
            usability — from structured data-cleaning pipelines and analytics
            workflows to full-stack applications with authentication, role-based
            access control and production-minded development practices.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {techPills.map((pill, index) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.045,
                  ease: "easeOut",
                }}
                className="about-tech-pill"
              >
                {pill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="about-orbit-card"
          >
            <div className="about-orbit-grid" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">
                    Profile Signal
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Student-professional profile with an engineering mindset.
                  </h3>
                </div>

                <div className="about-core-icon">
                  <Zap size={24} />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.12 + index * 0.06,
                      ease: "easeOut",
                    }}
                    className="about-highlight-card"
                  >
                    <p>{item.label}</p>
                    <h4>{item.value}</h4>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/42 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <ShieldCheck size={17} className="text-cyan-300" />
                  Design + Engineering Philosophy
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Build interfaces that feel premium, systems that remain
                  maintainable, and workflows that convert raw information into
                  useful decisions.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-5 grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="about-mini-card"
                >
                  <div className="about-mini-icon">
                    <Icon size={20} />
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
