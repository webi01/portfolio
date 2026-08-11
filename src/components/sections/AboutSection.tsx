"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "3", label: "Companies worked" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">

      {/* Giant watermark number */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 -left-4 font-serif font-black leading-none text-foreground/[0.025]"
        style={{ fontSize: "clamp(10rem, 28vw, 20rem)" }}
      >
        01
      </span>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-3">
            About
          </p>
          <div className="h-px bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-28 items-start">

          {/* Photo with crimson offset treatment */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative self-start"
          >
            {/* Crimson offset shadow */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-primary/15 border border-primary/20" />
            <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl border border-primary/25">
              <Image
                src="/images/profile.png"
                alt="Webi Muleta"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text with left crimson accent */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 border-l-2 border-primary pl-5 sm:pl-6 md:pt-4"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Developer.<br />Builder.<br />Problem solver.
            </h2>

            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Computer Science and Engineering graduate from Adama Science and
                Technology University, where I finished with Very High Distinction, and a
                Full Stack Developer with a passion for building impactful digital
                products. I specialize in crafting fast, accessible, and beautifully
                designed web applications — from the API layer all the way to the UI.
              </p>
              <p>
                With experience ranging from e-commerce platforms and B2B marketplaces
                to consumer apps, I bring both technical depth and product thinking
                to every project I work on.
              </p>
              <p>
                When I&apos;m not building, I&apos;m exploring new technologies, contributing to
                open source, and sharpening my problem-solving skills on LeetCode.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="mailto:webimuleta01@gmail.com"
                className="text-sm font-semibold text-primary hover:underline underline-offset-4"
              >
                webimuleta01@gmail.com
              </a>
              <span className="text-border select-none">·</span>
              <a
                href="https://github.com/Dirac1235"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <span className="text-border select-none">·</span>
              <a
                href="https://www.linkedin.com/in/webi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mt-20 pt-10 border-t border-border"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-1"
            >
              <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-none">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-snug pt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
