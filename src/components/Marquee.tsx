"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  duration?: number;
  pauseOnHover?: boolean;
  className?: string;
  repeat?: number;
}

export default function Marquee({
  children,
  direction = "left",
  duration = 25,
  pauseOnHover = true,
  className = "",
  repeat = 2,
}: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-hidden whitespace-nowrap py-3 ${className}`}>
        <div className="flex items-center gap-8 justify-center flex-wrap">
          {children}
        </div>
      </div>
    );
  }

  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`group overflow-hidden whitespace-nowrap select-none flex py-3 w-full will-change-transform ${className}`}
    >
      {/* Track 1 */}
      <div
        className={`flex shrink-0 items-center gap-8 ${animClass} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8">
            {children}
          </div>
        ))}
      </div>

      {/* Track 2 (Duplicate for continuous loop) */}
      <div
        className={`flex shrink-0 items-center gap-8 ${animClass} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{ animationDuration: `${duration}s` }}
        aria-hidden
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
