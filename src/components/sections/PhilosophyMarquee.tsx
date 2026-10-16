"use client";

import React from "react";
import Marquee from "@/components/Marquee";
import Shape from "@/components/Shape";

export default function PhilosophyMarquee() {
  return (
    <section className="relative w-full bg-black text-white py-8 border-b border-black overflow-hidden select-none">
      <Marquee direction="left" duration={35} pauseOnHover={true}>
        <div className="flex items-center gap-10">
          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Rhythm is everything
          </span>
          <Shape type="starburst" fill="yellow" size={24} spin spinDuration={15} />

          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-300">
            Story over effects
          </span>
          <Shape type="octagon" fill="lavender" size={24} spin spinDuration={20} />

          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Less noise. More impact
          </span>
          <Shape type="flower" fill="amber" size={24} spin spinDuration={18} />

          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-300">
            Feel the beat. See the cut
          </span>
          <Shape type="scallop" fill="sky" size={24} spin spinDuration={22} />
        </div>
      </Marquee>
    </section>
  );
}
