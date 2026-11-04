"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/SectionHeading"
import { DrawLine, ease } from "@/components/motion"
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
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.15 + i * 0.12 }}
            >
              <div className="flex items-center gap-3 pb-4">
                <motion.span
                  variants={{ hidden: { scale: 0 }, show: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 15 } } }}
                  className={`h-3 w-3 rounded-full ${accents[i % accents.length]}`}
                />
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">{group.category}</h3>
              </div>
              <DrawLine className="h-px bg-cream/20" delay={0.1 + i * 0.12} />
              <ul className="mt-4">
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }}
                    className="font-display text-2xl sm:text-3xl font-bold tracking-tight py-1.5 w-fit transition-[color,transform] duration-300 hover:text-brand hover:translate-x-2"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
