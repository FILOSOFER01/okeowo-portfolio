import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { AboutHero } from "@/components/about/AboutHero";
import { ExperienceCard } from "@/components/about/ExperienceCard";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { EducationCard } from "@/components/about/EducationCard";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE_CONFIG.shortName} — Computer and Information Science student at Lead City University. Building toward AI-powered software engineering.`,
};

export default function AboutPage() {
  return (
    <div
      className="mx-auto px-6"
      style={{ maxWidth: "var(--width-site)" }}
    >
      <AboutHero />
      <ExperienceCard />
      <SkillsGrid />
      <EducationCard />
    </div>
  );
}