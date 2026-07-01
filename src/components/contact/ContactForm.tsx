"use client";

// ─── ContactForm ──────────────────────────────────────────────────────────────
// Must be a Client Component because it uses onSubmit (an event handler).
// The form is UI-only for now — submission wired up later with Resend.

export function ContactForm() {
  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          id="name"
          label="Your name"
          type="text"
          placeholder="Emmanuel Okeowo"
          required
        />
        <FormField
          id="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="font-medium"
          style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-primary)" }}
        >
          Subject
        </label>
        <select
          id="subject"
          className="h-10 px-3 rounded-md border outline-none transition-colors duration-[150ms]"
          style={{
            fontSize: "var(--text-body-sm)",
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
            color: "var(--color-tx-primary)",
          }}
          defaultValue=""
        >
          <option value="" disabled>Select a subject…</option>
          <option value="internship">Internship opportunity</option>
          <option value="collaboration">Project collaboration</option>
          <option value="freelance">Freelance work</option>
          <option value="question">General question</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-medium"
          style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-primary)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me what you have in mind…"
          required
          className="px-3 py-2.5 rounded-md border outline-none resize-none transition-colors duration-[150ms]"
          style={{
            fontSize: "var(--text-body-sm)",
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
            color: "var(--color-tx-primary)",
            lineHeight: "1.6",
          }}
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="inline-flex items-center h-10 px-6 rounded-md font-medium transition-opacity duration-[150ms] hover:opacity-85"
          style={{
            fontSize: "var(--text-body-sm)",
            backgroundColor: "var(--color-tx-primary)",
            color: "var(--color-canvas)",
          }}
        >
          Send message
        </button>
        <p
          className="mt-3"
          style={{ fontSize: "var(--text-caption)", color: "var(--color-tx-muted)" }}
        >
          Form submission will be wired up shortly. In the meantime, email works best.
        </p>
      </div>
    </form>
  );
}

// ── FormField ──────────────────────────────────────────────────────────────────

function FormField({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-medium"
        style={{ fontSize: "var(--text-body-sm)", color: "var(--color-tx-primary)" }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-10 px-3 rounded-md border outline-none transition-colors duration-[150ms]"
        style={{
          fontSize: "var(--text-body-sm)",
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
          color: "var(--color-tx-primary)",
        }}
      />
    </div>
  );
}