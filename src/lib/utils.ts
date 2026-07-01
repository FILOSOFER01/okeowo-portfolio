import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── cn() ─────────────────────────────────────────────────────────────────────
// The most-used function in the entire codebase.
// Merges Tailwind classes correctly — handles conflicts like "p-2 p-4" → "p-4".
// Usage: cn("base-class", condition && "conditional-class", props.className)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── formatDate() ─────────────────────────────────────────────────────────────
// Consistent date formatting across the site.
// Output examples: "January 2025", "May 14, 2025"

export function formatDate(
  date: string | Date,
  format: "month-year" | "full" = "full"
): string {
  const d = typeof date === "string" ? new Date(date) : date;

  if (format === "month-year") {
    return d.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }

  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// ─── readingTime() ────────────────────────────────────────────────────────────
// Estimates reading time from raw text content.
// Uses 200 wpm (conservative — technical content reads slower).

export function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

// ─── slugify() ────────────────────────────────────────────────────────────────
// Converts a string to a URL-safe slug.
// "My Project Name" → "my-project-name"

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ─── truncate() ───────────────────────────────────────────────────────────────
// Truncates a string to a max length, appending "…".

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "…";
}

// ─── absoluteUrl() ────────────────────────────────────────────────────────────
// Converts a relative path to an absolute URL using SITE_CONFIG.url.
// Needed for OG images and RSS feeds.

export function absoluteUrl(path: string): string {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

// ─── cx shorthand ─────────────────────────────────────────────────────────────
// Some prefer "cx" over "cn" — export both pointing to the same function.

export const cx = cn;