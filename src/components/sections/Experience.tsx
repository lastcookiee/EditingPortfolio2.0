"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Shape from "@/components/Shape";

interface JourneyItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

const JOURNEY_DATA: JourneyItem[] = [
  {
    id: "nxtwave",
    company: "NxtWave Disruptive Technologies Pvt. Ltd.",
    role: "Video Editor II / Motion Graphics Designer",
    period: "Aug 2026 — Present",
    location: "Hyderabad, India · Full-time",
    description:
      "Creating full-time motion graphics and video content, taking assets from concept through storyboard to final delivery. Applying kinetic typography, graphic animation, and deliberate pacing to produce polished, brand-consistent visual content while collaborating with stakeholders to translate briefs into clear narratives.",
    tags: [
      "Motion Graphics",
      "Kinetic Typography",
      "After Effects",
      "Adobe Illustrator",
      "Visual Pacing",
      "Brand Narrative",
    ],
  },
  {
    id: "9mm",
    company: "9MM Esports Society",
    role: "Content & Motion Editor",
    period: "Oct 2023 — 2026",
    location: "New Delhi, India",
    description:
      "Produced promotional teasers, animated highlight reels, and event intros for gaming events and college circuits. Owned the complete editing and motion workflow for LAN tournaments, syncing gameplay, overlays, and custom audio pacing.",
    tags: [
      "Event Intros",
      "LAN Aftermovies",
      "Gameplay Overlays",
      "Audio Syncing",
      "Community Content",
    ],
  },
  {
    id: "freelance",
    company: "Freelance Motion Graphics Artist",
    role: "Motion Designer & Creative Editor",
    period: "Jan 2020 — Present",
    location: "Online Clients & Creators · Remote",
    description:
      "Delivered 100+ videos across social media, gaming montages, brand promos, and event highlights. Specialised in dynamic transitions, smooth cuts, and typography-led animations that helped digital creators scale engagement and reach.",
    tags: [
      "Dynamic Transitions",
      "Kinetic Sequences",
      "Color Grading",
      "Audio-Synced Effects",
      "Client Management",
    ],
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("nxtwave");

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="relative w-full bg-white text-black py-28 md:py-40 px-6 md:px-12 select-none border-b border-black overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto space-y-16">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b-2 border-black pb-8">
          <div>
            <span className="px-5 py-1.5 rounded-full border border-black text-xs font-bold uppercase tracking-widest text-black mb-4 inline-block">
              Experience &amp; Career
            </span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              THE JOURNEY
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Shape type="flower" fill="yellow" size={28} spin spinDuration={18} />
            <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-500">
              4+ Years in Motion
            </span>
          </div>
        </div>

        {/* Accordion Rows */}
        <div className="divide-y-2 divide-black border-y-2 border-black">
          {JOURNEY_DATA.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div key={item.id} className="transition-colors">
                {/* Header Row */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left group"
                  aria-expanded={isExpanded}
                >
                  {/* Left: Date pill + Role & Company */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <span className="px-4 py-1.5 rounded-full border border-black text-xs font-black uppercase tracking-wider bg-neutral-100 text-black self-start md:self-auto shrink-0">
                      {item.period}
                    </span>

                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:text-neutral-700 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-neutral-500 mt-0.5">
                        {item.company} · {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Right: Expand indicator */}
                  <div className="flex items-center gap-4 self-end md:self-auto shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full border border-black flex items-center justify-center font-bold text-lg transition-transform duration-300 ${
                        isExpanded ? "rotate-45 bg-black text-white" : "bg-white text-black"
                      }`}
                    >
                      +
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 space-y-6 max-w-3xl">
                        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-black bg-yellow text-black"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
