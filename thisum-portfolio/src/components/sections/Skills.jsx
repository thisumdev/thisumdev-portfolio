import { motion } from "motion/react";
import { Sparkles, Layers3, ArrowUpRight } from "lucide-react";
import { skillGroups } from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="section-shell relative overflow-hidden">
      <div className="skills-ambient skills-ambient-one" />
      <div className="skills-ambient skills-ambient-two" />

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
            Technical Skill Matrix
          </p>

          <h2 className="section-title mt-5">
            A balanced stack across data science, secure web systems and
            engineering workflows.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Thisum’s technical profile combines data-focused problem solving
            with full-stack development, database handling, authentication and
            modern collaborative engineering practice.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 26, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className="skill-card group"
              >
                <div className="skill-card-grid" />

                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div className="skill-icon-shell">
                    <Icon size={23} />
                  </div>

                  <div className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="relative z-10 mt-7">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>

                <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/8 pt-5">
                  <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                    <Layers3 size={14} />
                    Capability Layer
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-cyan-300/70 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="skills-command-panel"
        >
          <div className="skills-command-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300/70">
              thisum.skills.compile()
            </p>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Built for practical execution — not just tool familiarity.
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
              The skill set is shaped around real application development:
              cleaning data, building interfaces, securing routes, managing
              databases and collaborating through proper development workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
