"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { links } from "@/lib/site"

const socials = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Telegram", href: links.telegram },
  { label: "LeetCode", href: links.leetcode },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-brand text-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28 lg:py-36">
        <p className="text-sm font-semibold">(06) Contact</p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-4 font-display font-extrabold uppercase tracking-[-0.055em] leading-[0.82] text-[clamp(3.5rem,13vw,11rem)]"
        >
          Let&apos;s build
          <br />
          something.
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-md text-lg font-medium leading-snug">
              Open to new roles, freelance projects, and collaborations. My inbox is always open.
            </p>
            <a
              href={`mailto:${links.email}`}
              className="group mt-6 inline-flex items-center gap-2 font-display text-[clamp(1.5rem,4.5vw,3rem)] font-bold tracking-tight underline decoration-[3px] underline-offset-8 hover:decoration-transparent transition-colors break-all"
            >
              {links.email}
              <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <ul className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-1 rounded-full bg-ink px-5 text-sm font-semibold text-cream hover:bg-cream hover:text-ink transition-colors"
                >
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
