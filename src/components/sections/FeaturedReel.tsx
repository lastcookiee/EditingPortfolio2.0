"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedReel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale up on scroll
      gsap.fromTo(
        videoContainerRef.current,
        { scale: 0.85, borderRadius: "20px" },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
          },
        }
      );

      // Parallax text
      gsap.to(textRef.current, {
        y: -60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text reveal
      gsap.from(".featured-text-line", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <div
        ref={videoContainerRef}
        className="relative w-full aspect-video max-h-[80vh] overflow-hidden bg-[#0a0a0a]"
      >
        {/* Video placeholder - in production this would be an actual video */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#050505]" />

        {/* Animated background to simulate video */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #00d4ff15 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #a855f715 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, #00d4ff15 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #00d4ff15 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Scanlines */}
        <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

        {/* Overlay text */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
        >
          <div className="overflow-hidden mb-2">
            <p className="featured-text-line text-xs md:text-sm tracking-[0.4em] text-[#00d4ff]/40 font-mono uppercase">
              // FEATURED REEL
            </p>
          </div>
          <div className="overflow-hidden mb-2">
            <h2 className="featured-text-line text-3xl md:text-5xl lg:text-7xl font-black text-white text-center tracking-tighter leading-tight">
              Crafted with precision.
            </h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h2 className="featured-text-line text-3xl md:text-5xl lg:text-7xl font-black text-center tracking-tighter">
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
                Driven by rhythm.
              </span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(0,212,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="featured-text-line w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-[#00d4ff]/60 transition-colors duration-500 group"
              data-cursor-hover
            >
              <div className="w-0 h-0 border-l-[16px] border-l-white/80 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1 group-hover:border-l-[#00d4ff] transition-colors duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Edge gradients */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
