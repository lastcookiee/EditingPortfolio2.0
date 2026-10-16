"use client";

import React from "react";
import Shape from "@/components/Shape";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black text-white pt-12 pb-16 px-6 md:px-12 select-none border-t border-neutral-900">
      <div className="max-w-[1200px] mx-auto space-y-16">
        {/* Top: Links Pill */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="font-black text-2xl tracking-tighter">
              LC<sup className="text-xs font-bold ml-0.5">®</sup>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Kunal Singh · Motion Designer
            </span>
          </div>

          {/* Outlined "Links" Pill Container */}
          <div className="flex items-center gap-3 p-1.5 rounded-full border border-neutral-700 bg-neutral-950 flex-wrap">
            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-black">
              Links
            </span>
            {[
              { label: "Work", id: "work" },
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Journey", id: "experience" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Row: Big Social Icons (Left) + Copyright & Location (Right) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4">
          {/* Big Icons (YT, IG, X, DC) */}
          <div className="flex items-center gap-4">
            {[
              { label: "YT", name: "YouTube", href: "https://youtube.com/@lastcookiee" },
              { label: "IG", name: "Instagram", href: "https://instagram.com/lastcookiee" },
              { label: "X", name: "X (Twitter)", href: "https://x.com/lastcookiee" },
              { label: "DC", name: "Discord", href: "https://discord.gg/lastcookiee" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className="w-14 h-14 rounded-2xl border border-neutral-800 bg-neutral-950 flex items-center justify-center font-black text-sm tracking-wider text-white hover:bg-white hover:text-black hover:border-white transition-all transform hover:-translate-y-1"
                aria-label={s.name}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Right: Copyright + Location */}
          <div className="space-y-1 text-left md:text-right">
            <p className="text-sm font-bold tracking-tight text-white">
              © {currentYear} Kunal Singh (lastcookiee)
            </p>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 flex items-center md:justify-end gap-2">
              <Shape type="starburst" fill="yellow" size={14} spin spinDuration={12} pop={false} />
              <span>Bhopal, India · All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
