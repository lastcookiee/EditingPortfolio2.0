"use client";

import React, { useState } from "react";
import FullscreenMenu from "@/components/FullscreenMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[9999] px-6 md:px-12 py-5 flex items-center justify-between pointer-events-none transform translate-z-0">
        {/* Monogram */}
        <a
          href="#"
          className="pointer-events-auto flex items-baseline font-black tracking-tighter text-2xl md:text-3xl select-none mix-blend-difference text-white hover:opacity-80 transition-opacity"
          aria-label="Lastcookiee home"
        >
          <span>LC</span>
          <span className="text-xs font-bold ml-0.5 relative -top-2">®</span>
        </a>

        {/* Center Nav Pills (Desktop) */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white shadow-xl">
          {[
            { label: "WORK", id: "work" },
            { label: "SERVICES", id: "services" },
            { label: "ABOUT", id: "about" },
            { label: "JOURNEY", id: "experience" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider hover:bg-white hover:text-black transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Hamburger & Talk Pill */}
        <div className="pointer-events-auto flex items-center gap-3 mix-blend-difference text-white">
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-block px-5 py-2 rounded-full border border-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            Let&apos;s talk
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="px-4 py-2.5 rounded-full border border-white flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            aria-label="Open navigation menu"
          >
            <span className="hidden sm:inline">Menu</span>
            <div className="flex flex-col gap-1 w-4">
              <span className="h-[2px] w-full bg-current" />
              <span className="h-[2px] w-full bg-current" />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
}
