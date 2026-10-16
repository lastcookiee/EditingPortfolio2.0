"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Shape from "@/components/Shape";

const SERVICES = [
  "Kinetic Typography Systems",
  "Motion Graphics & Animation",
  "Visual Rhythm & Beat Sync",
  "Vector & Shape Dynamics",
  "Gen-AI Visual Storytelling",
  "Cinematic Color Direction",
  "Impact Sound & Audio Sync",
];

export default function ServicesList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative w-full bg-lavender text-purple-deep py-28 md:py-36 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden border-b border-black select-none"
    >
      {/* Giant deep purple starburst rotating behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 will-change-transform [transform:translateZ(0)]">
        <Shape
          type="starburst"
          fill="#7A5FA8"
          size={800}
          spin={true}
          spinDuration={45}
          pop={false}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full flex flex-col items-center gap-12 text-center">
        {/* Top "Services" Pill Label */}
        <span className="px-6 py-2 rounded-full border border-black text-xs font-black uppercase tracking-widest text-black bg-white/20">
          Core Capabilities
        </span>

        {/* Centred stack of large links */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-4xl my-4">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={service}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  x: isHovered ? 8 : 0,
                  opacity: isAnyHovered && !isHovered ? 0.5 : 1,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full cursor-pointer py-1"
              >
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight transition-colors duration-200 uppercase ${
                    isHovered ? "text-black" : "text-[#7A5FA8]"
                  }`}
                >
                  {service}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom "Services" Pill Label */}
        <span className="px-6 py-2 rounded-full border border-black text-xs font-black uppercase tracking-widest text-black bg-white/20">
          Motion Design
        </span>
      </div>
    </section>
  );
}
