"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    number: "01",
    title: "Intent",
    description:
      "A desktop AI agent platform that puts your computer on autopilot. Helps professionals build tailored automation systems to solve repetitive problems — just type what you want done and Intent handles the rest.",
    image: "/images/intent.png",
    tags: ["AI Agent", "Desktop App", "Automation", "Next.js", "TypeScript"],
    liveUrl: "https://intentt.vercel.app/",
  },
  {
    number: "02",
    title: "Revcom",
    description:
      "Ethiopia's #1 B2B procurement marketplace connecting buyers with 200+ verified suppliers. Features live procurement requests, real-time quote management, bulk product catalog, verified seller onboarding, and escrow-protected payments.",
    image: "/images/revcom.png",
    tags: ["Next.js", "Node.js", "MongoDB", "REST API", "JavaScript"],
    liveUrl: "https://revecom.vercel.app/",
  },
  {
    number: "03",
    title: "SymDoc",
    description:
      "Generate, refine, and publish high-quality system prompts for AI agents. Create with AI assistance, iterate in real-time, and share your best work with the community.",
    image: "/images/symdoc.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDb"],
    liveUrl: "https://sym-doc.vercel.app/",
  },
  {
    number: "04",
    title: "Sitota",
    description:
      "Elevate your connections. Render custom brand assets instantly onto our luxurious, organic items with AI precision, and send comfort globally.",
    image: "/images/sitota.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres"],
    liveUrl: "https://sitota-nu.vercel.app/",
    githubUrl:""
  },
]


function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group grid lg:grid-cols-[1fr_auto] gap-6 py-8 sm:py-10 border-b border-border last:border-b-0"
    >
      <div className="flex gap-4 sm:gap-8 lg:gap-10 items-start">
        {/* Large number */}
        <span
          aria-hidden
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mt-0.5 select-none flex-shrink-0 transition-colors duration-300 text-primary/20 group-hover:text-primary/50"
        >
          {project.number}
        </span>

        {/* Content */}
        <div className="flex-1 space-y-3 min-w-0">
          <div className="flex items-start gap-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 mt-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-md hover:bg-primary/10 text-primary transition-colors"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View code for ${project.title}`}
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground bg-card"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail — revealed on hover, desktop only */}
      {!imgError && (
        <div className="relative hidden lg:block w-48 h-32 rounded-xl overflow-hidden border border-border flex-shrink-0 self-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="192px"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        </div>
      )}
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 -left-4 font-serif font-black leading-none text-foreground/[0.025]"
        style={{ fontSize: "clamp(10rem, 28vw, 20rem)", zIndex: 0 }}
      >
        05
      </span>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Featured Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              Selected Work
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Things I&apos;ve built — from e-commerce to B2B platforms.
            </p>
          </div>
          <div className="mt-5 h-px bg-border" />
        </motion.div>

        {/* Project list */}
        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
