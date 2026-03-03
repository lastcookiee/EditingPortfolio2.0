"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let visible = false;

    const moveCursor = (e: MouseEvent) => {
      if (!visible) {
        visible = true;
        setIsVisible(true);
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    // Use event delegation instead of attaching to every element
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseout", handleOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
            style={{ willChange: "transform" }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isHovering ? 1.8 : 1,
                opacity: 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center"
            >
              {isHovering && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-1.5 h-1.5 rounded-full bg-white"
                />
              )}
            </motion.div>
          </div>
          <div
            ref={cursorDotRef}
            className="fixed top-0 left-0 pointer-events-none z-[99999]"
            style={{ willChange: "transform" }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
