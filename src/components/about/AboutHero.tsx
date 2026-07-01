import { Download } from "lucide-react";
import { BIO, EDUCATION, CURRENTLY_LEARNING } from "@/content/data/about";
import { SITE_CONFIG } from "@/lib/constants";
import { PhotoSlideshow } from "@/components/ui/PhotoSlideshow";

const PROFILE_PHOTOS = [
  { src: "/photos/profile-1.jpg", alt: "Okeowo Emmanuel Moyinoluwa" },
  { src: "/photos/profile-2.jpg", alt: "Okeowo Emmanuel Moyinoluwa" },
  { src: "/photos/profile-3.jpg", alt: "Okeowo Emmanuel Moyinoluwa" },
];

export function AboutHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">

        {/* ── Text column ── */}
        <div style={{ maxWidth: "var(--width-content)" }}>

          {/* ── Eyebrow ── */}
          <p
            className="mb-4 font-medium uppercase tracking-widest animate-fade-up"
            style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
          >
            About me
          </p>

          {/* ── Headline ── */}
          <h1
            className="font-medium mb-8 animate-fade-up"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--text-display-lg--line-height)",
              letterSpacing: "var(--text-display-lg--letter-spacing)",
              color: "var(--color-tx-primary)",
              animationDelay: "60ms",
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
                className="animate-fade-up"
                style={{
                  fontSize: "var(--text-body-lg)",
                  lineHeight: "1.8",
                  color: "var(--color-tx-secondary)",
                  animationDelay: `${120 + i * 60}ms`,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* ── Quick facts row ── */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-10 rounded-xl overflow-hidden border animate-fade-up"
            style={{ borderColor: "var(--color-border)", animationDelay: "320ms" }}
          >
            <FactCell label="University" value={EDUCATION.institution} />
            <FactCell label="Degree" value={`BSc ${EDUCATION.field}`} />
            <FactCell label="Status" value={EDUCATION.status} />
          </div>

          {/* ── CTA buttons ── */}
          <div
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "380ms" }}
          >
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

        {/* ── Photo column ── */}
        <div
          className="animate-fade-up lg:sticky lg:top-24 mx-auto w-full max-w-[280px] lg:max-w-none"
          style={{ animationDelay: "200ms" }}
        >
          <div
            className="rounded-2xl border overflow-hidden shadow-sm"
            style={{ borderColor: "var(--color-border)" }}
          >
            <PhotoSlideshow images={PROFILE_PHOTOS} className="aspect-[3/4] w-full" />
          </div>
        </div>

      </div>

      {/* ── Currently learning — moved here so it reads as part of the intro ── */}
      <CurrentlyLearningStrip />
    </section>
  );
}

// ── CurrentlyLearningStrip ─────────────────────────────────────────────────────
// Small inline strip — the full "Currently learning" card still lives in
// SkillsGrid. This is just a quiet, single-line callout under the hero.

function CurrentlyLearningStrip() {
  const [first] = CURRENTLY_LEARNING;
  if (!first) return null;

  return (
    <div
      className="mt-2 flex items-center gap-2 animate-fade-up"
      style={{ animationDelay: "440ms" }}
    >
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{
            backgroundColor: "var(--color-available-dot)",
            animation: "var(--animate-pulse-dot)",
          }}
          aria-hidden="true"
        />
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "var(--color-available-dot)" }}
        />
      </span>
      <p style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}>
        {first}
      </p>
    </div>
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
