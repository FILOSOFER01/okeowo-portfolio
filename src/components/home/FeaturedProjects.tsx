import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

// ─── FeaturedProjects ─────────────────────────────────────────────────────────
// Homepage section. Shows exactly 3 featured projects in a responsive grid.
// Server component — no "use client" needed, data is read at build time.

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Reveal>
    <section className="py-16 md:py-24">

      {/* ── Section header ── */}
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          {/* Eyebrow label */}
          <p
            className="mb-2 font-medium uppercase tracking-widest"
            style={{
              fontSize: "var(--text-caption)",
              color: "var(--color-tx-muted)",
            }}
          >
            Featured projects
          </p>

          <h2
            className="font-medium"
            style={{
              fontSize: "var(--text-heading-lg)",
              letterSpacing: "var(--text-heading-lg--letter-spacing)",
              color: "var(--color-tx-primary)",
            }}
          >
            Things I&apos;ve built.
          </h2>
        </div>

        {/* "View all" link — hidden on mobile, shown on md+ */}
        <Link
          href="/projects"
          className="hidden md:inline-flex items-center gap-1.5 shrink-0 transition-opacity duration-[150ms] hover:opacity-60"
          style={{
            fontSize: "var(--text-body-sm)",
            color: "var(--color-tx-secondary)",
          }}
        >
          View all projects
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>

      {/* ── 3-column grid ── */}
      {/* desktop: 3 cols | tablet: 2 cols | mobile: 1 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {/* ── Mobile "View all" link ── */}
      <div className="mt-8 md:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 transition-opacity duration-[150ms] hover:opacity-60"
          style={{
            fontSize: "var(--text-body-sm)",
            color: "var(--color-tx-secondary)",
          }}
        >
          View all projects
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>

    </section>
    </Reveal>
  );
}
