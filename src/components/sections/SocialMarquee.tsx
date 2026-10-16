"use client";

import React from "react";
import Marquee from "@/components/Marquee";
import Shape from "@/components/Shape";

const SOCIAL_ITEMS = [
  { text: "More edits on YouTube", icon: "▶", href: "https://youtube.com/@lastcookiee" },
  { text: "Reels on Instagram", icon: "✦", href: "https://instagram.com/lastcookiee" },
  { text: "Updates on X", icon: "✕", href: "https://x.com/lastcookiee" },
  { text: "Community on Discord", icon: "●", href: "https://discord.gg/lastcookiee" },
];

export default function SocialMarquee() {
  return (
    <section className="relative w-full bg-yellow text-black py-6 border-b border-black overflow-hidden select-none">
      <Marquee direction="right" duration={24} pauseOnHover={true}>
        {SOCIAL_ITEMS.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 group hover:opacity-80 transition-opacity"
          >
            <span className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-black text-xs">
              {item.icon}
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
              {item.text}
            </span>
            <Shape
              type={idx % 2 === 0 ? "starburst" : "octagon"}
              fill="black"
              size={18}
              spin={false}
              pop={false}
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
}
