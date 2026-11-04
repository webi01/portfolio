"use client"

import { motion } from "framer-motion"

export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string
  title: string
  kicker?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="mb-12 sm:mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
    >
      <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(3rem,9vw,7.5rem)]">
        <span className="block text-sm font-semibold tracking-normal text-muted-foreground mb-4 font-sans">
          ({index})
        </span>
        {title}
      </h2>
      {kicker && (
        <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:pb-3">{kicker}</p>
      )}
    </motion.div>
  )
}
