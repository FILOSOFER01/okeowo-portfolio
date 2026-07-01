import type { Experience } from "@/types";

// ─── BIO ──────────────────────────────────────────────────────────────────────

export const BIO = {
  short:
    "Software engineer and Computer Science student building full-stack web applications, with a focus on AI, cloud, and modern web engineering.",

  paragraphs: [
    "I'm a software engineer and Computer and Information Science student at Lead City University. I build full-stack web applications end to end, and I care most about the details that decide whether software holds up in the real world — clean data models, sensible APIs, and interfaces that stay fast and predictable.",
    "My focus sits where AI, cloud, and modern web engineering meet. I use AI tooling deliberately to build and ship faster, and I'm steadily going deeper on the backend and infrastructure side. Right now I'm a cybersecurity intern at New Horizons — a six-month IT internship I began in June 2026 — learning how real systems are attacked and defended. I'm looking for software engineering work where I can ship real code, learn from stronger engineers, and grow fast.",
  ],

  values: [
    {
      title: "Build to learn",
      description:
        "I learn fastest by building. I'd rather ship a rough version, find where it breaks, and understand the why from there than wait until everything is theoretically clear.",
    },
    {
      title: "Persistent through friction",
      description:
        "When something breaks, I debug it — I don't route around it. Most of what I know came from staying with a hard problem until it gave.",
    },
    {
      title: "AI as a force multiplier",
      description:
        "I use AI tools deliberately to move faster and learn deeper. Prompt engineering is a real skill, and I treat it like one.",
    },
    {
      title: "Outcome-focused",
      description:
        "I care about what actually ships and whether it works — not how impressive the process looked. A deployed project beats a perfect plan.",
    },
  ],

  careerGoals: [
    "Near term: a software engineering role where AI is core to the product — not a bolt-on gimmick — and where I can ship real code from day one.",
    "I'm drawn to the systems other people rely on: data pipelines, AI-integrated backends, and developer tools.",
    "I'm deliberately building toward stronger backend, cloud, and infrastructure skills as I take on more ambitious projects.",
  ],
} as const;

// ─── EDUCATION ────────────────────────────────────────────────────────────────

export const EDUCATION = {
  institution:        "Lead City University",
  location:           "Ibadan, Nigeria",
  degree:             "Bachelor of Science",
  field:              "Computer and Information Science",
  startYear:          2023,
  expectedGraduation: "2027",
  currentLevel:       "300 Level",
  status:             "Interning at New Horizons (Cybersecurity)",
  relevantCourses: [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Computer Networks",
    "Database Systems",
    "Operating Systems",
    "ICT Project Development",
  ],
} as const;

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

export const EXPERIENCE: Experience[] = [
  {
    role:         "IT Intern — Cybersecurity",
    organization: "New Horizons",
    startDate:    "2026-06",
    current:      true,
    focusAreas: [
      "Security fundamentals",
      "Network security",
      "Threat awareness",
      "IT operations",
    ],
    description:
      "A six-month IT internship focused on cybersecurity, started June 2026 — getting hands-on with security fundamentals, network defense, and day-to-day IT operations alongside working engineers.",
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
// Grouped by area, no self-rated percentages. Only technologies actually used
// in real work are listed; anything still early-stage is marked "(learning)"
// so nothing here overstates current experience.

export const SKILL_GROUPS = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML & CSS"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & APIs",
    skills: ["Next.js API routes", "Node.js (learning)", "REST APIs"],
  },
  {
    label: "Data & AI",
    skills: [
      "MongoDB",
      "Apache Spark / PySpark (learning)",
      "Prompt engineering",
      "LLM workflows",
      "AI-assisted development",
    ],
  },
  {
    label: "Cloud & Deployment",
    skills: ["Vercel", "Netlify", "GitHub Pages", "Docker (learning)"],
  },
  {
    label: "Tools",
    skills: ["Git & GitHub", "Linux", "VS Code", "Command line"],
  },
] as const;

// ─── CURRENTLY_LEARNING ───────────────────────────────────────────────────────

export const CURRENTLY_LEARNING = [
  "Cybersecurity — hands-on during my internship at New Horizons",
  "Backend & APIs — data models, authentication, and server-side logic",
  "Cloud fundamentals — deploying and running apps beyond static hosting",
  "AI application development — building products with LLMs as a core feature",
] as const;
