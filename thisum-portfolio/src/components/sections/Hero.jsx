import { motion } from "motion/react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Sparkles,
  Code2,
  BrainCircuit,
  Database,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const heroBadges = [
  "Data Science Undergraduate",
  "Full-Stack Developer",
  "AI & ML Enthusiast",
];

const floatingCards = [
  {
    icon: BrainCircuit,
    title: "AI Workflows",
    text: "YOLO-based detection, ML pipelines and applied intelligence.",
  },
  {
    icon: Code2,
    title: "Full-Stack Systems",
    text: "React, Spring Boot, authentication and secure platforms.",
  },
  {
    icon: Database,
    title: "Data Automation",
    text: "Cleaning, imputation, analytics and real-world datasets.",
  },
];

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="hero-grid-glow" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/7 px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.12)] backdrop-blur-xl"
          >
            <Sparkles size={15} />
            Available for Collaboration
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.46em] text-slate-400"
          >
            Data Science • Full Stack • AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl text-5xl font-black tracking-[-0.075em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Thisum
            <span className="block text-gradient">Fernando</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.8, ease: "easeOut" }}
            className="mt-7 max-w-4xl text-2xl font-bold leading-tight tracking-[-0.045em] text-slate-100 sm:text-3xl md:text-5xl"
          >
            Building intelligent, elegant and practical digital systems.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.8, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Data Science undergraduate and full-stack developer focused on AI
            workflows, data automation, secure web systems and real-world
            software applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {heroBadges.map((badge) => (
              <span key={badge} className="hero-badge">
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.8, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="glow-button">
              View Projects
              <ArrowUpRight size={18} className="ml-2" />
            </a>

            <a href="/Thisum_Fernando_Resume.pdf" className="ghost-button">
              Download Resume
              <Download size={18} className="ml-2" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.8, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://github.com/thisumdev"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub profile"
            >
              <FaGithub size={19} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/thisum-fernando/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={19} />
              LinkedIn
            </a>

            <a
              href="mailto:thisumebuss@gmail.com"
              className="social-link"
              aria-label="Email Thisum Fernando"
            >
              <Mail size={19} />
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.9, ease: "easeOut" }}
          className="relative z-10 hidden lg:block"
        >
          <div className="hero-visual luxury-border">
            <div className="hero-ring hero-ring-one" />
            <div className="hero-ring hero-ring-two" />

            <div className="hero-core">
              <div className="hero-core-inner">
                <p className="text-xs font-bold uppercase tracking-[0.34em] text-cyan-200">
                  Portfolio
                </p>
                <h3 className="mt-4 text-5xl font-black tracking-[-0.08em] text-white">
                  AI
                  <span className="text-gradient"> + Code</span>
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  A focused portfolio around intelligent applications, clean
                  engineering and data-driven software.
                </p>
              </div>
            </div>

            {floatingCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    delay: 0.7 + index * 0.15,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className={`hero-floating-card hero-floating-card-${index + 1}`}
                >
                  <div className="hero-floating-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              );
            })}

            <div className="hero-terminal">
              <div className="mb-4 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>

              <p>
                <span className="text-cyan-300">thisum@portfolio</span>
                <span className="text-slate-500">:~$</span> build --future
              </p>
              <p className="mt-2 text-slate-400">
                Initializing data science, AI and full-stack systems...
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="scroll-cue"
        aria-label="Scroll to about section"
      >
        <span />
      </a>
    </section>
  );
}

export default Hero;
