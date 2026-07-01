import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, SUBJECT_LABELS } from "@/lib/contact-schema";

// The Resend SDK runs on the Node.js runtime.
export const runtime = "nodejs";

// Submissions completed faster than this are almost certainly bots.
const MIN_FILL_MS = 3000;

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;

  // ── Spam guard 1: honeypot ──────────────────────────────────────────────────
  // "company" is a hidden field real users never see. If a bot fills it, we
  // return success without sending, so the trap stays invisible.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // ── Spam guard 2: timing ────────────────────────────────────────────────────
  // A real person takes more than a few seconds to fill the form.
  const elapsedMs =
    typeof body.elapsedMs === "number" ? body.elapsedMs : Number.MAX_SAFE_INTEGER;
  if (elapsedMs < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  // ── Validation ──────────────────────────────────────────────────────────────
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 }
    );
  }
  const { name, email, subject, message } = parsed.data;

  // ── Config ──────────────────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json(
      { error: "The contact form isn't configured yet. Please email me directly." },
      { status: 500 }
    );
  }

  // ── Send ────────────────────────────────────────────────────────────────────
  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `Portfolio contact — ${SUBJECT_LABELS[subject]} (from ${name})`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Subject: ${SUBJECT_LABELS[subject]}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { error: "Couldn't send your message. Please email me directly." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Couldn't send your message. Please email me directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
