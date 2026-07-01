import { ArrowUpRight } from "lucide-react";
import { getMiniProjects } from "@/content/data/mini-projects";
import { Tag, StatusBadge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

// ─── MiniProjects ─────────────────────────────────────────────────────────────
// Compact section for small, self-contained builds. Renders nothing until the
// MINI_PROJECTS list has entries, so it stays invisible until you populate it.

export function MiniProjects() {
  const projects = getMiniProjects();
  if (projects.length === 0) return null;

  return (
    <Reveal>
      <section
        className="mt-20 pt-16 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        {/* Header */}
        <div className="mb-10 max-w-[var(--width-content)]">
          <p
            className="mb-3 font-medium uppercase tracking-widest"
            style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
          >
            Lab
          </p>
          <h2
            className="font-medium mb-4"
            style={{
              fontSize: "var(--text-heading-lg)",
              letterSpacing: "var(--text-heading-lg--letter-spacing)",
              color: "var(--color-tx-primary)",
            }}
          >
            Mini projects.
          </h2>
          <p
            className="leading-relaxed"
            style={{ fontSize: "var(--text-body-md)", color: "var(--color-tx-secondary)" }}
          >
            Small, focused builds — each in its own repo and deployment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-xl border p-5 gap-3"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3
                  className="font-medium leading-snug"
                  style={{ fontSize: "var(--text-heading-sm)", color: "var(--color-tx-primary)" }}
                >
                  {project.name}
                </h3>
                {project.status && <StatusBadge status={project.status} />}
              </div>

              <p
                className="leading-relaxed"
                style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-secondary)" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
                {project.techStack.length > 4 && <Tag>+{project.techStack.length - 4}</Tag>}
              </div>

              <div
                className="mt-auto flex items-center gap-4 pt-3 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-opacity duration-[150ms] hover:opacity-60"
                    style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-secondary)" }}
                  >
                    GitHub
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-opacity duration-[150ms] hover:opacity-60"
                    style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-secondary)" }}
                  >
                    Live demo
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
