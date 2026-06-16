import { motion } from "motion/react";
import {
  Award,
  BookOpenCheck,
  CalendarDays,
  GraduationCap,
  MapPin,
  Medal,
  Sparkles,
  Star,
} from "lucide-react";
import { certifications, education } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="section-shell relative overflow-hidden">
      <div className="education-ambient education-ambient-one" />
      <div className="education-ambient education-ambient-two" />

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
            Education
          </p>

          <h2 className="section-title mt-5">
            Academic foundation shaped around data science, software systems and
            analytical problem solving.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A focused academic path combining information technology, data
            science specialization, mathematics, science and professional
            communication credentials.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="education-card group"
            >
              <div className="education-card-grid" />

              <div className="relative z-10 flex items-start justify-between gap-5">
                <div className="education-icon-orb">
                  <GraduationCap size={27} />
                </div>

                <div className="education-metric">
                  <p>{item.metric}</p>
                  <h4>{item.metricValue}</h4>
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <div className="flex flex-wrap gap-3">
                  <span className="education-status-pill">
                    <Star size={13} />
                    {item.status}
                  </span>

                  <span className="education-period-pill">
                    <CalendarDays size={14} />
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-lg font-medium text-cyan-200/85">
                  {item.specialization}
                </p>

                <div className="mt-5 space-y-3">
                  <p className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                    <BookOpenCheck
                      size={16}
                      className="mt-1 flex-none text-cyan-300/75"
                    />
                    {item.institution}
                  </p>

                  <p className="flex items-center gap-3 text-sm text-slate-400">
                    <MapPin size={16} className="text-cyan-300/75" />
                    {item.location}
                  </p>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {item.subjects.map((subject) => (
                    <span key={subject} className="education-subject-pill">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="certification-panel"
        >
          <div className="certification-panel-grid" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="section-kicker">
                <Award size={15} />
                Certifications
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Communication credentials that support a global technical
                profile.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                English-language certifications strengthen Thisum’s ability to
                work across documentation, presentations, technical discussion
                and collaborative development environments.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((certificate, index) => (
                <motion.div
                  key={certificate.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.16 + index * 0.06,
                    ease: "easeOut",
                  }}
                  className="certification-card"
                >
                  <div className="certification-icon">
                    <Medal size={18} />
                  </div>

                  <div>
                    <h4>{certificate.title}</h4>
                    <p>{certificate.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
