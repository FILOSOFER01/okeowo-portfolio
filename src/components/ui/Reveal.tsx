"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// ─── Reveal ───────────────────────────────────────────────────────────────────
// Fades + slides a section up the first time it scrolls into view.
// Uses IntersectionObserver — cheap, runs once per element, then disconnects.
// Respects prefers-reduced-motion by rendering fully visible immediately.

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
}

// Subscribe to the OS "prefers-reduced-motion" setting via an external store,
// so we never call setState inside an effect (react-hooks/set-state-in-effect).
function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Server snapshot is `false`, so SSR keeps the previous animated markup and
  // the client updates to the real preference without a hydration mismatch.
  const skipAnimation = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  useEffect(() => {
    if (skipAnimation) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [skipAnimation]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        skipAnimation
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.7s cubic-bezier(0,0,0.2,1) ${delay}ms, transform 0.7s cubic-bezier(0,0,0.2,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  );
}
