import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ContactSection } from "@/components/sections/ContactSection"

import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { EducationSection } from "@/components/sections/EducationSection"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Webi Muleta",
    "url": "https://webimuleta.dev",
    "sameAs": [
      "https://github.com/Dirac1235",
      "https://www.linkedin.com/in/webi",
      "https://t.me/dirac02",
      "https://leetcode.com/Dirac1235",
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Tech for Africa"
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
