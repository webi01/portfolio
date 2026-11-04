import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ContactSection } from "@/components/sections/ContactSection"

import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { EducationSection } from "@/components/sections/EducationSection"
import { links, siteUrl } from "@/lib/site"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Webi Muleta",
    "url": siteUrl,
    "sameAs": [links.github, links.linkedin, links.telegram, links.leetcode],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Synheart",
      "url": "https://synheart.ai"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Adama Science and Technology University"
      },
      {
        "@type": "EducationalOrganization",
        "name": "ALX Africa"
      }
    ]
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
