import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { AvailabilityBadge } from "@/components/ui/Badge";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { PhotoSlideshow } from "@/components/ui/PhotoSlideshow";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

const PROFILE_PHOTOS = [
  { src: "/photos/profile-1.jpg", alt: "Okeowo Emmanuel Moyinoluwa" },
  { src: "/photos/profile-2.jpg", alt: "Okeowo Emmanuel Moyinoluwa" },
  { src: "/photos/profile-3.jpg", alt: "Okeowo Emmanuel Moyinoluwa" },
];

export default function HomePage() {
  return (
    <div
      className="mx-auto px-6"
      style={{ maxWidth: "var(--width-site)" }}
    >

      {/* ── Hero ── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-center">

          {/* ── Text column ── */}
          <div>
            <div className="mb-8 animate-fade-up">
              <AvailabilityBadge />
            </div>

            <h1
              className="font-medium mb-6 animate-fade-up"
              style={{
                fontSize: "var(--text-display-xl)",
                lineHeight: "var(--text-display-xl--line-height)",
                letterSpacing: "var(--text-display-xl--letter-spacing)",
                color: "var(--color-tx-primary)",
                animationDelay: "60ms",
              }}
            >
              Okeowo Emmanuel
              <br />
              <span style={{ color: "var(--color-tx-muted)" }}>Moyinoluwa.</span>
            </h1>

            <p
              className="mb-4 animate-fade-up"
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--text-body-lg--line-height)",
                color: "var(--color-tx-secondary)",
                maxWidth: "var(--width-content)",
                animationDelay: "120ms",
              }}
            >
              Computer Science student and aspiring software engineer. I build
              systems that are fast, readable, and honest about their tradeoffs.
            </p>

            <p
              className="mb-10 animate-fade-up"
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--color-tx-muted)",
                maxWidth: "var(--width-content)",
                animationDelay: "180ms",
              }}
            >
              Currently a 6-month IT intern at New Horizons, focused on cybersecurity.
            </p>

            <div
              className="flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
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
          </div>

          {/* ── Photo column ── */}
          <div
            className="animate-fade-up mx-auto w-full max-w-[220px] lg:max-w-none order-first lg:order-last"
            style={{ animationDelay: "160ms" }}
          >
            <div
              className="rounded-2xl border overflow-hidden shadow-sm"
              style={{ borderColor: "var(--color-border)" }}
            >
              <PhotoSlideshow images={PROFILE_PHOTOS} className="aspect-[3/4] w-full" />
            </div>
          </div>

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
