"use client";

// ─── ContactForm ──────────────────────────────────────────────────────────────
// Client Component. Uses react-hook-form + zod for validation, posts to
// /api/contact (which sends the email via Resend), and shows loading, success,
// and error states. Spam is handled with a hidden honeypot field plus a
// minimum fill-time check — both verified server-side.
//
// Timing note: the mount time is captured in an effect and the elapsed time is
// measured inside the submit event handler (not during render) to satisfy the
// project's react-hooks purity/refs rules.

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  SUBJECTS,
  SUBJECT_LABELS,
  type ContactValues,
} from "@/lib/contact-schema";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "h-10 px-3 rounded-md border outline-none transition-colors duration-[150ms]";

const inputStyle: React.CSSProperties = {
  fontSize: "var(--text-body-sm)",
  backgroundColor: "var(--color-surface)",
  borderColor: "var(--color-border)",
  color: "var(--color-tx-primary)",
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const honeypotRef = useRef<HTMLInputElement>(null);
  const mountedAtRef = useRef(0);
  const elapsedMsRef = useRef(0);

  // Record when the form mounted (impure Date.now() is fine inside an effect).
  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  const onSubmit = async (values: ContactValues) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          company: honeypotRef.current?.value ?? "",
          elapsedMs: elapsedMsRef.current,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border p-5"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-available-bg)",
        }}
      >
        <p
          className="font-medium mb-1"
          style={{
            fontSize: "var(--text-body-sm)",
            color: "var(--color-available-text)",
          }}
        >
          Thanks — your message is on its way.
        </p>
        <p
          style={{
            fontSize: "var(--text-body-sm)",
            color: "var(--color-tx-secondary)",
          }}
        >
          I typically reply within 24 hours.
        </p>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form
      className="flex flex-col gap-5"
      // Measure elapsed time here, inside the event handler, then hand off to
      // react-hook-form. Keeps Date.now() and ref reads out of render.
      onSubmit={(e) => {
        elapsedMsRef.current = Date.now() - mountedAtRef.current;
        void handleSubmit(onSubmit)(e);
      }}
      noValidate
    >
      {/* Honeypot — visually hidden, off-tab, ignored by humans. */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="name" label="Your name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            placeholder="Emmanuel Okeowo"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={inputClass}
            style={inputStyle}
            {...register("name")}
          />
        </Field>

        <Field id="email" label="Email address" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={inputClass}
            style={inputStyle}
            {...register("email")}
          />
        </Field>
      </div>

      {/* Subject */}
      <Field
        id="subject"
        label="Subject"
        error={errors.subject ? "Please choose a subject." : undefined}
      >
        <select
          id="subject"
          defaultValue=""
          aria-invalid={!!errors.subject}
          className={inputClass}
          style={inputStyle}
          {...register("subject")}
        >
          <option value="" disabled>
            Select a subject…
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {SUBJECT_LABELS[s]}
            </option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field id="message" label="Message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me what you have in mind…"
          aria-invalid={!!errors.message}
          className="px-3 py-2.5 rounded-md border outline-none resize-none transition-colors duration-[150ms]"
          style={{ ...inputStyle, lineHeight: "1.6" }}
          {...register("message")}
        />
      </Field>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-md border px-3 py-2"
          style={{
            fontSize: "var(--text-body-sm)",
            borderColor: "#F0A8A8",
            color: "#DC2626",
            backgroundColor: "color-mix(in srgb, #EF4444 8%, transparent)",
          }}
        >
          {errorMsg}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center h-10 px-6 rounded-md font-medium transition-opacity duration-[150ms] hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            fontSize: "var(--text-body-sm)",
            backgroundColor: "var(--color-tx-primary)",
            color: "var(--color-canvas)",
          }}
        >
          {loading ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

// ── Field ───────────────────────────────────────────────────────────────────────
// Label + input wrapper with an inline validation message.

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
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
      {children}
      {error && (
        <span role="alert" style={{ fontSize: "var(--text-caption)", color: "#EF4444" }}>
          {error}
        </span>
      )}
    </div>
  );
}
