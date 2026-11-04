"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  React.useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      // Tuck the bar away while reading down; bring it back on any upward scroll
      setHidden(y > 400 && y > last + 4 ? true : y < last - 4 ? false : (h) => h)
      last = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen])

  // Over the orange hero the bar is transparent with ink text; once scrolled it takes the page colors.
  const solid = scrolled || isOpen

  return (
    <nav
      aria-label="Main"
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-[background-color,color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        hidden && !isOpen && "-translate-y-full",
        solid ? "bg-background/90 backdrop-blur-md text-foreground border-b border-border" : "bg-transparent text-ink"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight">
          webi<span className={solid ? "text-brand-text" : ""}>.</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative rounded-full px-3.5 py-2 text-[15px] font-medium"
            >
              <span className="relative inline-block overflow-hidden align-bottom">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                  {item.name}
                </span>
                <span aria-hidden className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                  {item.name}
                </span>
              </span>
            </Link>
          ))}
          <ThemeToggle className="ml-2" />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-current/10"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="md:hidden border-t border-border bg-background"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block font-display text-3xl font-bold tracking-tight py-2"
              >
                {item.name}
              </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
