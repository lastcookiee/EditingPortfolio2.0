"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Shape from "@/components/Shape";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const MENU_ITEMS = [
  { label: "WORK", id: "work" },
  { label: "ABOUT", id: "about" },
  { label: "SERVICES", id: "services" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "CONTACT", id: "contact" },
];

const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://youtube.com/@lastcookiee" },
  { label: "Instagram", href: "https://instagram.com/lastcookiee" },
  { label: "X / Twitter", href: "https://x.com/lastcookiee" },
  { label: "Discord", href: "https://discord.gg/lastcookiee" },
];

export default function FullscreenMenu({
  isOpen,
  onClose,
  onNavigate,
}: FullscreenMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100000] bg-black text-white flex flex-col justify-between p-6 md:p-12 lg:p-16"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-black tracking-tighter">
                LC<sup className="text-xs font-bold ml-0.5">®</sup>
              </span>
              <span className="text-xs tracking-widest text-neutral-500 uppercase ml-3 hidden sm:inline-block">
                Kunal Singh · Motion Designer
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2"
              aria-label="Close menu"
            >
              <span>Close</span>
              <span>✕</span>
            </button>
          </div>

          {/* Center Links */}
          <div className="flex flex-col items-center justify-center my-auto py-8">
            <nav className="flex flex-col items-center gap-4 md:gap-6">
              {MENU_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.06, duration: 0.4 }}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className="group relative flex items-center gap-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase hover:text-yellow transition-colors duration-200"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity -ml-8 hidden sm:inline-block">
                    <Shape type="starburst" fill="yellow" size={28} spin spinDuration={10} pop={false} />
                  </span>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Bottom Bar: Socials + Email */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-neutral-800 text-xs text-neutral-400">
            <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors uppercase font-bold tracking-wider"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <a
              href="mailto:kunalsingh.prf@gmail.com"
              className="font-bold text-white hover:text-yellow transition-colors tracking-wide"
            >
              kunalsingh.prf@gmail.com
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
