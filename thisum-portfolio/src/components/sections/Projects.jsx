import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles, FolderKanban } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import ProjectGallery from "../ui/ProjectGallery";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-shell relative overflow-hidden">
      <div className="projects-ambient projects-ambient-one" />
      <div className="projects-ambient projects-ambient-two" />

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
            Selected Projects
          </p>

          <h2 className="section-title mt-5">
            Practical systems with clean engineering, secure workflows and
            intelligent automation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A curated set of full-stack, data science and AI-oriented projects
            showing Thisum’s ability to design, build and contribute to
            meaningful real-world software systems.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpenGallery={setSelectedProject}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="projects-subheader"
        >
          <div>
            <p className="section-kicker">
              <FolderKanban size={15} />
              More Project Work
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Additional collaborative builds and AI-focused experiments.
            </h3>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            These projects show experience in teamwork, client-oriented
            development, NLP-based workflows and practical application design.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={featuredProjects.length + index}
              onOpenGallery={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectGallery
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
