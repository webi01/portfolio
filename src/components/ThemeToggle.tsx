"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-current/10",
        className
      )}
    >
      <Sun className="h-[1.15rem] w-[1.15rem] scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.15rem] w-[1.15rem] scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
    </button>
  )
}
