"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Synheart",
    location: "Remote",
    date: "2026",
    current: false,
    description:
      "Built product surfaces for a privacy-first human-state platform that turns biosignals into structured signals like stress, focus, and cognitive load. Developed platform.synheart.ai — the organization dashboard where teams manage their org, members, and access — and worked on Life, the companion desktop app that captures user state and hosts real-time chat.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Desktop App", "Real-time Chat", "Dashboards"],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Tech for Africa",
    location: "Remote",
    date: "2025",
    current: true,
    description:
      "Built and maintained modern, responsive web interfaces using Next.js and Tailwind CSS. Focused on component reusability, performance optimization, and seamless API integration to deliver high-quality user experiences for African-focused tech initiatives.",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design", "API Integration"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Ewnet Communication",
    location: "On-site",
    date: "2023",
    current: false,
    description:
      "Developed full-stack web applications using Next.js, Node.js, Express, and MongoDB. Built responsive UIs, implemented RESTful APIs, handled database operations, and collaborated with team members to deliver clean, maintainable solutions.",
    skills: ["Next.js", "Node.js", "MongoDB", "Express", "REST APIs", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">

      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 right-0 font-serif font-black leading-none text-foreground/[0.025]"
        style={{ fontSize: "clamp(10rem, 28vw, 20rem)", zIndex: 0 }}
      >
        02
      </span>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Career Path
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-none">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              My professional journey and the companies I&apos;ve had the privilege to work with.
            </p>
          </div>
          <div className="mt-5 h-px bg-border" />
        </motion.div>

        {/* Experience rows */}
        <div className="max-w-4xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 lg:gap-12 py-8 sm:py-10 border-b border-border last:border-b-0"
            >
              {/* Left: date + location */}
              <div className="flex flex-wrap sm:flex-col gap-2 sm:gap-2 sm:pt-1 items-center sm:items-start">
                <p className="text-sm font-medium text-primary whitespace-nowrap tabular-nums">
                  {exp.date}
                </p>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="text-xs">{exp.location}</span>
                </div>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-primary">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                    Current
                  </span>
                )}
              </div>

              {/* Right: content */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground mb-1">
                    {exp.company}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                    {exp.role}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground bg-card"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
