"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ─── PhotoSlideshow ───────────────────────────────────────────────────────────
// Crossfades between a set of photos with a slow "Ken Burns" zoom on the
// active slide. Pure client-side interval + opacity transition — no external
// carousel library needed for 2-4 images.
//
// Container must define its own size (aspect ratio + width) via className;
// this component fills it (position: relative + Image fill).

interface Photo {
  src: string;
  alt: string;
}

interface PhotoSlideshowProps {
  images: Photo[];
  className?: string;
  intervalMs?: number;
  sizes?: string;
}

export function PhotoSlideshow({
  images,
  className,
  intervalMs = 4500,
  sizes = "(min-width: 1024px) 360px, (min-width: 768px) 280px, 220px",
}: PhotoSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundColor: "var(--color-elevated)" }}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes={sizes}
            priority={i === 0}
            className="object-cover"
            style={{
              animation: "var(--animate-kenburns)",
              animationPlayState: i === index ? "running" : "paused",
            }}
          />
        </div>
      ))}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((img, i) => (
            <span
              key={img.src}
              aria-hidden="true"
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "16px" : "6px",
                backgroundColor:
                  i === index
                    ? "#FFFFFF"
                    : "color-mix(in srgb, #FFFFFF 45%, transparent)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
