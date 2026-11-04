"use client"

import { motion } from "framer-motion"
import { RevealText, ease } from "@/components/motion"

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
    <div className="mb-12 sm:mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(3rem,9vw,7.5rem)]">
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
          className="block text-sm font-semibold tracking-normal text-muted-foreground mb-4 font-sans"
        >
          ({index})
        </motion.span>
        <RevealText text={title} by="letter" stagger={0.03} />
      </h2>
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          viewport={{ once: true }}
          className="max-w-sm text-base leading-relaxed text-muted-foreground md:pb-3"
        >
          {kicker}
        </motion.p>
      )}
    </div>
  )
}
