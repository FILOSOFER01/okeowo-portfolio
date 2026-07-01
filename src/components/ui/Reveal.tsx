"use client";

import { useEffect, useRef, useState } from "react";

// ─── Reveal ───────────────────────────────────────────────────────────────────
// Fades + slides a section up the first time it scrolls into view.
// Uses IntersectionObserver — cheap, runs once per element, then disconnects.
// Respects prefers-reduced-motion by rendering fully visible immediately.

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSkipAnimation(true);
      setVisible(true);
      return;
    }

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
  }, []);

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
