"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import VideoLightbox from "@/components/VideoLightbox";
import Shape from "@/components/Shape";

export default function ShowreelExpand() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Scroll linked scale: 0.55 -> 1.0, borderRadius: 24px -> 0px
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.9], [0.55, 1]);

  return (
    <>
      <section
        id="showreel"
        ref={containerRef}
        className="relative min-h-[110vh] bg-black text-white flex flex-col items-center justify-center overflow-hidden py-20 px-4 md:px-0"
      >
        {/* Top header badge */}
        <div className="text-center mb-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-neutral-300 mb-3">
            <Shape type="octagon" fill="yellow" size={16} spin={false} pop={false} />
            <span>Motion Reel 2026</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">
            Kinetic rhythm &amp; motion design
          </h2>
        </div>

        {/* Scalable 16:9 Frame */}
        <motion.div
          style={{
            scale: shouldReduceMotion ? 1 : scale,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          className="relative w-full max-w-[1200px] aspect-video overflow-hidden rounded-2xl shadow-2xl bg-neutral-900 border border-white/10"
        >
          {/* Muted autoplay loop video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/reel-hero-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/reel-hero.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Centered Watch Full Reel Pill Button */}
          <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors flex items-center justify-center pointer-events-auto">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLightboxOpen(true)}
              className="px-8 py-4 rounded-full bg-white text-black font-extrabold text-sm uppercase tracking-widest shadow-2xl flex items-center gap-3 group"
            >
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs pl-0.5 group-hover:bg-yellow group-hover:text-black transition-colors">
                ▶
              </span>
              <span>Watch full reel</span>
            </motion.button>
          </div>

          {/* Corner subtle watermark */}
          <div className="absolute bottom-6 left-6 pointer-events-none hidden sm:block">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-bold uppercase tracking-widest text-white border border-white/20">
              LASTCOOKIEE · REEL
            </span>
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <VideoLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        youtubeId="SpHc7nXVuXE"
        title="Kunal Singh — Official Motion Composition &amp; Reel"
      />
    </>
  );
}
