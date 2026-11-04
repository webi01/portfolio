"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/SectionHeading"
import { experiences } from "@/lib/content"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-36 bg-card">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="02" title="Experience" kicker="Where I've built, shipped, and grown." />

        <div className="border-t-2 border-foreground">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-4 py-10 sm:py-12 md:grid-cols-[220px_1fr] md:gap-10 border-b border-border last:border-b-0"
            >
              <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-start">
                <span className="font-display text-xl font-bold tabular-nums">{exp.date}</span>
                <span className="text-sm text-muted-foreground">{exp.location}</span>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                    Current role
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-none">
                  {exp.company}
                </h3>
                <p className="mt-3 font-display text-xl font-semibold">{exp.role}</p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{exp.description}</p>

                {exp.products && (
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${exp.company} products`}>
                    {exp.products.map((product) => (
                      <li key={product.href}>
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream hover:bg-brand hover:text-ink transition-colors dark:bg-cream dark:text-ink dark:hover:bg-brand"
                        >
                          {product.href.replace("https://", "")}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-5 text-sm text-muted-foreground">{exp.skills.join(" · ")}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
