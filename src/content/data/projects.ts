import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    // ── TakerBank ─────────────────────────────────────────────────────────────
    slug:  "takerbank",
    title: "TakerBank",
    description:
      "A fully-functioning digital banking website with account management, loans, cards, and mobile banking — built as a group project for ICT 211.",
    longDescription:
      "TakerBank is a multi-page digital banking platform built by a 10-person team for our ICT 211 course. It covers the full surface area of a real banking product: account opening, loan applications, card services, mobile banking, support, and an FAQ. My contribution focused on front-end structure and page layout. Deployed live on GitHub Pages.",
    status:     "shipped",
    techStack:  ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    githubUrl:  "https://github.com/filosofer01/TakerBank",
    demoUrl:    "https://filosofer01.github.io/TakerBank/index.html",
    coverImage: "/projects/takerbank.png",
    featured:   true,
    startDate:  "2024-01",
    endDate:    "2025-01",
    outcomes: [
      "Built with a 10-person team across Computer and Information Science",
      "7 fully-functioning pages: Home, About, Loans, Cards, Support, FAQ, Login",
      "Deployed live on GitHub Pages",
      "Designed around an African digital banking use case",
    ],
    hasCaseStudy: false,
  },

  {
    // ── Big Data Analytics — MongoDB & Apache Spark ────────────────────────────
    slug:  "big-data-analytics-mongodb-spark",
    title: "Big Data Analytics with MongoDB & Apache Spark",
    description:
      "Generated and analysed 5,000 synthetic tweet records using Python, MongoDB, and PySpark — identifying top users, trending hashtags, and high-engagement content.",
    longDescription:
      "Built for the DTS 312 Big Data Computing course at Lead City University. The project involved setting up a full big data environment on Kali Linux using Oracle VirtualBox, then writing a Python script with the Faker library to generate 5,000 realistic tweet records. The dataset was stored in MongoDB 6.0.27 and loaded into Apache Spark 3.5.1 via the MongoDB Spark Connector. PySpark was used to clean the data, explore the schema, and run analytical queries — including identifying the most active users, the most-used hashtags, tweets with retweet counts above 1,000, and the average engagement across the dataset.",
    status:     "shipped",
    techStack:  ["Python", "Apache Spark", "PySpark", "MongoDB", "Docker", "Kali Linux", "Faker"],
    githubUrl:  "",
    demoUrl:    "",
    coverImage: "/projects/big-data-spark.png",
    featured:   true,
    startDate:  "2026-04",
    endDate:    "2026-04",
    outcomes: [
      "Generated 5,000 synthetic tweet records using Python and the Faker library",
      "Bulk-inserted the full dataset into MongoDB and verified with countDocuments()",
      "Connected MongoDB to Apache Spark 3.5.1 via the MongoDB Spark Connector",
      "Cleaned data in PySpark: removed nulls and duplicates from 5,000 records",
      "Queried tweets with retweet_count > 1,000 using both MongoDB shell and PySpark",
      "Identified top users, top hashtags, and language distribution across the dataset",
    ],
    hasCaseStudy: false,
  },

  {
    // ── SummitGuard ───────────────────────────────────────────────────────────
    // Verified from two live deployments:
    //   https://filosofer01.github.io/summitgaurd/
    //   https://summitguard.netlify.app/
    // Static file fingerprinting (/static/img/*.hash.ext) confirms Django origin.
    slug:  "summitguard",
    title: "SummitGuard",
    description:
      "A professional multi-page insurance company website with 6 service categories, a contact form, careers section, and leadership page — deployed on both GitHub Pages and Netlify.",
    longDescription:
      "SummitGuard is a fully-featured business website built for a fictional insurance brand, Atlas Trust Group. The site covers the complete surface area of a real company's web presence: a homepage with an image carousel, six insurance service pages (Life, Health, Home, Vehicle, Business, Property), an About page, a Careers section, a Leadership page, and a Contact form. The project demonstrates the ability to design and build production-quality, multi-page websites and deploy them across multiple hosting platforms simultaneously. The site is live on both GitHub Pages and Netlify.",
    status:     "shipped",
    techStack:  ["HTML", "CSS", "JavaScript", "Django", "GitHub Pages", "Netlify"],
    githubUrl:  "https://github.com/filosofer01/summitgaurd",
    demoUrl:    "https://summitguard.netlify.app/",
    coverImage: "/projects/summitguard.png",
    featured:   true,
    startDate:  "2025-01",
    endDate:    "2025-06",
    outcomes: [
      "6 insurance service pages: Life, Health, Home, Vehicle, Business, and Property",
      "Full multi-page site: Home, About, Services, Careers, Leadership, Contact",
      "Deployed simultaneously to GitHub Pages and Netlify",
      "Responsive design with image carousel and contact form",
      "Professional business content structured for real-world use",
    ],
    hasCaseStudy: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured).slice(0, 3);
}

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}