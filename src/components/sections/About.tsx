"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Counter from "@/components/Counter";
import Shape from "@/components/Shape";

// 12-lobed scalloped circle path for clipPath
const SCALLOP_CLIP_PATH = (() => {
  const lobes = 12;
  const d: string[] = [];
  for (let i = 0; i < lobes; i++) {
    const a1 = (i * 2 * Math.PI) / lobes;
    const a2 = ((i + 1) * 2 * Math.PI) / lobes;
    const amid = (a1 + a2) / 2;
    const rBase = 38;
    const rOuter = 48;
    const x1 = 50 + rBase * Math.cos(a1);
    const y1 = 50 + rBase * Math.sin(a1);
    const cx = 50 + rOuter * Math.cos(amid);
    const cy = 50 + rOuter * Math.sin(amid);
    const x2 = 50 + rBase * Math.cos(a2);
    const y2 = 50 + rBase * Math.sin(a2);
    if (i === 0) d.push(`M ${x1.toFixed(2)} ${y1.toFixed(2)}`);
    d.push(`Q ${cx.toFixed(2)} ${cy.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`);
  }
  d.push("Z");
  return d.join(" ");
})();

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative w-full bg-black text-white py-28 md:py-40 px-6 md:px-12 select-none border-b border-black overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto space-y-20">
        {/* Outlined Pill Label */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <span className="px-5 py-1.5 rounded-full border border-white text-xs font-bold uppercase tracking-widest text-white">
            Motion Profile
          </span>
          <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-500">
            Kunal Singh · lastcookiee
          </span>
        </div>

        {/* Main Content Grid: Bio + Photo in Scallop Mask */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Bio text (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-xs font-black uppercase tracking-widest text-lavender">
              {"// MOTION GRAPHICS & VISUAL RHYTHM"}
            </h2>

            <div className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-200 leading-[1.35]">
              I&apos;m <span className="text-white font-extrabold">Kunal Singh</span> (aka{" "}
              <span className="text-lavender font-extrabold">lastcookiee</span>), a Motion Designer
              &amp; Visual Artist with <span className="text-yellow font-extrabold">4+ years</span> of
              hands-on craft in After Effects, Illustrator, and Premiere Pro. Currently delivering full-time
              motion graphics at <span className="text-white font-extrabold underline decoration-yellow decoration-2">NxtWave</span>,
              I build{" "}
              <span className="relative inline-block text-black font-extrabold px-3 py-0.5 rounded-xl mx-1">
                {/* Yellow organic blob sitting behind key phrase */}
                <span className="absolute inset-0 bg-yellow rounded-xl -rotate-1 scale-105 pointer-events-none -z-0" />
                <span className="relative z-10">kinetic visual systems</span>
              </span>{" "}
              with tight typography, hypnotic pacing, and razor-sharp audio sync.
            </div>

            <div className="pt-2">
              <a
                href="#experience"
                onClick={scrollToExperience}
                className="inline-flex items-center gap-2 text-base md:text-lg font-bold text-white underline underline-offset-8 decoration-yellow decoration-2 hover:text-yellow transition-colors"
              >
                <span>View career journey at NxtWave &amp; beyond</span>
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* Photo inside slowly rotating scalloped-circle mask (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 pointer-events-none opacity-40">
                <Shape
                  type="starburst"
                  fill="lavender"
                  size="100%"
                  spin={true}
                  spinDuration={35}
                  pop={false}
                />
              </div>

              {/* Scalloped clip path container */}
              <svg
                className="w-full h-full overflow-visible drop-shadow-2xl"
                viewBox="0 0 100 100"
              >
                <defs>
                  <clipPath id="scallopPhotoClip">
                    <motion.path
                      d={SCALLOP_CLIP_PATH}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              rotate: [0, 360],
                            }
                      }
                      transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ transformOrigin: "50px 50px" }}
                    />
                  </clipPath>
                </defs>
                <image
                  href="/images/me.jpeg"
                  width="100"
                  height="100"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#scallopPhotoClip)"
                />
              </svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-6">
              Kunal Singh · Motion Graphics Designer
            </p>
          </div>
        </div>

        {/* Three Counters (years: 4+, videos: 300+, clients: 50+) */}
        <div className="pt-16 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
          {/* Counter 1: Years */}
          <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-neutral-800 pb-8 sm:pb-0 sm:pr-8">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter">
              <Counter value={4} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-400">
              Years in Motion &amp; Animation
            </p>
          </div>

          {/* Counter 2: Videos / Projects */}
          <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-neutral-800 pb-8 sm:pb-0 sm:pr-8">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black text-yellow tracking-tighter">
              <Counter value={300} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-400">
              Videos &amp; Motion Assets Delivered
            </p>
          </div>

          {/* Counter 3: Clients */}
          <div className="space-y-2">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black text-lavender tracking-tighter">
              <Counter value={50} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-400">
              Happy Clients &amp; Brands Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
