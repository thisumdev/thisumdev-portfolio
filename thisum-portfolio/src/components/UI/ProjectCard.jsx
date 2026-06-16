import { motion } from "motion/react";
import {
  ArrowUpRight,
  Image as ImageIcon,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className={`project-card group ${
        project.featured ? "project-card-featured" : ""
      }`}
    >
      <div className="project-card-grid" />

      <div className="project-image-shell">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageLabel || project.title}
            className="project-image"
            loading="lazy"
          />
        ) : (
          <div className="project-image-placeholder">
            <div className="project-image-orbit">
              <ImageIcon size={32} />
            </div>

            <div className="text-center">
              <p>{project.imageLabel}</p>
              <span>Project image placeholder</span>
            </div>
          </div>
        )}

        <div className="project-image-shine" />

        <div className="project-category-pill">
          <Sparkles size={13} />
          {project.category}
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/70">
              {project.role}
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
          </div>

          <div className="project-number">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 space-y-3">
          {project.highlights.map((item) => (
            <div key={item} className="project-highlight">
              <span />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.stack.map((tech) => (
            <span key={tech} className="project-tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/8 pt-5">
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            <Layers3 size={14} />
            Featured Work
          </span>

          <span className="project-view-cue">
            View Case Study
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
