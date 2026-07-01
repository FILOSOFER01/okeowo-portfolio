import type { Metadata } from "next";

// ─── Site configuration ───────────────────────────────────────────────────────
// Single source of truth. Import from here everywhere — never hardcode strings.

export const SITE_CONFIG = {
  name: "Okeowo Emmanuel Moyinoluwa",
  shortName: "Okeowo Emmanuel",
  handle: "Filosofer",
  title: "Okeowo Emmanuel — Software Engineer",
  description:
    "Software engineer building full-stack web applications, with a focus on AI, cloud, and modern web engineering.",
  url: "https://okeowo-portfolio.vercel.app",   // update if you add a custom domain
  email: "emmanuelokeowo14@gmail.com",       // TODO: update to your real email
  availability: "available" as AvailabilityStatus,
  github: "https://github.com/filosofer01",        // TODO: update
  linkedin: "https://www.linkedin.com/in/okeowo-emmanuel-9aab0b356", // TODO: update
  twitter: "",
  cvPath: "/cv.pdf",
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────

export type AvailabilityStatus = "available" | "considering" | "unavailable";

// ─── Availability badge config ────────────────────────────────────────────────
// Maps status → display label only.
// Colors are applied via CSS custom properties in the component (not utility
// classes) because the token names are not registered as Tailwind utilities —
// they exist only as CSS variables (--color-available-bg, etc.) in globals.css.

export const AVAILABILITY_CONFIG: Record<AvailabilityStatus, { label: string }> = {
  available:   { label: "Open to internships" },
  considering: { label: "Considering offers" },
  unavailable: { label: "Not available" },
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  // { label: "Blog", href: "/blog" }, // uncomment when blog is live in v2
] as const;

// ─── Metadata defaults ────────────────────────────────────────────────────────

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s — ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};