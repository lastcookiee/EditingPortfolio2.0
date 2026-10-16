"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface IntroProps {
  onComplete?: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("lc_intro_shown");
      if (seen) return false;
    }
    return true;
  });

  useEffect(() => {
    if (shouldReduceMotion || !isVisible) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("lc_intro_shown", "true");
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [isVisible, onComplete, shouldReduceMotion]);

  if (!isVisible || shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999999] bg-black text-white flex flex-col justify-center overflow-hidden pointer-events-auto"
        >
          {/* Row 1 moving left */}
          <div className="overflow-hidden whitespace-nowrap py-2 border-y border-white/10">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-8 font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase text-white select-none"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span>LASTCOOKIEE</span>
                  <span className="text-yellow">★</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Row 2 moving right */}
          <div className="overflow-hidden whitespace-nowrap py-2 border-b border-white/10 mt-3">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-8 font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase text-lavender select-none"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span>LASTCOOKIEE</span>
                  <span className="text-white">●</span>
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
