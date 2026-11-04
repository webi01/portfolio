"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/SectionHeading"
import { education } from "@/lib/content"

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="05" title="Education" kicker="Formal foundations plus intensive, hands-on training." />

        <div className="border-t-2 border-foreground">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-3 py-8 sm:py-10 md:grid-cols-[220px_1fr] md:gap-10 border-b border-border last:border-b-0"
            >
              <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-start">
                <span className="font-display text-xl font-bold tabular-nums">{edu.date}</span>
                <span className="text-sm text-muted-foreground">{edu.location}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">{edu.degree}</h3>
                  {edu.honor && (
                    <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">{edu.honor}</span>
                  )}
                </div>
                <p className="mt-1 font-semibold">{edu.school}</p>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
