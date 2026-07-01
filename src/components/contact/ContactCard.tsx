import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── ContactCard ──────────────────────────────────────────────────────────────
// Used three times on the contact page: email, GitHub, LinkedIn.
// href is the link destination. If isEmail is true, opens the mail client.

interface ContactCardProps {
  label: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  className?: string;
}

export function ContactCard({
  label,
  title,
  description,
  href,
  actionLabel,
  className,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className={cn(
        "group flex flex-col gap-4 p-6 rounded-xl border",
        "transition-all duration-[200ms]",
        "hover:border-[var(--color-border-strong)]",
        "hover:bg-[var(--color-elevated)]",
        className
      )}
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Top row — label + arrow */}
      <div className="flex items-center justify-between">
        <span
          className="font-medium uppercase tracking-widest"
          style={{
            fontSize: "var(--text-caption)",
            color: "var(--color-tx-muted)",
          }}
        >
          {label}
        </span>
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-[150ms] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          style={{ color: "var(--color-tx-muted)" }}
        />
      </div>

      {/* Title */}
      <div>
        <p
          className="font-medium mb-1"
          style={{
            fontSize: "var(--text-heading-sm)",
            color: "var(--color-tx-primary)",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "var(--text-body-sm)",
            color: "var(--color-tx-secondary)",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>

      {/* Action label */}
      <span
        className="font-medium mt-auto"
        style={{
          fontSize: "var(--text-body-sm)",
          color: "var(--color-accent-500)",
        }}
      >
        {actionLabel}
      </span>
    </a>
  );
}