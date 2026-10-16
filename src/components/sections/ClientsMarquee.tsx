"use client";

import React from "react";
import Marquee from "@/components/Marquee";
import Shape from "@/components/Shape";

const CLIENTS_AND_TOOLS = [
  "NXTWAVE TECHNOLOGIES",
  "9MM ESPORTS",
  "AFTER EFFECTS",
  "ADOBE ILLUSTRATOR",
  "PREMIERE PRO",
  "ADOBE PHOTOSHOP",
  "KINETIC TYPOGRAPHY",
];

export default function ClientsMarquee() {
  return (
    <section className="relative w-full bg-black text-white py-6 border-b border-black overflow-hidden select-none">
      <Marquee direction="left" duration={24} pauseOnHover={true}>
        {CLIENTS_AND_TOOLS.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-yellow transition-colors">
              {item}
            </span>
            <Shape
              type={idx % 2 === 0 ? "starburst" : "flower"}
              fill="yellow"
              size={18}
              spin={false}
              pop={false}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
