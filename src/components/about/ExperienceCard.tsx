import { EXPERIENCE } from "@/content/data/about";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceCard() {
  if (EXPERIENCE.length === 0) return null;

  return (
    <Reveal>
    <section className="py-16 border-t" style={{ borderColor: "var(--color-border)" }}>

      {/* ── Section header ── */}
      <div className="mb-10">
        <p
          className="mb-2 font-medium uppercase tracking-widest"
          style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
        >
          Experience
        </p>
        <h2
          className="font-medium"
          style={{
            fontSize: "var(--text-heading-lg)",
            letterSpacing: "var(--text-heading-lg--letter-spacing)",
            color: "var(--color-tx-primary)",
          }}
        >
          Where I&apos;m working.
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {EXPERIENCE.map((exp) => (
          <div
            key={`${exp.organization}-${exp.startDate}`}
            className="rounded-xl p-6 border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3
                  className="font-medium mb-1"
                  style={{ fontSize: "var(--text-heading-sm)", color: "var(--color-tx-primary)" }}
                >
                  {exp.role}
                </h3>
                <p
                  style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-secondary)" }}
                >
                  {exp.organization}
                  {exp.location ? ` — ${exp.location}` : ""}
                </p>
              </div>

              {exp.current && (
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium shrink-0"
                  style={{
                    fontSize: "var(--text-label)",
                    backgroundColor: "var(--color-available-bg)",
                    color: "var(--color-available-text)",
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span
                      aria-hidden="true"
                      className="absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{
                        backgroundColor: "var(--color-available-dot)",
                        animation: "pulse-dot 2s ease-in-out infinite",
                      }}
                    />
                    <span
                      className="relative inline-flex h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "var(--color-available-dot)" }}
                    />
                  </span>
                  Currently interning
                </span>
              )}
            </div>

            <p
              className="mb-4"
              style={{ fontSize: "var(--text-body-sm)", lineHeight: "1.7", color: "var(--color-tx-secondary)" }}
            >
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded-md border"
                  style={{
                    fontSize: "var(--text-caption)",
                    backgroundColor: "var(--color-elevated)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-tx-secondary)",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
    </Reveal>
  );
}
