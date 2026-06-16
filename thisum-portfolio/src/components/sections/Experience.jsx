import { motion } from "motion/react";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Database,
  MapPin,
  Sparkles,
} from "lucide-react";
import { experiences } from "../../data/experience";

const impactIcons = [BrainCircuit, Database, Cpu, CheckCircle2];

export default function Experience() {
  return (
    <section id="experience" className="section-shell relative overflow-hidden">
      <div className="experience-ambient experience-ambient-one" />
      <div className="experience-ambient experience-ambient-two" />

      <div className="relative z-10 mx-auto w-[min(92rem,92%)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="section-kicker">
              <Sparkles size={15} />
              Experience
            </p>

            <h2 className="section-title mt-5">
              Applied AI, data automation and analytics in a real research
              environment.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:justify-self-end">
            Thisum’s professional experience connects academic data science with
            practical engineering work — supporting AI-based safety systems,
            dataset preparation, automation pipelines and regional weather-data
            analytics.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.organization}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="experience-main-card group"
            >
              <div className="experience-grid" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="experience-type-pill">
                    {experience.type}
                  </span>

                  <span className="experience-period-pill">
                    <CalendarDays size={14} />
                    {experience.period}
                  </span>
                </div>

                <div className="mt-8 flex items-start gap-5">
                  <div className="experience-logo-orb">
                    <Building2 size={26} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/70">
                      {experience.role}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {experience.organization}
                    </h3>

                    <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                      <MapPin size={15} className="text-cyan-300/70" />
                      {experience.location}
                    </p>
                  </div>
                </div>

                <p className="mt-7 text-base leading-8 text-slate-400">
                  {experience.summary}
                </p>

                <div className="mt-8 space-y-4">
                  {experience.points.map((point, pointIndex) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15 + pointIndex * 0.06,
                        ease: "easeOut",
                      }}
                      className="experience-point"
                    >
                      <span>
                        <CheckCircle2 size={16} />
                      </span>

                      <p>{point}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="experience-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}

          <div className="grid gap-7">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              className="experience-impact-panel"
            >
              <div className="experience-impact-header">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                    Experience Signal
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    Practical contribution areas
                  </h3>
                </div>

                <div className="experience-pulse-core">
                  <BrainCircuit size={24} />
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {experiences[0].impact.map((item, index) => {
                  const Icon = impactIcons[index] || CheckCircle2;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.06,
                        ease: "easeOut",
                      }}
                      className="experience-impact-card"
                    >
                      <div className="experience-impact-icon">
                        <Icon size={18} />
                      </div>

                      <p>{item.label}</p>
                      <h4>{item.value}</h4>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" }}
              className="experience-console"
            >
              <div className="experience-console-top">
                <div className="experience-console-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <p>experience.pipeline</p>
              </div>

              <div className="mt-6 space-y-4 font-mono text-sm">
                <p>
                  <span className="text-cyan-300">input</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-slate-300">
                    raw datasets + AI video workflows
                  </span>
                </p>

                <p>
                  <span className="text-violet-300">process</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-slate-300">
                    clean, validate, infer, analyze
                  </span>
                </p>

                <p>
                  <span className="text-blue-300">output</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-slate-300">
                    useful technical insight + automation
                  </span>
                </p>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Real-World AI Exposure
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-cyan-300/75 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
