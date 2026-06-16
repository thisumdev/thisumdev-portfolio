import { motion } from "motion/react";
import {
  ArrowUpRight,
  Download,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "thisumebuss@gmail.com",
    href: "mailto:thisumebuss@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/thisumdev",
    href: "https://github.com/thisumdev",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thisum-fernando",
    href: "https://www.linkedin.com/in/thisum-fernando/",
    icon: FaLinkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell relative overflow-hidden">
      <div className="contact-ambient contact-ambient-one" />
      <div className="contact-ambient contact-ambient-two" />

      <div className="relative z-10 mx-auto w-[min(92rem,92%)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker justify-center">
            <Sparkles size={15} />
            Contact
          </p>

          <h2 className="section-title mt-5">
            Let’s connect and build something intelligent, useful and elegant.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Open to collaboration, internship-related opportunities, technical
            projects and software systems involving data science, AI workflows
            and full-stack development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="contact-hero-panel"
        >
          <div className="contact-panel-grid" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="contact-status-badge">
                <span />
                Available for Collaboration
              </div>

              <h3 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to discuss data-driven systems, AI projects and modern web
                applications.
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Whether it is a practical full-stack application, an analytics
                workflow, an AI-assisted system or a collaborative technical
                project, Thisum is ready to contribute with a clean,
                security-aware and execution-focused approach.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:thisumebuss@gmail.com"
                  className="contact-primary-btn"
                >
                  <Send size={17} />
                  Send Email
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="/Thisum_Fernando_Resume.pdf"
                  download
                  className="contact-secondary-btn"
                >
                  <Download size={17} />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="contact-signal-card">
              <div className="contact-signal-core">
                <MessageCircle size={30} />
              </div>

              <div className="contact-ring contact-ring-one" />
              <div className="contact-ring contact-ring-two" />

              <div className="contact-floating-note contact-floating-note-one">
                <span>AI</span>
                Workflows
              </div>

              <div className="contact-floating-note contact-floating-note-two">
                <span>DS</span>
                Analytics
              </div>

              <div className="contact-floating-note contact-floating-note-three">
                <span>FS</span>
                Full-Stack
              </div>

              <div className="contact-terminal">
                <div className="contact-terminal-top">
                  <span />
                  <span />
                  <span />
                </div>

                <p>
                  <span>thisum.contact</span>
                  <br />
                  initiating collaboration channel...
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="contact-link-card group"
              >
                <div className="contact-link-icon">
                  <Icon size={22} />
                </div>

                <div className="min-w-0">
                  <p>{link.label}</p>
                  <h4>{link.value}</h4>
                </div>

                <ArrowUpRight size={17} className="contact-link-arrow" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
