import { cn } from "@/lib/utils";
import {
  AVAILABILITY_CONFIG,
  SITE_CONFIG,
  type AvailabilityStatus,
} from "@/lib/constants";

// ─── AvailabilityBadge ────────────────────────────────────────────────────────
// Colors are set via inline `style` using CSS custom properties defined in
// globals.css. We do NOT use Tailwind utility classes for these colors because
// the --color-available-* tokens are not registered as utility classes in v4 —
// they are only accessible as CSS variables.
//
// Arbitrary value syntax note:
//   ✅  text-[var(--text-label)]      — correct v4 arbitrary value
//   ❌  text-[length:var(--text-label)] — unnecessary type hint, avoid

export function AvailabilityBadge({
  status = SITE_CONFIG.availability,
  className,
}: {
  status?: AvailabilityStatus;
  className?: string;
}) {
  const { label } = AVAILABILITY_CONFIG[status];

  return (
    <span
      style={{
        backgroundColor: `var(--color-${status}-bg)`,
        color: `var(--color-${status}-text)`,
      }}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1",
        "rounded-full font-medium",
        "text-[var(--text-label)]",
        className
      )}
    >
      {/* Dot indicator — pulses when status is "available" */}
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        {status === "available" && (
          <span
            aria-hidden="true"
            className="absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{
              backgroundColor: `var(--color-${status}-dot)`,
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
        )}
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: `var(--color-${status}-dot)` }}
        />
      </span>
      {label}
    </span>
  );
}

// ─── Tag ──────────────────────────────────────────────────────────────────────
// Monospace chip for tech stack labels. Used on project cards and case studies.

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      style={{
        backgroundColor: "var(--color-elevated)",
        borderColor: "var(--color-border)",
        color: "var(--color-tx-muted)",
      }}
      className={cn(
        "inline-flex items-center px-2 py-0.5",
        "rounded-sm border font-mono",
        "text-[var(--text-caption)]",
        className
      )}
    >
      {children}
    </span>
  );
}

// ─── StatusBadge ──────────────────────────────────────────────────────────────
// Project status chip: Shipped / In progress / Archived

export function StatusBadge({
  status,
  className,
}: {
  status: "shipped" | "in-progress" | "archived";
  className?: string;
}) {
  const map = {
    "shipped":     { bg: "var(--color-available-bg)",   color: "var(--color-available-text)",   label: "Shipped" },
    "in-progress": { bg: "var(--color-considering-bg)", color: "var(--color-considering-text)", label: "In progress" },
    "archived":    { bg: "var(--color-unavailable-bg)", color: "var(--color-unavailable-text)", label: "Archived" },
  } as const;

  const { bg, color, label } = map[status];

  return (
    <span
      style={{ backgroundColor: bg, color }}
      className={cn(
        "inline-flex items-center px-2 py-0.5",
        "rounded-sm font-medium",
        "text-[var(--text-caption)]",
        className
      )}
    >
      {label}
    </span>
  );
}