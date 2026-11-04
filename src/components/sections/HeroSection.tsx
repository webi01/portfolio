"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Magnetic, Marquee, RevealText, ease } from "@/components/motion"

const tickerItems = [
  "Full stack developer",
  "Next.js",
  "TypeScript",
  "Human-state products",
  "Node.js",
  "Design-minded engineering",
  "Open to collaborations",
]

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  // Name drifts up and the block softens slightly as you scroll away
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-18%"])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.35])

  return (
    <>
      <section ref={ref} className="relative bg-brand text-ink overflow-hidden">
        <motion.div
          style={{ opacity: fade }}
          className="mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:min-h-[88vh] lg:flex lg:flex-col lg:justify-end"
        >
          <motion.a
            href="https://synheart.ai"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream hover:gap-3 transition-[gap]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Now building at Synheart
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.a>

          <motion.h1
            style={{ y: nameY }}
            className="mt-8 font-display font-extrabold uppercase leading-[0.8] tracking-[-0.055em] text-[clamp(4.25rem,19vw,15.5rem)]"
          >
            <RevealText text="Webi" by="letter" immediate delay={0.1} stagger={0.06} className="block" />
            <RevealText text="Muleta" by="letter" immediate delay={0.3} stagger={0.06} className="block" />
          </motion.h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <RevealText
              as="p"
              immediate
              delay={0.75}
              stagger={0.025}
              text="Full stack developer making bold, fast web products — from the API to the last pixel of the UI."
              className="max-w-xl font-display text-xl sm:text-2xl font-medium leading-snug"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease }}
              className="flex flex-wrap gap-3"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-semibold text-cream"
                >
                  See my work
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center gap-2 rounded-full border-2 border-ink px-6 text-[15px] font-semibold hover:bg-ink hover:text-cream transition-colors duration-300"
                >
                  Resume
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Marquee
        items={tickerItems}
        className="bg-ink text-cream py-4 font-display text-lg sm:text-xl font-bold uppercase tracking-tight"
      />
    </>
  )
}
