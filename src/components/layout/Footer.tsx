import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, NAV_LINKS, AVAILABILITY_CONFIG } from "@/lib/constants";

// ─── Footer ───────────────────────────────────────────────────────────────────
// No lucide-react brand icons — they are unstable across versions.
// Social links render as plain styled text instead.

export function Footer() {
  const availability = AVAILABILITY_CONFIG[SITE_CONFIG.availability];
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-24 border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div
        className="mx-auto px-6 py-12"
        style={{ maxWidth: "var(--width-site)" }}
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto]">

          {/* ── Brand column ── */}
          <div style={{ maxWidth: "18rem" }}>
            <Link
              href="/"
              className="font-medium transition-opacity duration-[150ms] hover:opacity-60"
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--color-tx-primary)",
              }}
            >
              {SITE_CONFIG.handle}
              <span style={{ color: "var(--color-accent-500)" }}>.</span>
            </Link>

            <p
              className="mt-3 leading-relaxed"
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--color-tx-secondary)",
              }}
            >
              Computer Science student. Building things that matter.
            </p>

            {/* Availability badge */}
            <div className="mt-4">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium"
                style={{
                  fontSize: "var(--text-label)",
                  backgroundColor: `var(--color-${SITE_CONFIG.availability}-bg)`,
                  color: `var(--color-${SITE_CONFIG.availability}-text)`,
                }}
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  {SITE_CONFIG.availability === "available" && (
                    <span
                      aria-hidden="true"
                      className="absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{
                        backgroundColor: `var(--color-${SITE_CONFIG.availability}-dot)`,
                        animation: "pulse-dot 2s ease-in-out infinite",
                      }}
                    />
                  )}
                  <span
                    className="relative inline-flex h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: `var(--color-${SITE_CONFIG.availability}-dot)`,
                    }}
                  />
                </span>
                {availability.label}
              </span>
            </div>
          </div>

          {/* ── Nav columns ── */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16">

            {/* Pages */}
            <div>
              <h3
                className="mb-4 font-medium uppercase"
                style={{
                  fontSize: "var(--text-caption)",
                  letterSpacing: "0.06em",
                  color: "var(--color-tx-muted)",
                }}
              >
                Pages
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-opacity duration-[150ms] hover:opacity-60"
                      style={{
                        fontSize: "var(--text-body-sm)",
                        color: "var(--color-tx-secondary)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="transition-opacity duration-[150ms] hover:opacity-60"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-tx-secondary)",
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.cvPath}
                    download
                    className="transition-opacity duration-[150ms] hover:opacity-60"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-tx-secondary)",
                    }}
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3
                className="mb-4 font-medium uppercase"
                style={{
                  fontSize: "var(--text-caption)",
                  letterSpacing: "0.06em",
                  color: "var(--color-tx-muted)",
                }}
              >
                Connect
              </h3>
              <ul className="space-y-3">
                {SITE_CONFIG.github && (
                  <li>
                    <a
                      href={SITE_CONFIG.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity duration-[150ms] hover:opacity-60"
                      style={{
                        fontSize: "var(--text-body-sm)",
                        color: "var(--color-tx-secondary)",
                      }}
                    >
                      GitHub
                    </a>
                  </li>
                )}
                {SITE_CONFIG.linkedin && (
                  <li>
                    <a
                      href={SITE_CONFIG.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity duration-[150ms] hover:opacity-60"
                      style={{
                        fontSize: "var(--text-body-sm)",
                        color: "var(--color-tx-secondary)",
                      }}
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                {SITE_CONFIG.twitter && (
                  <li>
                    <a
                      href={SITE_CONFIG.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity duration-[150ms] hover:opacity-60"
                      style={{
                        fontSize: "var(--text-body-sm)",
                        color: "var(--color-tx-secondary)",
                      }}
                    >
                      Twitter
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="transition-opacity duration-[150ms] hover:opacity-60"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-tx-secondary)",
                    }}
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}>
            © {year} {SITE_CONFIG.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}