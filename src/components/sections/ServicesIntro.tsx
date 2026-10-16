"use client";

import React from "react";
import Shape from "@/components/Shape";
import RevealText from "@/components/RevealText";

export default function ServicesIntro() {
  return (
    <section className="relative w-full bg-black text-white py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-b border-black">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">
        {/* Outlined Pill Label */}
        <span className="px-5 py-1.5 rounded-full border border-white text-xs font-bold uppercase tracking-widest text-white">
          Motion Focus
        </span>

        {/* Big Title + Sub-line */}
        <div className="space-y-4">
          <RevealText>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none text-white">
              360° MOTION DESIGN
            </h2>
          </RevealText>

          <RevealText delay={0.1}>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-400">
              or just the frames you need.
            </p>
          </RevealText>
        </div>

        {/* Two Big Rotating Shapes: Lavender Starburst & Amber Octagon */}
        <div className="flex items-center justify-center gap-12 md:gap-20 my-6">
          <div className="transform hover:scale-110 transition-transform">
            <Shape
              type="starburst"
              fill="lavender"
              size={120}
              spin={true}
              spinDuration={25}
              pop={true}
            />
          </div>

          <div className="transform hover:scale-110 transition-transform">
            <Shape
              type="octagon"
              fill="amber"
              size={110}
              spin={true}
              reverse={true}
              spinDuration={30}
              pop={true}
            />
          </div>
        </div>

        {/* Statement Line */}
        <RevealText delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl font-medium text-neutral-300 max-w-2xl leading-relaxed tracking-tight">
            From storyboard concepts to final renders, I shape kinetic motion and visual rhythm around your brand.
          </p>
        </RevealText>
      </div>
    </section>
  );
}
