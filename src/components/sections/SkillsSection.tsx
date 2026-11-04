"use client"

import { motion } from "framer-motion"

const skillRows = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Flutter", "Dart", "HTML & CSS"],
    accent: "var(--skill-crimson)",
    direction: 1,
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "JWT"],
    accent: "var(--skill-teal)",
    direction: -1,
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "Docker", "Linux", "Figma", "CI/CD", "Agile", "UI/UX Design", "VS Code", "Vercel"],
    accent: "var(--skill-violet)",
    direction: 1,
  },
]

function SkillScrollRow({ row }: { row: (typeof skillRows)[0] }) {
  const repeated = [...row.skills, ...row.skills, ...row.skills, ...row.skills]
  const tint = (pct: number) => `color-mix(in srgb, ${row.accent} ${pct}%, transparent)`

  return (
    <>
    <ul className="sr-only" aria-label={`${row.category} skills`}>
      {row.skills.map((skill) => <li key={skill}>{skill}</li>)}
    </ul>
    <div
      aria-hidden
      className="overflow-hidden py-1"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: row.direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap border"
            style={{
              borderColor: tint(21),
              color: row.accent,
              backgroundColor: tint(5),
            }}
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
    </>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 right-0 font-serif font-black leading-none text-foreground/[0.025]"
        style={{ fontSize: "clamp(10rem, 28vw, 20rem)", zIndex: 0 }}
      >
        04
      </span>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Skills & Expertise
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              What I work with
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
          <div className="mt-5 h-px bg-border" />
        </motion.div>

        <div className="space-y-10">
          {skillRows.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, x: row.direction > 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-4 px-1">
                <span
                  className="text-[10px] font-bold tracking-[0.25em] uppercase"
                  style={{ color: row.accent }}
                >
                  {row.category}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: `color-mix(in srgb, ${row.accent} 15%, transparent)` }} />
              </div>

              {/* Scrolling chips */}
              <SkillScrollRow row={row} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
