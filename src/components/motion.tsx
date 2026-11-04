"use client"

import * as React from "react"
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion"
import { cn } from "@/lib/utils"

export const ease = [0.22, 1, 0.36, 1] as const
export const easeInOut = [0.76, 0, 0.24, 1] as const

/**
 * Masked text reveal: each word (or letter) slides up from behind a clip.
 * Screen readers get the plain string; the split spans are aria-hidden.
 */
export function RevealText({
  text,
  by = "word",
  as: Tag = "span",
  className,
  delay = 0,
  stagger,
  once = true,
  immediate = false,
}: {
  text: string
  by?: "word" | "letter"
  as?: "span" | "h1" | "h2" | "h3" | "p"
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
  /** Animate on mount instead of when scrolled into view */
  immediate?: boolean
}) {
  const ref = React.useRef<HTMLElement>(null)
  const inView = useInView(ref, { once, margin: "-10% 0px" })
  const show = immediate || inView
  const step = stagger ?? (by === "letter" ? 0.035 : 0.06)

  const words = text.split(" ")
  let i = 0

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((word, w) => (
          <span key={w} className="inline-block whitespace-nowrap">
            {(by === "letter" ? word.split("") : [word]).map((chunk, c) => {
              const d = delay + i++ * step
              return (
                <span key={c} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
                  <motion.span
                    className="inline-block will-change-transform"
                    initial={{ y: "110%" }}
                    animate={show ? { y: "0%" } : { y: "110%" }}
                    transition={{ duration: 0.9, delay: d, ease }}
                  >
                    {chunk}
                  </motion.span>
                </span>
              )
            })}
            {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </span>
    </Tag>
  )
}

/** Fade + rise on scroll. */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  ...rest
}: { children: React.ReactNode; delay?: number; y?: number; className?: string } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease }}
      viewport={{ once: true, margin: "-60px" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** A rule that draws itself from left to right. */
export function DrawLine({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1.1, delay, ease: easeInOut }}
      viewport={{ once: true, margin: "-40px" }}
      className={cn("origin-left", className)}
    />
  )
}

/**
 * Image/panel unveil: a clip-path wipe upward plus a slow settle in scale.
 * Visibility is observed on an unclipped wrapper — a fully clipped element
 * never reports as intersecting, so it could never trigger itself.
 */
export function Unveil({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  const reduce = useReducedMotion()
  const shown = reduce || inView

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={false}
        animate={{ clipPath: shown ? "inset(0% 0% 0% 0% round 1.5rem)" : "inset(100% 0% 0% 0% round 1.5rem)" }}
        transition={{ duration: reduce ? 0 : 1.2, ease: easeInOut }}
        className="h-full w-full"
      >
        <motion.div
          initial={false}
          animate={{ scale: shown ? 1 : 1.18 }}
          transition={{ duration: reduce ? 0 : 1.6, ease }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

/** Counts up to a number like "20+" when scrolled into view. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ""
  const [display, setDisplay] = React.useState(match ? `0${suffix}` : value)

  React.useEffect(() => {
    if (!inView || !match) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease,
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    })
    return () => controls.stop()
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}

/** Gently pulls its child toward the cursor (fine pointers only). */
export function Magnetic({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })
  const reduce = useReducedMotion()

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span ref={ref} style={{ x: sx, y: sy }} onPointerMove={onMove} onPointerLeave={reset} className="inline-block">
      {children}
    </motion.span>
  )
}

/** Infinite horizontal ticker. Decorative, hidden from assistive tech. */
export function Marquee({ items, className, duration = 30 }: { items: string[]; className?: string; duration?: number }) {
  const reduce = useReducedMotion()
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6">{item}</span>
          <span className="text-brand">✺</span>
        </span>
      ))}
    </div>
  )
  return (
    <div aria-hidden className={cn("flex overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        className="flex"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {row}
        {row}
      </motion.div>
    </div>
  )
}
