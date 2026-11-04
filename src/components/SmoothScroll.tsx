"use client"

import { useEffect } from "react"
import Lenis from "lenis"

/** Inertial smooth scrolling. Skipped entirely for reduced-motion users. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -72 },
      autoRaf: true,
    })
    document.documentElement.classList.add("lenis")
    return () => {
      lenis.destroy()
      document.documentElement.classList.remove("lenis")
    }
  }, [])
  return null
}
