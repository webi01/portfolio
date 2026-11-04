"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/SectionHeading"
import { CountUp, DrawLine, Magnetic, RevealText, Unveil, ease } from "@/components/motion"
import { stats } from "@/lib/content"
import { links } from "@/lib/site"

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="03" title="About" />

        <div className="grid gap-10 md:grid-cols-[5fr_7fr] lg:gap-20 items-start">
          <Unveil className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand md:sticky md:top-24">
            <div className="relative h-full w-full">
            <Image
              src="/images/profile.png"
              alt="Portrait of Webi Muleta"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            </div>
          </Unveil>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            viewport={{ once: true }}
          >
            <RevealText
              as="p"
              stagger={0.03}
              text="I'm a full stack developer who cares about the whole product — the API, the data, and the last pixel of the interface."
              className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold leading-[1.15] tracking-tight"
            />

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
              <Magnetic>
              <a href={`mailto:${links.email}`} className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:bg-brand hover:text-ink transition-colors duration-300">
                Email me
              </a>
              </Magnetic>
              <Magnetic>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-full border-2 border-foreground px-5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors">
                GitHub
              </a>
              </Magnetic>
              <Magnetic>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-full border-2 border-foreground px-5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors">
                LinkedIn
              </a>
              </Magnetic>
            </div>

            <DrawLine className="mt-12 h-0.5 bg-foreground" />
            <dl className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-5xl sm:text-6xl font-extrabold tracking-[-0.05em] leading-none tabular-nums">
                    <CountUp value={stat.value} />
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
