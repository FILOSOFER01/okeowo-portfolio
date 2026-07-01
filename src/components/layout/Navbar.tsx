"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

// ─── Navbar ───────────────────────────────────────────────────────────────────
// Sticky header with backdrop blur on scroll. Dark mode toggle. Mobile drawer.
//
// Hover states: we use CSS `group` + arbitrary-value bg on hover rather than
// JS onMouseEnter/onMouseLeave, which is fragile when child elements are
// the event target. All colors reference CSS custom properties so they
// automatically respond to the .dark override in globals.css.

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full",
          "transition-[border-color,background-color] duration-[200ms]",
          scrolled
            ? "border-b backdrop-blur-sm"
            : "border-b border-transparent"
        )}
        style={{
          // color-mix gives us 90% opacity on the canvas color without an
          // alpha hex — works in all modern browsers and respects dark mode
          // because --color-canvas is already overridden by .dark {}
          backgroundColor: "color-mix(in srgb, var(--color-canvas) 92%, transparent)",
          borderColor: scrolled ? "var(--color-border)" : "transparent",
        }}
      >
        <nav
          className="mx-auto flex h-14 max-w-[var(--width-site)] items-center justify-between px-6"
          aria-label="Main navigation"
        >
          {/* ── Logo ────────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="text-[var(--text-body-sm)] font-medium transition-opacity duration-[150ms] hover:opacity-60"
            style={{ color: "var(--color-tx-primary)" }}
          >
            {SITE_CONFIG.handle}
            <span style={{ color: "var(--color-accent-500)" }}>.</span>
          </Link>

          {/* ── Desktop links ────────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname?.startsWith(link.href) ?? false;
              return (
                <NavLink key={link.href} href={link.href} isActive={isActive}>
                  {link.label}
                </NavLink>
              );
            })}
          </div>

          {/* ── Right side ───────────────────────────────────────────────────── */}
          <div className="flex items-center gap-2">
            <DarkModeToggle />

            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center",
                "h-8 px-4 rounded-md",
                "text-[var(--text-body-sm)] font-medium",
                "transition-opacity duration-[150ms] hover:opacity-85"
              )}
              style={{
                backgroundColor: "var(--color-tx-primary)",
                color: "var(--color-canvas)",
              }}
            >
              Contact
            </Link>

            {/* Mobile menu toggle */}
            <button
              className={cn(
                "md:hidden flex items-center justify-center",
                "h-8 w-8 rounded-md",
                "transition-colors duration-[150ms]",
                "hover:bg-[var(--color-elevated)]"
              )}
              style={{ color: "var(--color-tx-secondary)" }}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile drawer ────────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-14 z-40 md:hidden border-t"
          style={{
            backgroundColor: "var(--color-canvas)",
            borderColor: "var(--color-border)",
            animation: "fade-in 0.15s ease-out both",
          }}
        >
          <div className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname?.startsWith(link.href) ?? false;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-[var(--text-body-md)] transition-colors duration-[150ms]"
                  style={{
                    color: isActive ? "var(--color-tx-primary)" : "var(--color-tx-secondary)",
                    backgroundColor: isActive ? "var(--color-elevated)" : "transparent",
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div
              className="mt-3 pt-4 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-center w-full h-11 rounded-lg text-[var(--text-body-md)] font-medium"
                style={{
                  backgroundColor: "var(--color-tx-primary)",
                  color: "var(--color-canvas)",
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── NavLink ──────────────────────────────────────────────────────────────────
// Extracted so active vs inactive styling is in one place.

function NavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-1.5 rounded-md",
        "text-[var(--text-body-sm)]",
        "transition-colors duration-[150ms]",
        // Active: elevated bg + primary text
        // Inactive: hover brings elevated bg + primary text
        isActive
          ? "font-medium"
          : "hover:bg-[var(--color-elevated)]"
      )}
      style={{
        color: isActive ? "var(--color-tx-primary)" : "var(--color-tx-secondary)",
        backgroundColor: isActive ? "var(--color-elevated)" : undefined,
      }}
    >
      {children}
    </Link>
  );
}

// ─── DarkModeToggle ───────────────────────────────────────────────────────────
// Renders null on the server pass to avoid hydration mismatch.
// next-themes needs the mounted check.

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Render a same-size placeholder before mount so layout doesn't shift
  if (!mounted) {
    return <div className="h-8 w-8" aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex items-center justify-center h-8 w-8 rounded-md",
        "transition-colors duration-[150ms]",
        "hover:bg-[var(--color-elevated)]"
      )}
      style={{ color: "var(--color-tx-secondary)" }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}