import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactCard } from "@/components/contact/ContactCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_CONFIG.shortName} — open to internships, collaborations, and interesting conversations.`,
};

// ─── Contact page ─────────────────────────────────────────────────────────────
// Server Component — no event handlers here.
// The form lives in ContactForm.tsx which is a Client Component.

export default function ContactPage() {
  return (
    <div
      className="mx-auto px-6 py-16 md:py-24"
      style={{ maxWidth: "var(--width-site)" }}
    >
      {/* ── Page header ── */}
      <div className="mb-16 animate-fade-up" style={{ maxWidth: "var(--width-content)" }}>
        <p
          className="mb-4 font-medium uppercase tracking-widest"
          style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
        >
          Contact
        </p>

        <h1
          className="font-medium mb-6"
          style={{
            fontSize: "var(--text-display-lg)",
            lineHeight: "var(--text-display-lg--line-height)",
            letterSpacing: "var(--text-display-lg--letter-spacing)",
            color: "var(--color-tx-primary)",
          }}
        >
          Let&apos;s talk.
        </h1>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "1.8",
            color: "var(--color-tx-secondary)",
          }}
        >
          I&apos;m currently available for internship opportunities, final-year
          projects, and freelance collaborations. If you&apos;re a recruiter,
          engineer, or someone with an interesting idea — I&apos;d love to hear
          from you. I typically respond within 24 hours.
        </p>
      </div>

      {/* ── Contact cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        <Reveal delay={0}>
          <ContactCard
            label="Email"
            title={SITE_CONFIG.email}
            description="Best way to reach me. For internship inquiries, collaborations, or just to say hello."
            href={`mailto:${SITE_CONFIG.email}`}
            actionLabel="Send an email"
          />
        </Reveal>
        {SITE_CONFIG.linkedin && (
          <Reveal delay={80}>
            <ContactCard
              label="LinkedIn"
              title="Okeowo Emmanuel"
              description="My professional profile. Connect with me here for career opportunities and networking."
              href={SITE_CONFIG.linkedin}
              actionLabel="View LinkedIn profile"
            />
          </Reveal>
        )}
        {SITE_CONFIG.github && (
          <Reveal delay={160}>
            <ContactCard
              label="GitHub"
              title="filosofer01"
              description="See what I'm building. All my projects and open source work live here."
              href={SITE_CONFIG.github}
              actionLabel="View GitHub profile"
            />
          </Reveal>
        )}
      </div>

      {/* ── Divider ── */}
      <div className="border-t mb-16" style={{ borderColor: "var(--color-border)" }} />

      {/* ── Form section ── */}
      <Reveal>
      <div style={{ maxWidth: "var(--width-content)" }}>
        <p
          className="mb-2 font-medium uppercase tracking-widest"
          style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
        >
          Send a message
        </p>
        <h2
          className="font-medium mb-2"
          style={{
            fontSize: "var(--text-heading-lg)",
            letterSpacing: "var(--text-heading-lg--letter-spacing)",
            color: "var(--color-tx-primary)",
          }}
        >
          Prefer to write directly?
        </h2>
        <p
          className="mb-10"
          style={{ fontSize: "var(--text-body-md)", color: "var(--color-tx-secondary)" }}
        >
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        {/* Client Component — handles the onSubmit event handler */}
        <ContactForm />
      </div>
      </Reveal>
    </div>
  );
}