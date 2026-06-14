import { Download } from "lucide-react";
import { BIO, EDUCATION, CURRENTLY_LEARNING } from "@/content/data/about";
import { SITE_CONFIG } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="py-16 md:py-24">
      <div style={{ maxWidth: "var(--width-content)" }}>

        {/* ── Eyebrow ── */}
        <p
          className="mb-4 font-medium uppercase tracking-widest"
          style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
        >
          About me
        </p>

        {/* ── Headline ── */}
        <h1
          className="font-medium mb-8"
          style={{
            fontSize: "var(--text-display-lg)",
            lineHeight: "var(--text-display-lg--line-height)",
            letterSpacing: "var(--text-display-lg--letter-spacing)",
            color: "var(--color-tx-primary)",
          }}
        >
          Building toward AI-powered software —{" "}
          <span style={{ color: "var(--color-tx-muted)" }}>
            one project at a time.
          </span>
        </h1>

        {/* ── Bio paragraphs ── */}
        <div className="flex flex-col gap-5 mb-10">
          {BIO.paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "1.8",
                color: "var(--color-tx-secondary)",
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* ── Quick facts row ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-10 rounded-xl overflow-hidden border"
          style={{ borderColor: "var(--color-border)" }}
        >
          <FactCell label="University" value={EDUCATION.institution} />
          <FactCell label="Degree" value={`BSc ${EDUCATION.field}`} />
          <FactCell label="Status" value={EDUCATION.status} />
        </div>

        {/* ── CTA buttons ── */}
        <div className="flex flex-wrap gap-3">
          <a
            href={SITE_CONFIG.cvPath}
            download
            className="inline-flex items-center gap-2 h-10 px-5 rounded-md font-medium transition-opacity duration-[150ms] hover:opacity-85"
            style={{
              fontSize: "var(--text-body-sm)",
              backgroundColor: "var(--color-tx-primary)",
              color: "var(--color-canvas)",
            }}
          >
            <Download size={15} aria-hidden="true" />
            Download CV
          </a>

          {SITE_CONFIG.linkedin && (
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-md font-medium border transition-all duration-[150ms] hover:bg-[var(--color-elevated)]"
              style={{
                fontSize: "var(--text-body-sm)",
                borderColor: "var(--color-border)",
                color: "var(--color-tx-primary)",
              }}
            >
              LinkedIn
            </a>
          )}

          {SITE_CONFIG.github && (
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-md font-medium border transition-all duration-[150ms] hover:bg-[var(--color-elevated)]"
              style={{
                fontSize: "var(--text-body-sm)",
                borderColor: "var(--color-border)",
                color: "var(--color-tx-primary)",
              }}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

// ── FactCell ──────────────────────────────────────────────────────────────────

function FactCell({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="px-5 py-4"
      style={{ backgroundColor: "var(--color-elevated)" }}
    >
      <p
        className="mb-1 font-medium uppercase tracking-widest"
        style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
      >
        {label}
      </p>
      <p
        className="font-medium"
        style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-primary)" }}
      >
        {value}
      </p>
    </div>
  );
}