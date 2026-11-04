"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { useEffect, useState } from "react"

/* ── Cursor spotlight ─────────────────────────────────────────── */
function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const ok = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches
    if (!ok) return
    const onMove = (e: MouseEvent) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true) }
    const onLeave = () => setVisible(false)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseleave", onLeave) }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      <div style={{
        position: "absolute", left: pos.x, top: pos.y,
        width: 600, height: 600, transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(196,75,75,0.12) 0%, rgba(196,75,75,0.04) 45%, transparent 70%)",
      }} />
    </div>
  )
}

/* ── Floating orbs ────────────────────────────────────────────── */
const ORBS = [
  { size: 380, left: "5%",  top: "10%", delay: 0,   duration: 12 },
  { size: 260, left: "70%", top: "55%", delay: 1.5, duration: 15 },
  { size: 200, left: "55%", top: "5%",  delay: 0.8, duration: 10 },
]

function FloatingOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {ORBS.map((orb, i) => (
        <motion.div key={i} style={{
          position: "absolute", left: orb.left, top: orb.top,
          width: orb.size, height: orb.size, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,75,75,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
          animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}
    </div>
  )
}

/* ── Typewriter role ──────────────────────────────────────────── */
const ROLES = ["Full Stack Developer", "React Specialist", "Backend Engineer", "UI Craftsman"]

function TypewriterRole() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = ROLES[index]
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
      return () => clearTimeout(t)
    } else if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    } else if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      return () => clearTimeout(t)
    } else {
      setDeleting(false)
      setIndex(i => (i + 1) % ROLES.length)
    }
  }, [displayed, deleting, index])

  return (
    <span>
      {displayed}
      <span className="inline-block w-0.5 h-3.5 bg-primary ml-0.5 animate-pulse align-middle" />
    </span>
  )
}

/* ── Hero ─────────────────────────────────────────────────────── */
const stats = [
  { value: "4+", label: "Years exp." },
  { value: "20+", label: "Projects" },
  { value: "Full", label: "Stack" },
]

export function HeroSection() {
  return (
    <>
      <CursorSpotlight />

      <section className="relative min-h-screen flex items-center pt-20 pb-12 sm:pt-24 md:pt-32 md:pb-20 overflow-hidden bg-background">

        <FloatingOrbs />

        {/* Large "WM" watermark — same technique as About's "01" */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute top-1/2 right-0 -translate-y-1/2 font-serif font-black leading-none text-foreground/[0.025]"
          style={{ fontSize: "clamp(14rem, 38vw, 32rem)", zIndex: 0 }}
        >
          WM
        </span>

        {/* Edge vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, var(--color-background) 100%)",
            zIndex: 1,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5 sm:space-y-6 border-l-2 border-primary pl-5 sm:pl-8"
            >
              {/* Typewriter role overline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs font-bold tracking-[0.22em] uppercase text-muted-foreground"
              >
                <TypewriterRole />
              </motion.p>

              {/* Name */}
              <div className="space-y-1">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-base text-muted-foreground"
                >
                  Hi, I&apos;m
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.0]"
                >
                  Webi Muleta
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                Building accessible, pixel-perfect web products — from API to UI.
                Focused on the intersection of great engineering and thoughtful design.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button size="lg" className="h-12 px-8 text-sm font-semibold tracking-wide" asChild>
                  <a href="#projects">View Work <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold tracking-wide border-2" asChild>
                  <a href="/resume" target="_blank" rel="noopener noreferrer">
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-border"
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + i * 0.08 }}
                    className="space-y-0.5"
                  >
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-none">{s.value}</p>
                    <p className="text-xs text-muted-foreground pt-1">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
