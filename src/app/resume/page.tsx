"use client";

import { Download, Printer } from "lucide-react";
import { education, projects, skillGroups } from "@/lib/content";
import { links, siteUrl, synheartProducts } from "@/lib/site";

// Print to exactly one A4 page; screen view shows the sheet on a cream desk.
const printStyles = `
  @media print {
    @page { margin: 0; size: A4; }
    html, body { margin: 0; background: #fff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .cv-sheet { box-shadow: none !important; margin: 0 !important; }
  }
`;

const strip = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const contact = [
  { label: links.email, href: `mailto:${links.email}` },
  { label: strip(siteUrl), href: siteUrl },
  { label: strip(links.github), href: links.github },
  { label: strip(links.linkedin), href: links.linkedin },
  { label: strip(links.telegram), href: links.telegram },
  { label: strip(links.leetcode), href: links.leetcode },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Synheart",
    period: "2026 — Present",
    location: "Remote",
    points: [
      "Ship product surfaces for a privacy-first platform that turns biosignals into stress, focus, and cognitive-load signals.",
      "Built platform.synheart.ai, the organization dashboard where teams manage their org, members, and access.",
      "Work on Life, the companion desktop app that captures user state and hosts real-time chat.",
    ],
    products: synheartProducts,
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Tech for Africa",
    period: "2025",
    location: "Remote",
    points: [
      "Built and maintained responsive web interfaces with Next.js and Tailwind CSS for African-focused tech initiatives.",
      "Focused on component reusability, performance, and seamless API integration.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Ewnet Communication",
    period: "2023",
    location: "On-site",
    points: [
      "Built full-stack web apps with Next.js, Node.js, Express, and MongoDB — responsive UIs, REST APIs, and database work.",
    ],
  },
];

// Synheart products are covered under Experience; list independent work here.
const selectedProjects = projects.filter((p) => !p.company);

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#FFF4E6] print:bg-white text-[#111]">
      <style>{printStyles}</style>

      <div className="print:hidden flex flex-wrap justify-center gap-3 pt-8 pb-6 px-4">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-2.5 text-sm font-semibold text-[#FFF4E6] hover:bg-[#FF5B2E] hover:text-[#111] transition-colors"
        >
          <Printer className="h-4 w-4" />
          Print / Save as PDF
        </button>
        <a
          href="/resume.pdf"
          download="Webi-Muleta-Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#111] px-5 py-2.5 text-sm font-semibold hover:bg-[#111] hover:text-[#FFF4E6] transition-colors"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>

      <div className="overflow-x-auto print:overflow-visible pb-12 print:pb-0">
        <article
          className="cv-sheet mx-auto bg-white shadow-xl"
          style={{ width: "210mm", height: "297mm", overflow: "hidden", boxSizing: "border-box" }}
        >
          {/* Orange header band */}
          <header className="bg-[#FF5B2E] px-[14mm] pt-[11mm] pb-[7mm]">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h1 className="font-display text-[44px] font-extrabold uppercase leading-[0.85] tracking-[-0.04em]">
                  Webi Muleta
                </h1>
                <p className="mt-2 font-display text-[15px] font-semibold">Full Stack Developer</p>
              </div>
              <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-[#111] px-3 py-1 text-[10px] font-semibold text-[#FFF4E6] whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6F432]" />
                Now at Synheart
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[10.5px] font-medium">
              {contact.map((c, i) => (
                <span key={c.href} className="flex items-center gap-3">
                  <a href={c.href} className="underline decoration-[#111]/30 underline-offset-2 hover:decoration-[#111]">
                    {c.label}
                  </a>
                  {i < contact.length - 1 && <span aria-hidden>·</span>}
                </span>
              ))}
            </div>
          </header>

          <div className="px-[14mm] pt-[6mm]">
            <Section title="Summary">
              <p className="text-[11px] leading-[1.55] text-[#3A3330]">
                Full stack developer building fast, accessible products from the API layer to the UI. Currently at
                Synheart, building a privacy-first human-state platform. Computer Science &amp; Engineering graduate
                (Very High Distinction) with work spanning human-state platforms, B2B marketplaces, AI tooling, and
                desktop apps.
              </p>
            </Section>

            <Section title="Experience">
              <div className="space-y-[3.2mm]">
                {experience.map((exp) => (
                  <div key={exp.company}>
                    <Row
                      left={
                        <>
                          <span className="font-display text-[13px] font-bold">{exp.company}</span>
                          <span className="text-[11px] text-[#5A5149]"> — {exp.role}</span>
                        </>
                      }
                      right={`${exp.period} · ${exp.location}`}
                    />
                    <ul className="mt-1 space-y-[2px]">
                      {exp.points.map((point) => (
                        <Bullet key={point}>{point}</Bullet>
                      ))}
                    </ul>
                    {exp.products && (
                      <p className="mt-1 pl-3 text-[10px] text-[#5A5149]">
                        Products:{" "}
                        {exp.products.map((pr, i) => (
                          <span key={pr.href}>
                            <a href={pr.href} className="font-semibold text-[#B8360F]">
                              {strip(pr.href)}
                            </a>
                            {i < exp.products!.length - 1 && " · "}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Selected Projects">
              <div className="grid grid-cols-2 gap-x-[6mm] gap-y-[2.6mm]">
                {selectedProjects.map((p) => (
                  <div key={p.title}>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-[12.5px] font-bold">{p.title}</span>
                      <a href={p.liveUrl} className="text-[9.5px] font-semibold text-[#B8360F]">
                        {strip(p.liveUrl)}
                      </a>
                    </div>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-[#3A3330]">{p.description}</p>
                    <p className="mt-0.5 text-[9.5px] text-[#5A5149]">{p.stack.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Education">
              <div className="space-y-[2.2mm]">
                {education.map((edu) => (
                  <div key={edu.school}>
                    <Row
                      left={
                        <>
                          <span className="font-display text-[12.5px] font-bold">{edu.degree}</span>
                          <span className="text-[11px] text-[#5A5149]"> — {edu.school}</span>
                        </>
                      }
                      right={`${edu.date} · ${edu.location}`}
                    />
                    {edu.honor && (
                      <span className="mt-1 inline-block whitespace-nowrap rounded-full bg-[#C6F432] px-2 py-[1px] text-[9px] font-semibold">
                        {edu.honor}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Skills" last>
              <div className="grid grid-cols-[22mm_1fr] gap-y-1 text-[10.5px]">
                {skillGroups.map((g) => (
                  <div key={g.category} className="contents">
                    <span className="font-semibold">{g.category}</span>
                    <span className="text-[#3A3330]">{g.skills.join(" · ")}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </article>
      </div>
    </div>
  );
}

function Section({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <section className={last ? "" : "mb-[5mm]"}>
      <div className="mb-[2.2mm] flex items-center gap-3">
        <h2 className="font-display text-[11px] font-extrabold uppercase tracking-[0.14em] whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[2px] flex-1 bg-[#FF5B2E]" />
      </div>
      {children}
    </section>
  );
}

function Row({ left, right }: { left: React.ReactNode; right: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <div>{left}</div>
      <span className="shrink-0 whitespace-nowrap text-[10px] text-[#5A5149]">{right}</span>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-[10.5px] leading-snug text-[#3A3330]">
      <span className="mt-[5px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#FF5B2E]" />
      <span>{children}</span>
    </li>
  );
}
