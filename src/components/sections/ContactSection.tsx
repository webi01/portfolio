"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Send, Code2 } from "lucide-react"
import { links } from "@/lib/site"

const socials = [
  { label: "GitHub", href: links.github, icon: Github },
  { label: "LinkedIn", href: links.linkedin, icon: Linkedin },
  { label: "Telegram", href: links.telegram, icon: Send },
  { label: "LeetCode", href: links.leetcode, icon: Code2 },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">

      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 right-0 font-serif font-black leading-none text-foreground/[0.025]"
        style={{ fontSize: "clamp(10rem, 28vw, 20rem)", zIndex: 0 }}
      >
        06
      </span>

      {/* Subtle crimson glow at center */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,75,75,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Contact
          </p>
          <div className="h-px bg-border" />
        </motion.div>

        {/* Centered content */}
        <div className="max-w-3xl mx-auto text-center space-y-10">

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
          >
            Let&apos;s build<br />something great.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto"
          >
            Open to new opportunities and collaborations. Whether you have a
            project in mind or just want to say hi — my inbox is open.
          </motion.p>

          {/* Email as a large styled link */}
          <motion.a
            href="mailto:webimuleta01@gmail.com"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-2 font-serif text-xl sm:text-2xl font-bold text-primary hover:text-foreground transition-colors border-b-2 border-primary/40 hover:border-primary pb-1"
          >
            webimuleta01@gmail.com
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px bg-border origin-center"
          />

          {/* Social links strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-1 flex-wrap"
          >
            {socials.map((social, i) => {
              const Icon = social.icon
              return (
                <div key={social.label} className="flex items-center">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-primary/5"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                  {i < socials.length - 1 && (
                    <span className="text-border select-none text-lg mx-1">·</span>
                  )}
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
