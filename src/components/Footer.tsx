export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 sm:px-8 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-xl font-extrabold">
          webi<span className="text-brand">.</span>
        </p>
        <p className="text-cream/70">&copy; {new Date().getFullYear()} Webi Muleta. Built with Next.js &amp; Tailwind CSS.</p>
        <a href="#" className="text-cream/70 hover:text-cream transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
