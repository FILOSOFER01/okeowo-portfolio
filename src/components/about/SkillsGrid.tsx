import { getSkillsByCategory, CURRENTLY_LEARNING } from "@/content/data/about";
import { Reveal } from "@/components/ui/Reveal";

export function SkillsGrid() {
  const categories = getSkillsByCategory();

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
        {categories.map(({ category, label, skills }) => (
          <div
            key={category}
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
              {label}
            </h3>

            {/* Skills list */}
            <div className="flex flex-col gap-4">
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
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

// ── SkillBar ──────────────────────────────────────────────────────────────────

function SkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span
          style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-secondary)" }}
        >
          {name}
        </span>
        <span
          className="font-mono"
          style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
        >
          {proficiency}%
        </span>
      </div>

      {/* Track */}
      <div
        className="h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: "var(--color-elevated)" }}
        role="progressbar"
        aria-valuenow={proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency ${proficiency}%`}
      >
        {/* Fill */}
        <div
          className="h-full rounded-full"
          style={{
            width: `${proficiency}%`,
            backgroundColor: "var(--color-accent-500)",
            opacity: 0.5 + (proficiency / 100) * 0.5,
          }}
        />
      </div>
    </div>
  );
}