"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 2.5,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[9999] px-6 md:px-12 py-5 flex items-center justify-between mix-blend-difference"
    >
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        className="text-white text-sm font-bold tracking-[0.3em] uppercase"
        data-cursor-hover
      >
        LASTCOOKIEE
      </motion.a>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Work", id: "showreels" },
          { label: "About", id: "about" },
          { label: "Skills", id: "skills" },
          { label: "Contact", id: "contact" },
        ].map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            whileHover={{ y: -2 }}
            className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative group"
            data-cursor-hover
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00d4ff] group-hover:w-full transition-all duration-300" />
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenContact}
        className="text-xs tracking-[0.15em] uppercase px-5 py-2.5 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
        data-cursor-hover
      >
        Let&apos;s Talk
      </motion.button>
    </nav>
  );
}
