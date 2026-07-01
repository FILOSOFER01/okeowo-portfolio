import type { Metadata } from "next";
import { getAllProjects } from "@/content/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SITE_CONFIG } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: `A collection of things ${SITE_CONFIG.shortName} has built — from side projects to production systems.`,
};

// ─── Projects page ────────────────────────────────────────────────────────────
// Lists all projects. Server component — reads project data at build time.
// Day 5+: add filtering by status and tech stack.

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div
      className="mx-auto px-6 py-16 md:py-24"
      style={{ maxWidth: "var(--width-site)" }}
    >

      {/* ── Page header ── */}
      <div className="mb-14 max-w-[var(--width-content)] animate-fade-up">
        <p
          className="mb-3 font-medium uppercase tracking-widest"
          style={{
            fontSize: "var(--text-caption)",
            color: "var(--color-tx-muted)",
          }}
        >
          Work
        </p>

        <h1
          className="font-medium mb-4"
          style={{
            fontSize: "var(--text-display-lg)",
            lineHeight: "var(--text-display-lg--line-height)",
            letterSpacing: "var(--text-display-lg--letter-spacing)",
            color: "var(--color-tx-primary)",
          }}
        >
          Projects.
        </h1>

        <p
          className="leading-relaxed"
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-tx-secondary)",
          }}
        >
          Things I&apos;ve built, explored, and shipped. Each project taught me
          something I couldn&apos;t learn from a course.
        </p>
      </div>

      {/* ── Project grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

    </div>
  );
}