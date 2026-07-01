import type { MiniProject } from "@/types";

// ─── Mini projects ────────────────────────────────────────────────────────────
// Small, focused builds. Each one lives in its OWN GitHub repo and its OWN
// deployment — this list only stores the display info and links to them.
//
// To add one, append an object below. The Mini Projects section appears on the
// /projects page automatically once this array has at least one entry.
//
// Example shape:
// {
//   name: "URL Shortener",
//   description: "A tiny link shortener with click analytics.",
//   techStack: ["Next.js", "TypeScript", "PostgreSQL"],
//   repoUrl: "https://github.com/filosofer01/url-shortener",
//   liveUrl: "https://url-shortener.vercel.app",
//   status: "shipped",
// },

export const MINI_PROJECTS: MiniProject[] = [];

export function getMiniProjects(): MiniProject[] {
  return MINI_PROJECTS;
}
