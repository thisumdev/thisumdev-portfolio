import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Download, Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex w-[min(92rem,92%)] items-center justify-between">
        <motion.a
          href="#home"
          onClick={closeMenu}
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className={`nav-brand group ${scrolled ? "nav-brand-compact" : ""}`}
          aria-label="Go to home section"
        >
          <span className="nav-brand-mark">
            <Sparkles size={15} />
          </span>

          <span className="leading-none">
            <span className="block text-[0.72rem] font-medium uppercase tracking-[0.34em] text-slate-400">
              Portfolio
            </span>
            <span className="mt-1 block text-sm font-semibold tracking-wide text-white">
              Thisum Fernando
            </span>
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className={`hidden items-center gap-1 rounded-full border px-2 py-2 backdrop-blur-2xl lg:flex ${
            scrolled
              ? "border-white/10 bg-slate-950/62 shadow-[0_22px_70px_rgba(0,0,0,0.38)]"
              : "border-white/8 bg-white/[0.035]"
          }`}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-pill ${isActive ? "nav-pill-active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14, ease: "easeOut" }}
          className="hidden items-center gap-3 lg:flex"
        >
          <a
            href="/Thisum_Fernando_Resume.pdf"
            download
            className="nav-resume-btn"
          >
            <Download size={15} />
            Resume
          </a>

          <a href="#contact" className="nav-contact-btn">
            Let’s Talk
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="mobile-menu-button lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile navigation overlay"
              className="fixed inset-0 z-[-1] bg-slate-950/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="mobile-nav-panel lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">
                    Navigation
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-white">
                    Explore Portfolio
                  </h2>
                </div>

                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  AI-Tech
                </span>
              </div>

              <div className="grid gap-2">
                {navLinks.map((link, index) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.035,
                        ease: "easeOut",
                      }}
                      className={`mobile-nav-link ${
                        isActive ? "mobile-nav-link-active" : ""
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={15} />
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="/Thisum_Fernando_Resume.pdf"
                  download
                  onClick={closeMenu}
                  className="mobile-resume-btn"
                >
                  <Download size={16} />
                  Resume
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mobile-contact-btn"
                >
                  Contact
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
