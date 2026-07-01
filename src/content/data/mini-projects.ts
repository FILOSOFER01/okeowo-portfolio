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

export const MINI_PROJECTS: MiniProject[] = [
  {
    name: "Password Generator",
    description:
      "A privacy-first password generator that runs entirely in the browser — cryptographically secure, with adjustable length, character sets, and a live entropy strength meter.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Crypto API"],
    repoUrl: "https://github.com/FILOSOFER01/password-generator",
    liveUrl: "https://password-generator-iota-lovat-10.vercel.app/",
    status: "shipped",
  },
];

export function getMiniProjects(): MiniProject[] {
  return MINI_PROJECTS;
}
