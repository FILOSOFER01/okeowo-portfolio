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
    <div className="mx-auto px-6" style={{ maxWidth: "var(--width-site)" }}>

      {/* ── Hero ── */}
      <section className="pt-10 pb-16 md:pb-20 lg:pt-28">

        {/* ── Mobile / tablet: large portrait with the name overlaid on it ── */}
        <div className="lg:hidden">
          <div
            className="relative rounded-2xl overflow-hidden border shadow-sm animate-fade-up"
            style={{ borderColor: "var(--color-border)" }}
          >
            <PhotoSlideshow images={PROFILE_PHOTOS} className="aspect-[4/5] w-full" />

            {/* Gradient scrim so the name stays readable over any photo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 34%, rgba(0,0,0,0) 60%)",
              }}
            />

            <div className="absolute inset-x-0 bottom-0 p-5 pb-7">
              <div className="mb-3">
                <AvailabilityBadge />
              </div>
              <h1
                className="font-medium"
                style={{
                  fontSize: "var(--text-display-lg)",
                  lineHeight: "var(--text-display-lg--line-height)",
                  letterSpacing: "var(--text-display-lg--letter-spacing)",
                  color: "#FFFFFF",
                }}
              >
                Okeowo Emmanuel Moyinoluwa.
              </h1>
            </div>
          </div>

          <div className="mt-8 animate-fade-up" style={{ animationDelay: "80ms" }}>
            <HeroCopy />
          </div>
        </div>

        {/* ── Desktop: name on the left, large portrait on the right ── */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_400px] gap-16 items-center">
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

            <HeroCopy />
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
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
      <div className="border-t" style={{ borderColor: "var(--color-border)" }} />

      {/* ── Featured projects ── */}
      <FeaturedProjects />

    </div>
  );
}

// ── HeroCopy ────────────────────────────────────────────────────────────────────
// Supporting paragraphs + call-to-action buttons. Shared by the mobile and
// desktop hero layouts so the copy lives in exactly one place.

function HeroCopy() {
  return (
    <>
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
        Software engineer building full-stack web applications, with a focus on
        AI, cloud, and modern web engineering. I like problems that span the full
        stack — from data models and APIs to the interface people actually use.
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
        I care about software that&apos;s fast, reliable, and honest about its
        tradeoffs. Currently a cybersecurity intern at New Horizons.
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
          Download resume
        </a>
        <a
          href="/contact"
          className="inline-flex items-center h-10 px-5 rounded-md font-medium border hover:bg-[var(--color-elevated)] transition-all duration-[150ms]"
          style={{
            fontSize: "var(--text-body-sm)",
            borderColor: "var(--color-border)",
            color: "var(--color-tx-primary)",
          }}
        >
          Contact me
        </a>
      </div>
    </>
  );
}
