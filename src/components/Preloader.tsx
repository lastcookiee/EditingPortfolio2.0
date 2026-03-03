"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTexts = [
  "INITIALIZING...",
  "LOADING FRAMES...",
  "SYNCING BEATS...",
  "RENDERING...",
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] bg-[#050505] flex flex-col items-center justify-center"
        >
          {/* Scanlines */}
          <div className="absolute inset-0 scanlines opacity-30" />

          {/* Glitch bars */}
          <motion.div
            animate={{ x: [-100, 100, -50, 0] }}
            transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2 }}
            className="absolute top-1/3 left-0 w-full h-[2px] bg-[#00d4ff]/20"
          />

          {/* Progress text */}
          <div className="relative">
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs tracking-[0.3em] text-[#00d4ff]/60 font-mono mb-8"
            >
              {loadingTexts[textIndex]}
            </motion.p>
          </div>

          {/* Brand name */}
          <div className="relative mb-12">
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-white flicker"
            >
              LASTCOOKIEE
            </motion.h1>
            <motion.div
              className="absolute inset-0 text-4xl md:text-6xl font-bold text-[#00d4ff]/20"
              animate={{ x: [0, 3, -2, 0], opacity: [0, 0.5, 0.3, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            >
              LASTCOOKIEE
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7]"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Percentage */}
          <p className="text-xs text-white/30 font-mono mt-4 tracking-widest">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
