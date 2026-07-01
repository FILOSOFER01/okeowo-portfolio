import type { Skill, Experience } from "@/types";

// ─── BIO ──────────────────────────────────────────────────────────────────────

export const BIO = {
  short:
    "Computer Science student at Lead City University, currently interning in cybersecurity at New Horizons, building toward a career at the intersection of AI and software engineering.",

  paragraphs: [
    "I'm Okeowo Emmanuel Moyinoluwa, a 300-level Computer and Information Science student at Lead City University, Ibadan. I build things — websites, tools, and systems — because I learn best when something real is at stake. Every project I've shipped has taught me more than any lecture.",
    "My focus right now is full-stack web development and AI-powered applications. I'm drawn to how large language models and AI tooling are changing what individual developers can build — and I want to be someone who builds with those tools, not just someone who uses them.",
    "I'm currently doing a 6-month IT internship at New Horizons, focused on cybersecurity — learning how systems get attacked and how to design and defend them properly. I'm looking for an environment where I can contribute real work, learn from engineers who are better than me, and grow fast. Long term, I want to build my own startup. I'm already working on something.",
  ],

  values: [
    {
      title: "Build to learn",
      description:
        "I don't wait until I fully understand something before I start. I build first, break things, then understand why. The portfolio you're reading right now is a good example.",
    },
    {
      title: "Persistent through friction",
      description:
        "When something breaks I debug it, not abandon it. I've pushed through every technical problem building this portfolio instead of giving up — that's how I approach everything.",
    },
    {
      title: "AI as a force multiplier",
      description:
        "I use AI tools deliberately — to move faster, learn deeper, and ship better work. Prompt engineering is a real skill and I treat it like one.",
    },
    {
      title: "Outcome-focused",
      description:
        "I care about what gets built and whether it works — not how impressive the process looked. A deployed project beats a perfect plan every time.",
    },
  ],

  careerGoals: [
    "In the near term, I want to work as a software engineer on products that use AI in meaningful ways — not as a gimmick, but as the core of what makes the product useful.",
    "I'm especially interested in roles where I can work on data pipelines, AI-integrated backends, or developer tools — systems that other engineers or end users rely on every day.",
    "The longer arc: I want to build my own startup. I'm already thinking about what that looks like. The internship is the next step toward having the skills and credibility to make that happen.",
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
    startDate:    "2026-07",
    current:      true,
    focusAreas: [
      "Security fundamentals",
      "Network security",
      "Threat awareness",
      "IT operations",
    ],
    description:
      "Currently 6 months into an IT internship focused on cybersecurity — getting hands-on with security fundamentals, network defense, and day-to-day IT operations alongside working engineers.",
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
// Proficiency is 0–100. These reflect where you actually are right now.
// Honest numbers build trust. A recruiter who hires you based on inflated
// scores becomes a problem on day one.

export const SKILLS: Skill[] = [
  // ── Languages (unchanged) ────────────────────────────────────────────────────
  { name: "JavaScript",  category: "languages",  proficiency: 75 },
  { name: "HTML & CSS",  category: "languages",  proficiency: 85 },
  { name: "TypeScript",  category: "languages",  proficiency: 45 },
  { name: "Python",      category: "languages",  proficiency: 40 },

  // ── Frameworks & libraries ───────────────────────────────────────────────────
  // Unchanged: React, Next.js, Tailwind CSS
  // Added: Apache Spark / PySpark — used in DTS 312 Big Data assignment
  { name: "React",                  category: "frameworks", proficiency: 50 },
  { name: "Next.js",                category: "frameworks", proficiency: 45 },
  { name: "Tailwind CSS",           category: "frameworks", proficiency: 65 },
  { name: "Apache Spark / PySpark", category: "frameworks", proficiency: 35 },

  // ── Tools & workflow ─────────────────────────────────────────────────────────
  // Unchanged: Git & GitHub, VS Code, Command Line, GitHub Pages
  // Added: MongoDB — used in DTS 312 Big Data assignment
  // Added: Linux — confirmed by Kali Linux environment in the same assignment
  { name: "Git & GitHub",   category: "tools", proficiency: 70 },
  { name: "VS Code",        category: "tools", proficiency: 85 },
  { name: "Command Line",   category: "tools", proficiency: 60 },
  { name: "GitHub Pages",   category: "tools", proficiency: 75 },
  { name: "MongoDB",        category: "tools", proficiency: 35 },
  { name: "Linux",          category: "tools", proficiency: 40 },

  // ── AI & problem solving ─────────────────────────────────────────────────────
  // Unchanged: Prompt Engineering, AI-assisted dev, LLM workflows, Algorithmic thinking
  // Added: Data Analysis — supported by both the Big Data assignment and AI work
  { name: "Prompt Engineering",   category: "concepts", proficiency: 80 },
  { name: "AI-assisted dev",      category: "concepts", proficiency: 75 },
  { name: "LLM workflows",        category: "concepts", proficiency: 65 },
  { name: "Algorithmic thinking", category: "concepts", proficiency: 70 },
  { name: "Data Analysis",        category: "concepts", proficiency: 45 },
  { name: "Cybersecurity Fundamentals", category: "concepts", proficiency: 35 },
];

export function getSkillsByCategory() {
  const order: Skill["category"][] = ["languages", "frameworks", "tools", "concepts"];
  const labels: Record<Skill["category"], string> = {
    languages:  "Languages",
    frameworks: "Frameworks & libraries",
    tools:      "Tools & workflow",
    concepts:   "AI & problem solving",
  };
  return order.map((cat) => ({
    category: cat,
    label:    labels[cat],
    skills:   SKILLS.filter((s) => s.category === cat),
  }));
}

// ─── CURRENTLY_LEARNING ───────────────────────────────────────────────────────

export const CURRENTLY_LEARNING = [
  "Cybersecurity — hands-on during my internship at New Horizons",
  "TypeScript — using it daily building this portfolio",
  "React & Next.js — learning the ecosystem by shipping real pages",
  "AI application development — how to build products that use LLMs as a core feature",
  "Full-stack fundamentals — databases, APIs, authentication",
] as const;
