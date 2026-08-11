"use client"

import { motion } from "framer-motion"
import { MapPin, GraduationCap } from "lucide-react"

const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    school: "Adama Science and Technology University",
    location: "Ethiopia",
    date: "2022 — 2026",
    honor: "Very High Distinction",
    description:
      "Graduated with Very High Distinction. Built a strong foundation in algorithms, data structures, operating systems, databases, computer networks, and software engineering, alongside hands-on engineering coursework and projects.",
    highlights: ["Algorithms", "Data Structures", "Operating Systems", "Databases", "Computer Networks", "Software Engineering"],
  },
  {
    degree: "Competitive Programming & Algorithms",
    school: "A2SV — Africa to Silicon Valley",
    location: "Ethiopia",
    date: "2024",
    honor: null,
    description:
      "Trained deeply in data structures and algorithms through A2SV's intensive, interview-focused curriculum. Solved hundreds of LeetCode problems daily, sharpening problem-solving speed, complexity analysis, and clean implementation under time pressure.",
    highlights: ["Data Structures", "Algorithms", "Problem Solving", "LeetCode", "Complexity Analysis", "Technical Interviews"],
  },
  {
    degree: "Full Stack Software Engineering",
    school: "ALX Africa",
    location: "Remote",
    date: "2021 — 2022",
    honor: null,
    description:
      "Completed an intensive, project-based software engineering program specializing in full-stack development. Mastered C, Python, JavaScript, Git, Linux, backend architecture, and modern web technologies through real-world projects.",
    highlights: ["C", "Python", "JavaScript", "Git", "Linux", "Backend Development"],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">

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
        className="pointer-events-none select-none absolute -top-4 -left-4 font-serif font-black leading-none text-foreground/[0.025]"
        style={{ fontSize: "clamp(10rem, 28vw, 20rem)", zIndex: 0 }}
      >
        03
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
            Academic Background
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-none">
              Education
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Where I learned the fundamentals behind the things I build.
            </p>
          </div>
          <div className="mt-5 h-px bg-border" />
        </motion.div>

        {/* Education rows */}
        <div className="max-w-4xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 lg:gap-12 py-8 sm:py-10 border-b border-border last:border-b-0"
            >
              {/* Left: date + location */}
              <div className="flex flex-wrap sm:flex-col gap-2 sm:gap-2 sm:pt-1 items-center sm:items-start">
                {edu.date && (
                  <p className="text-sm font-medium text-primary whitespace-nowrap tabular-nums">
                    {edu.date}
                  </p>
                )}
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="text-xs">{edu.location}</span>
                </div>
                {edu.honor && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-primary">
                    <GraduationCap className="h-3 w-3 flex-shrink-0" />
                    {edu.honor}
                  </span>
                )}
              </div>

              {/* Right: content */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground mb-1">
                    {edu.school}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                    {edu.degree}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground bg-card"
                    >
                      {item}
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
