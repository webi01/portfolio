"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/SectionHeading"
import { stats } from "@/lib/content"
import { links } from "@/lib/site"

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="03" title="About" />

        <div className="grid gap-10 md:grid-cols-[5fr_7fr] lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand"
          >
            <Image
              src="/images/profile.png"
              alt="Portrait of Webi Muleta"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold leading-[1.15] tracking-tight">
              I&apos;m a full stack developer who cares about the whole product — the
              API, the data, and the last pixel of the interface.
            </p>

            <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m currently building at{" "}
                <a href="https://synheart.ai" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-text">
                  Synheart
                </a>
                , a privacy-first human-state platform. I graduated in Computer Science and
                Engineering from Adama Science and Technology University with Very High
                Distinction.
              </p>
              <p>
                My work spans human-state platforms, B2B marketplaces, AI tooling, and
                consumer apps. Outside of work I explore new tech, contribute to open source,
                and keep my problem-solving sharp on LeetCode.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${links.email}`} className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:opacity-90 transition-opacity">
                Email me
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-full border-2 border-foreground px-5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors">
                GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-full border-2 border-foreground px-5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors">
                LinkedIn
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t-2 border-foreground pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-5xl sm:text-6xl font-extrabold tracking-[-0.05em] leading-none">
                    {stat.value}
                  </dd>
                  <p aria-hidden className="mt-2 text-sm text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
