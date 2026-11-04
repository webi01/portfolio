"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> }
}

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark"
    const doc = document as ViewTransitionDoc
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!doc.startViewTransition || reduce) {
      setTheme(next)
      return
    }

    // Circular reveal of the new theme, expanding from the button
    const x = e.clientX || window.innerWidth - 40
    const y = e.clientY || 32
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

    const transition = doc.startViewTransition(() => {
      flushSync(() => setTheme(next))
    })
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.76, 0, 0.24, 1)", pseudoElement: "::view-transition-new(root)" }
      )
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-current/10",
        className
      )}
    >
      <Sun className="h-[1.15rem] w-[1.15rem] scale-100 rotate-0 transition-transform duration-500 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.15rem] w-[1.15rem] scale-0 rotate-90 transition-transform duration-500 dark:scale-100 dark:rotate-0" />
    </button>
  )
}
