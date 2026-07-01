import { SKILL_GROUPS, CURRENTLY_LEARNING } from "@/content/data/about";
import { Reveal } from "@/components/ui/Reveal";

export function SkillsGrid() {
  return (
    <Reveal>
    <section className="py-16 border-t" style={{ borderColor: "var(--color-border)" }}>

      {/* ── Section header ── */}
      <div className="mb-10">
        <p
          className="mb-2 font-medium uppercase tracking-widest"
          style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
        >
          Skills
        </p>
        <h2
          className="font-medium"
          style={{
            fontSize: "var(--text-heading-lg)",
            letterSpacing: "var(--text-heading-lg--letter-spacing)",
            color: "var(--color-tx-primary)",
          }}
        >
          What I work with.
        </h2>
      </div>

      {/* ── Skills categories grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.label}
            className="rounded-xl p-6 border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            {/* Category label */}
            <h3
              className="mb-5 font-medium"
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--color-tx-primary)",
              }}
            >
              {group.label}
            </h3>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md border"
                  style={{
                    fontSize: "var(--text-caption)",
                    backgroundColor: "var(--color-elevated)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-tx-secondary)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Currently learning ── */}
      <div
        className="rounded-xl p-6 border"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          {/* Animated green dot — signals this section is live/active */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{
                backgroundColor: "var(--color-available-dot)",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--color-available-dot)" }}
            />
          </span>
          <h3
            className="font-medium"
            style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-primary)" }}
          >
            Currently learning
          </h3>
        </div>

        <ul className="flex flex-col gap-3">
          {CURRENTLY_LEARNING.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3"
              style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-secondary)" }}
            >
              <span
                className="mt-2 h-1 w-1 rounded-full shrink-0"
                style={{ backgroundColor: "var(--color-tx-muted)" }}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

    </section>
    </Reveal>
  );
}
