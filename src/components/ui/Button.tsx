import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

/* ── Variant styles ─────────────────────────────────────────────────────────
   All colors reference CSS custom properties directly so they automatically
   respond to the .dark class overrides defined in globals.css.
   ────────────────────────────────────────────────────────────────────────── */
const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-tx-primary)",
    color: "var(--color-canvas)",
    border: "1px solid transparent",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--color-tx-primary)",
    border: "1px solid var(--color-border)",
  },
  ghost: {
    backgroundColor: "var(--color-elevated)",
    color: "var(--color-tx-secondary)",
    border: "1px solid transparent",
  },
};

const variantHoverClass: Record<ButtonVariant, string> = {
  primary:   "hover:opacity-90",
  secondary: "hover:bg-[var(--color-elevated)]",
  ghost:     "hover:border-[var(--color-border)]",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-[var(--text-body-sm)] gap-1.5 rounded",
  md: "h-9 px-4 text-[var(--text-body-sm)] gap-2 rounded-md",
  lg: "h-11 px-6 text-[var(--text-body-md)] gap-2 rounded-md",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", loading = false, disabled, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        style={variantStyles[variant]}
        className={cn(
          "inline-flex items-center justify-center font-medium",
          "transition-all duration-[150ms] ease-out",
          "focus-visible:outline-none",
          "focus-visible:shadow-[0_0_0_2px_var(--color-canvas),_0_0_0_4px_var(--color-accent-500)]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-[0.98]",
          variantHoverClass[variant],
          sizeClass[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <LoadingSpinner />
            <span>Loading…</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}