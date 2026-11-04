"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/SectionHeading"
import { projects, type Project } from "@/lib/content"
import { cn } from "@/lib/utils"

function Visual({ project, featured }: { project: Project; featured: boolean }) {
  const [imgError, setImgError] = useState(false)
  const showImage = project.image && !imgError
  const panel = project.panel ?? { bg: "#111111", fg: "#FFF4E6" }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl",
        featured ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3]"
      )}
      style={showImage ? undefined : { backgroundColor: panel.bg, color: panel.fg }}
    >
      {showImage ? (
        <Image
          src={project.image!}
          alt={`${project.title} screenshot`}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-end justify-between p-6 sm:p-10">
          <span
            className={cn(
              "block font-display font-extrabold tracking-[-0.05em] leading-[0.85] transition-transform duration-700 ease-out group-hover:-translate-y-1",
              featured ? "text-[clamp(3.5rem,11vw,10rem)]" : "text-[clamp(3rem,7vw,5.5rem)]"
            )}
          >
            {project.title}
          </span>
          <ArrowUpRight className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      )}
    </div>
  )
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const featured = index === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className={cn("group", featured && "md:col-span-2")}
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden>
        <Visual project={project} featured={featured} />
      </a>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-text transition-colors">
            {project.title}
          </a>
        </h3>
        <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">{project.tag}</span>
        <span className="text-sm text-muted-foreground tabular-nums">{project.year}</span>
      </div>

      {project.company && (
        <p className="mt-1 text-sm font-semibold text-muted-foreground">Built at {project.company}</p>
      )}

      <p className={cn("mt-3 text-base leading-relaxed text-muted-foreground", featured ? "max-w-3xl" : "max-w-xl")}>
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        {(project.links ?? [{ label: "Visit site", href: project.liveUrl }]).map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[15px] font-semibold text-brand-text underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-current transition-colors"
          >
            {link.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ))}
        <span className="text-sm text-muted-foreground">{project.stack.join(" · ")}</span>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  return (
    <section id="work" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          title="Selected work"
          kicker="Products I've built and shipped — from human-state platforms to AI agents and B2B marketplaces."
        />
        <div className="grid gap-x-8 gap-y-16 sm:gap-y-20 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
