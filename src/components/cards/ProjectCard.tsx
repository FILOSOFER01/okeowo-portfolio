import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tag, StatusBadge } from "@/components/ui/Badge";
import type { Project } from "@/types";

// ─── ProjectCard ──────────────────────────────────────────────────────────────
// Used in two places:
//   1. FeaturedProjects section on the homepage (featured: true)
//   2. /projects page grid (all projects)
//
// The card links to /projects/[slug] when hasCaseStudy is true.
// Otherwise the GitHub and demo links are the primary actions.

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const {
    slug,
    title,
    description,
    status,
    techStack,
    githubUrl,
    demoUrl,
    hasCaseStudy,
  } = project;

  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl overflow-hidden",
        "border transition-all duration-[200ms]",
        "hover:border-[var(--color-border-strong)]",
        className
      )}
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* ── Cover image area ── */}
      <div
        className="h-44 w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "var(--color-elevated)" }}
      >
        {/* Status badge — top right corner */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={status} />
        </div>

        {/* Placeholder when no cover image — shows project initial */}
        <span
          className="text-4xl font-medium select-none opacity-10"
          style={{ color: "var(--color-tx-primary)" }}
          aria-hidden="true"
        >
          {title.charAt(0)}
        </span>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {techStack.length > 4 && (
            <Tag>+{techStack.length - 4}</Tag>
          )}
        </div>

        {/* Title */}
        <h3
          className="font-medium leading-snug"
          style={{
            fontSize: "var(--text-heading-sm)",
            color: "var(--color-tx-primary)",
          }}
        >
          {hasCaseStudy ? (
            <Link
              href={`/projects/${slug}`}
              className="hover:opacity-70 transition-opacity duration-[150ms]"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>

        {/* Description */}
        <p
          className="flex-1 leading-relaxed"
          style={{
            fontSize: "var(--text-body-sm)",
            color: "var(--color-tx-secondary)",
          }}
        >
          {description}
        </p>

        {/* ── Footer: links ── */}
        <div
          className="flex items-center gap-4 pt-3 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-opacity duration-[150ms] hover:opacity-60"
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--color-tx-secondary)",
              }}
            >
              GitHub
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-opacity duration-[150ms] hover:opacity-60"
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--color-tx-secondary)",
              }}
            >
              Live demo
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}

          {hasCaseStudy && (
            <Link
              href={`/projects/${slug}`}
              className="ml-auto inline-flex items-center gap-1 font-medium transition-opacity duration-[150ms] hover:opacity-70"
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--color-accent-500)",
              }}
            >
              Case study
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          )}

          {/* If no links at all, show a placeholder */}
          {!githubUrl && !demoUrl && !hasCaseStudy && (
            <span
              style={{
                fontSize: "var(--text-caption)",
                color: "var(--color-tx-muted)",
              }}
            >
              Links coming soon
            </span>
          )}
        </div>

      </div>
    </article>
  );
}