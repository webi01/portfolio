"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/SectionHeading"
import { skillGroups } from "@/lib/content"

const accents = ["bg-brand", "bg-lime", "bg-violet"]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-36 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 [&_.text-muted-foreground]:text-cream/70">
        <SectionHeading index="04" title="Toolkit" kicker="The technologies I reach for to take ideas from sketch to production." />

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 border-b border-cream/20 pb-4">
                <span className={`h-3 w-3 rounded-full ${accents[i % accents.length]}`} />
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">{group.category}</h3>
              </div>
              <ul className="mt-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-display text-2xl sm:text-3xl font-bold tracking-tight py-1.5">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
