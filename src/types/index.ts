// ─── Project types ────────────────────────────────────────────────────────────

export type ProjectStatus = "shipped" | "in-progress" | "archived";

export interface Project {
  slug: string;
  title: string;
  description: string;        // 1-sentence outcome. Recruiter reads this first.
  longDescription?: string;   // 2–3 sentence expanded description for /projects
  status: ProjectStatus;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  coverImage?: string;        // path relative to /public/
  featured: boolean;          // shown on home page if true
  startDate: string;          // ISO date string: "2024-09"
  endDate?: string;           // omit if in-progress
  outcomes?: string[];        // bullet-point results shown in case study sidebar
  hasCaseStudy: boolean;      // if true, /projects/[slug] renders the MDX file
}

// ─── Experience types ─────────────────────────────────────────────────────────

export interface Experience {
  role: string;
  organization: string;
  location?: string;
  startDate: string;          // ISO date string: "2026-07"
  endDate?: string;           // omit if current is true
  current: boolean;
  focusAreas: string[];
  description: string;
}

// ─── Blog types ───────────────────────────────────────────────────────────────
// Used in v2. Defined here so types exist before the feature is built.

export type BlogCategory =
  | "build-log"
  | "cs-concepts"
  | "tools"
  | "career"
  | "book-notes";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;       // ISO date string
  updatedAt?: string;
  readingTime: number;       // minutes
  viewCount?: number;        // populated from DB in v2
  featured?: boolean;
}

// ─── Skill types ──────────────────────────────────────────────────────────────

export type SkillCategory =
  | "languages"
  | "frameworks"
  | "tools"
  | "concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number;       // 0–100, used for the progress bar width
  projectSlugs?: string[];   // links skill to evidence
}

// ─── Navigation types ─────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// ─── Contact form types ───────────────────────────────────────────────────────

export type ContactSubject =
  | "internship"
  | "collaboration"
  | "question"
  | "other";

export interface ContactFormData {
  name: string;
  email: string;
  subject: ContactSubject;
  message: string;
}

export interface ContactFormState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
}

// ─── Common component props ───────────────────────────────────────────────────

export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children: React.ReactNode;
}