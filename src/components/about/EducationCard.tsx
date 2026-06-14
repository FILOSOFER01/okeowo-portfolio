import { EDUCATION, BIO } from "@/content/data/about";

export function EducationCard() {
  return (
    <section className="py-16 border-t" style={{ borderColor: "var(--color-border)" }}>

      {/* ── Section header ── */}
      <div className="mb-10">
        <p
          className="mb-2 font-medium uppercase tracking-widest"
          style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
        >
          Background
        </p>
        <h2
          className="font-medium"
          style={{
            fontSize: "var(--text-heading-lg)",
            letterSpacing: "var(--text-heading-lg--letter-spacing)",
            color: "var(--color-tx-primary)",
          }}
        >
          Education & goals.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ── Education card ── */}
        <div
          className="rounded-xl p-6 border"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <p
            className="mb-1 font-medium uppercase tracking-widest"
            style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
          >
            Education
          </p>

          <h3
            className="font-medium mt-3 mb-1"
            style={{ fontSize: "var(--text-heading-sm)", color: "var(--color-tx-primary)" }}
          >
            {EDUCATION.institution}
          </h3>

          <p
            className="mb-4"
            style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-secondary)" }}
          >
            {EDUCATION.location}
          </p>

          {/* Degree row */}
          <div
            className="flex flex-col gap-2 py-4 border-t border-b mb-4"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Row label="Degree" value={`${EDUCATION.degree} — ${EDUCATION.field}`} />
            <Row label="Level" value={`${EDUCATION.currentLevel} (Started ${EDUCATION.startYear})`} />
            <Row label="Graduation" value={EDUCATION.expectedGraduation} />
            <Row label="Next step" value={EDUCATION.status} highlight />
          </div>

          {/* Relevant courses */}
          <p
            className="mb-3 font-medium"
            style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-primary)" }}
          >
            Relevant courses
          </p>
          <div className="flex flex-wrap gap-2">
            {EDUCATION.relevantCourses.map((course) => (
              <span
                key={course}
                className="px-2.5 py-1 rounded-md border"
                style={{
                  fontSize: "var(--text-caption)",
                  backgroundColor: "var(--color-elevated)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-tx-secondary)",
                }}
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* ── Career goals card ── */}
        <div
          className="rounded-xl p-6 border"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <p
            className="mb-1 font-medium uppercase tracking-widest"
            style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
          >
            Where I&apos;m headed
          </p>

          <h3
            className="font-medium mt-3 mb-5"
            style={{ fontSize: "var(--text-heading-sm)", color: "var(--color-tx-primary)" }}
          >
            AI-first software engineering.
          </h3>

          <div className="flex flex-col gap-4">
            {BIO.careerGoals.map((goal, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 text-xs font-mono font-medium shrink-0"
                  style={{ color: "var(--color-accent-500)" }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontSize: "var(--text-body-sm)",
                    lineHeight: "1.7",
                    color: "var(--color-tx-secondary)",
                  }}
                >
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Values row ── */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {BIO.values.map((v) => (
          <div
            key={v.title}
            className="rounded-xl p-5 border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h4
              className="font-medium mb-2"
              style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-primary)" }}
            >
              {v.title}
            </h4>
            <p
              style={{
                fontSize: "var(--text-body-sm)",
                lineHeight: "1.65",
                color: "var(--color-tx-secondary)",
              }}
            >
              {v.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

// ── Row ───────────────────────────────────────────────────────────────────────

function Row({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-muted)" }}
      >
        {label}
      </span>
      <span
        className={highlight ? "font-medium" : ""}
        style={{
          fontSize: "var(--text-body-sm)",
          color: highlight ? "var(--color-accent-500)" : "var(--color-tx-secondary)",
          textAlign: "right",
        }}
      >
        {value}
      </span>
    </div>
  );
}