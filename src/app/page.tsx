import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { AvailabilityBadge } from "@/components/ui/Badge";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function HomePage() {
  return (
    <div
      className="mx-auto px-6"
      style={{ maxWidth: "var(--width-site)" }}
    >

      {/* ── Hero ── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">

        <div className="mb-8">
          <AvailabilityBadge />
        </div>

        <h1
          className="font-medium mb-6"
          style={{
            fontSize: "var(--text-display-xl)",
            lineHeight: "var(--text-display-xl--line-height)",
            letterSpacing: "var(--text-display-xl--letter-spacing)",
            color: "var(--color-tx-primary)",
          }}
        >
          Okeowo Emmanuel
          <br />
          <span style={{ color: "var(--color-tx-muted)" }}>Moyinoluwa.</span>
        </h1>

        <p
          className="mb-10"
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--text-body-lg--line-height)",
            color: "var(--color-tx-secondary)",
            maxWidth: "var(--width-content)",
          }}
        >
          Computer Science student and aspiring software engineer. I build
          systems that are fast, readable, and honest about their tradeoffs.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="/projects"
            className="inline-flex items-center h-10 px-5 rounded-md font-medium hover:opacity-85 transition-opacity duration-[150ms]"
            style={{
              fontSize: "var(--text-body-sm)",
              backgroundColor: "var(--color-tx-primary)",
              color: "var(--color-canvas)",
            }}
          >
            View projects
          </a>
          <a
            href={SITE_CONFIG.cvPath}
            download
            className="inline-flex items-center h-10 px-5 rounded-md font-medium border hover:bg-[var(--color-elevated)] transition-all duration-[150ms]"
            style={{
              fontSize: "var(--text-body-sm)",
              borderColor: "var(--color-border)",
              color: "var(--color-tx-primary)",
            }}
          >
            Download CV
          </a>
        </div>

      </section>

      {/* ── Divider ── */}
      <div
        className="border-t"
        style={{ borderColor: "var(--color-border)" }}
      />

      {/* ── Featured projects ── */}
      <FeaturedProjects />

    </div>
  );
}