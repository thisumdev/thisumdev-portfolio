import { motion } from "motion/react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Sparkles,
  ChevronUp,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/thisumdev",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thisum-fernando/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:thisumebuss@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell relative overflow-hidden">
      <div className="footer-ambient footer-ambient-one" />
      <div className="footer-ambient footer-ambient-two" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto w-[min(92rem,92%)]"
      >
        <div className="footer-main-panel">
          <div className="footer-grid-pattern" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <a href="#home" className="footer-brand">
                <span className="footer-brand-mark">
                  <Sparkles size={17} />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/70">
                    Portfolio
                  </span>
                  <span className="mt-2 block text-2xl font-semibold tracking-tight text-white">
                    Thisum Fernando
                  </span>
                </span>
              </a>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                Data Science undergraduate and full-stack developer focused on
                AI workflows, data automation, secure web systems and practical
                digital products.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:thisumebuss@gmail.com"
                  className="footer-primary-btn"
                >
                  <Mail size={17} />
                  Contact Thisum
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="/Thisum_Fernando_Resume.pdf"
                  download
                  className="footer-secondary-btn"
                >
                  <Download size={17} />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="footer-right-grid">
              <div className="footer-link-group">
                <h3>Navigation</h3>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {footerLinks.map((link) => (
                    <a key={link.href} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-link-group">
                <h3>Connect</h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="footer-social-link"
                        aria-label={link.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom relative z-10">
            <p>
              © {year} Thisum Fernando. Designed as a premium AI-tech portfolio.
            </p>

            <a href="#home" className="footer-top-link">
              Back to top
              <ChevronUp size={15} />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
