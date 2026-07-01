import { z } from "zod";

// ─── Contact form schema ──────────────────────────────────────────────────────
// Shared by the client form (react-hook-form) and the API route so the exact
// same validation runs in the browser and again on the server.

export const SUBJECTS = [
  "internship",
  "collaboration",
  "freelance",
  "question",
  "other",
] as const;

export type ContactSubjectValue = (typeof SUBJECTS)[number];

export const SUBJECT_LABELS: Record<ContactSubjectValue, string> = {
  internship: "Internship opportunity",
  collaboration: "Project collaboration",
  freelance: "Freelance work",
  question: "General question",
  other: "Other",
};

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Enter a valid email address."),
  subject: z.enum(SUBJECTS),
  message: z
    .string()
    .trim()
    .min(10, "Please write a short message (at least 10 characters).")
    .max(5000, "That message is a little long — please shorten it."),
});

export type ContactValues = z.infer<typeof contactSchema>;
