import { links as site } from "@/lib/site"

const links = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "LeetCode", href: site.leetcode },
  { label: "Telegram", href: site.telegram },
  { label: "Email", href: `mailto:${site.email}` },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">

          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold text-primary tracking-tight">WM.</p>
            <p className="text-xs text-muted-foreground mt-1 tracking-wide">
              Webi Muleta — Full Stack Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Webi Muleta. Built with Next.js & Tailwind CSS.
          </p>
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
