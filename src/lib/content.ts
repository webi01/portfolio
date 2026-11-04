import { synheartProducts } from "@/lib/site"

export type Project = {
  title: string
  description: string
  year: string
  tag: string
  stack: string[]
  liveUrl: string
  /** Screenshot path; when absent a solid brand panel is drawn */
  image?: string
  panel?: { bg: string; fg: string }
  company?: string
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: "Synheart",
    company: "Synheart",
    description:
      "A privacy-first human-state platform that turns biosignals into structured signals like stress, focus, and cognitive load. I build product surfaces across the Synheart product family.",
    year: "2026",
    tag: "Human-state",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://synheart.ai",
    panel: { bg: "#5B3DF5", fg: "#FFFFFF" },
    links: [{ label: "synheart.ai", href: "https://synheart.ai" }],
  },
  {
    title: "Synheart Platform",
    company: "Synheart",
    description:
      "The organization dashboard where teams manage their org, members, and access across Synheart.",
    year: "2026",
    tag: "Dashboard",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://platform.synheart.ai",
    panel: { bg: "#C6F432", fg: "#111111" },
    links: [{ label: "platform.synheart.ai", href: "https://platform.synheart.ai" }],
  },
  {
    title: "Synapse",
    company: "Synheart",
    description:
      "Part of the Synheart product family — I worked on both its public site and its web app.",
    year: "2026",
    tag: "Site + app",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://synapse.work",
    panel: { bg: "#111111", fg: "#FFF4E6" },
    links: [
      { label: "synapse.work", href: "https://synapse.work" },
      { label: "synapse.synheart.ai", href: "https://synapse.synheart.ai" },
    ],
  },
  {
    title: "Intent",
    description:
      "A desktop AI agent platform that puts your computer on autopilot. Professionals build tailored automation systems for repetitive work — just type what you want done and Intent handles the rest.",
    year: "2025",
    tag: "AI agent",
    stack: ["Next.js", "TypeScript", "Desktop", "Automation"],
    liveUrl: "https://intentt.vercel.app/",
    image: "/images/intent.png",
  },
  {
    title: "Revcom",
    description:
      "Ethiopia's B2B procurement marketplace connecting buyers with 200+ verified suppliers — live procurement requests, real-time quotes, bulk catalogs, and escrow-protected payments.",
    year: "2025",
    tag: "B2B",
    stack: ["Next.js", "Node.js", "MongoDB", "REST API"],
    liveUrl: "https://revecom.vercel.app/",
    image: "/images/revcom.png",
  },
  {
    title: "SymDoc",
    description:
      "Generate, refine, and publish high-quality system prompts for AI agents. Create with AI assistance, iterate in real time, and share your best work.",
    year: "2025",
    tag: "AI tooling",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    liveUrl: "https://sym-doc.vercel.app/",
    image: "/images/symdoc.png",
  },
  {
    title: "Sitota",
    description:
      "Render custom brand assets onto luxurious, organic gift items with AI precision — and send comfort globally.",
    year: "2025",
    tag: "E-commerce",
    stack: ["Next.js", "TypeScript", "Postgres"],
    liveUrl: "https://sitota-nu.vercel.app/",
    image: "/images/sitota.png",
  },
]

export type Experience = {
  role: string
  company: string
  location: string
  date: string
  current: boolean
  description: string
  skills: string[]
  products?: { name: string; href: string }[]
}

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Synheart",
    location: "Remote",
    date: "2026 — Now",
    current: true,
    description:
      "Building product surfaces for a privacy-first human-state platform that turns biosignals into structured signals like stress, focus, and cognitive load. I work across the Synheart product family — synheart.ai, Synapse, and platform.synheart.ai, the organization dashboard where teams manage their org, members, and access — as well as Life, the companion desktop app that captures user state and hosts real-time chat.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Desktop App", "Real-time Chat", "Dashboards"],
    products: synheartProducts,
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Tech for Africa",
    location: "Remote",
    date: "2025",
    current: false,
    description:
      "Built and maintained modern, responsive web interfaces using Next.js and Tailwind CSS, focused on component reusability, performance, and seamless API integration for African-focused tech initiatives.",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "API Integration"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Ewnet Communication",
    location: "On-site",
    date: "2023",
    current: false,
    description:
      "Developed full-stack web applications with Next.js, Node.js, Express, and MongoDB — responsive UIs, RESTful APIs, and database operations, shipped together with the team.",
    skills: ["Next.js", "Node.js", "MongoDB", "Express", "REST APIs"],
  },
]

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    school: "Adama Science and Technology University",
    location: "Ethiopia",
    date: "2022 — 2026",
    honor: "Very High Distinction",
    description:
      "Algorithms, data structures, operating systems, databases, computer networks, and software engineering, alongside hands-on engineering projects.",
  },
  {
    degree: "Competitive Programming & Algorithms",
    school: "A2SV — Africa to Silicon Valley",
    location: "Ethiopia",
    date: "2024",
    honor: null,
    description:
      "Intensive, interview-focused training in data structures and algorithms — daily LeetCode, complexity analysis, and clean implementation under time pressure.",
  },
  {
    degree: "Full Stack Software Engineering",
    school: "ALX Africa",
    location: "Remote",
    date: "2021 — 2022",
    honor: null,
    description:
      "Project-based program in C, Python, JavaScript, Git, Linux, backend architecture, and modern web technologies.",
  },
]

export const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Flutter", "Dart", "HTML & CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "JWT"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Linux", "Figma", "CI/CD", "Agile", "UI/UX Design", "Vercel"],
  },
]

export const stats = [
  { value: "4+", label: "Years building for the web" },
  { value: "20+", label: "Projects shipped" },
  { value: "3", label: "Companies worked with" },
]
