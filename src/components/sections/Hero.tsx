"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import TypewriterLine from "@/components/TypewriterLine";
import Shape from "@/components/Shape";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Drift sideways on scroll: "L" drifts left, "C" drifts right
  const driftLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const driftRight = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] md:min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden px-6 md:px-12 pt-28 pb-12 select-none"
    >
      {/* Top micro pill / badge */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full border border-white/20 text-[11px] font-bold uppercase tracking-widest text-neutral-300">
            Motion & Rhythm · 4+ Yrs
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 text-xs font-bold tracking-wider text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            Motion Designer II @ NxtWave
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Shape type="starburst" fill="yellow" size={24} spin spinDuration={15} />
          <span className="text-xs font-bold tracking-wider uppercase text-neutral-400 hidden sm:inline-block">
            Hyderabad · Bhopal
          </span>
        </div>
      </div>

      {/* Giant Cropped "LC" Letters (≈700px Poppins Black, lavender, bleeding off edges) */}
      <div className="relative w-full flex items-center justify-center pointer-events-none my-auto overflow-hidden py-4">
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : fadeOut,
          }}
          className="flex items-center justify-center leading-none tracking-tighter w-full max-w-[1400px] mx-auto"
        >
          {/* L */}
          <motion.span
            style={{
              x: shouldReduceMotion ? 0 : driftLeft,
              willChange: "transform",
              transform: "translateZ(0)",
            }}
            className="text-lavender font-black text-[38vw] md:text-[44vw] lg:text-[620px] xl:text-[720px] select-none block -mr-6 md:-mr-16"
          >
            L
          </motion.span>

          {/* C */}
          <motion.span
            style={{
              x: shouldReduceMotion ? 0 : driftRight,
              willChange: "transform",
              transform: "translateZ(0)",
            }}
            className="text-lavender font-black text-[38vw] md:text-[44vw] lg:text-[620px] xl:text-[720px] select-none block -ml-6 md:-ml-16"
          >
            C
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 border-t border-white/10">
        {/* Bottom-left: "Kunal Singh — motion designer for" + typewriter */}
        <div className="max-w-xl">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            <span>Kunal Singh — motion designer for </span>
            <span className="text-yellow inline-block">
              <TypewriterLine
                phrases={[
                  "kinetic typography",
                  "motion graphics systems",
                  "beat-synced visual flow",
                  "Gen-AI visual stories",
                ]}
              />
            </span>
          </p>
        </div>

        {/* Bottom-right: Scroll / Watch reel cue */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#showreel"
            className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-widest hover:bg-yellow hover:text-black transition-all flex items-center gap-2"
          >
            <span>Explore Motion Reel</span>
            <span className="text-sm">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
