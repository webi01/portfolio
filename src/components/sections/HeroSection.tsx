"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  return (
    <section className="relative bg-brand text-ink overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:min-h-[92vh] lg:flex lg:flex-col lg:justify-end">
        <motion.a
          href="https://synheart.ai"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream hover:opacity-90 transition-opacity"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          Now building at Synheart
          <ArrowUpRight className="h-3.5 w-3.5" />
        </motion.a>

        <h1 className="mt-8 font-display font-extrabold uppercase leading-[0.8] tracking-[-0.055em] text-[clamp(4.25rem,19vw,15.5rem)]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease }}
          >
            Webi
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            Muleta
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <p className="max-w-xl font-display text-xl sm:text-2xl font-medium leading-snug">
            Full stack developer making bold, fast web products — from the API to the
            last pixel of the UI.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-semibold text-cream hover:opacity-90 transition-opacity"
            >
              See my work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-ink px-6 text-[15px] font-semibold hover:bg-ink hover:text-cream transition-colors"
            >
              Resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
