"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Waveform() {
  return (
    <div className="flex items-end gap-[3px] h-12 opacity-30">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="w-[2px] bg-gradient-to-t from-[#00d4ff] to-[#a855f7] waveform-bar origin-bottom"
          style={{
            height: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.2 });

      // Staggered heading reveal
      tl.from(".hero-line", {
        y: 120,
        opacity: 0,
        rotationX: -80,
        stagger: 0.15,
        duration: 1.2,  
        ease: "power4.out",
      })
        .from(
          subRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          linesRef.current,
          {
            opacity: 0,
            scaleX: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // Parallax on scroll
      gsap.to(headingRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Fade out on scroll
      gsap.to(sectionRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "70% top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />

      {/* Background photo */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/images/me.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-[65%_30%]"
          style={{ opacity: 0.22 }}
          sizes="100vw"
        />
        {/* Gradient overlays to blend the photo edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60" />
      </div>

      {/* Animated lines */}
      <div
        ref={linesRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-[2]"
      >
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/10 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a855f7]/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00d4ff]/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#a855f7]/5 to-transparent" />
      </div>

      {/* Glitch flicker background elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/[0.02] blur-[120px] z-[2]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#a855f7]/[0.02] blur-[100px] z-[2]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div ref={headingRef} className="relative z-10 text-center max-w-6xl">
        {/* Top label */}
        <div ref={subRef} className="mb-8">
          <p className="text-xs md:text-sm tracking-[0.4em] text-[#00d4ff]/60 font-mono uppercase">
            Video Editor &bull; Motion Designer &bull; Storyteller
          </p>
        </div>

        {/* Main heading */}
        <div className="overflow-hidden mb-2">
          <h1 className="hero-line text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tighter text-white">
            I DON&apos;T EDIT
          </h1>
        </div>
        <div className="overflow-hidden mb-2">
          <h1 className="hero-line text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tighter text-white">
            VIDEOS<span className="text-[#00d4ff]">.</span>
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 className="hero-line text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tighter">
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
              I DESIGN EXPERIENCES
            </span>
            <span className="text-white">.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Every frame has a purpose. Every cut tells a story.
          <br />
          Crafting cinematic experiences that hit different.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            onClick={() => scrollTo("showreels")}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,212,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-black font-bold text-sm tracking-[0.15em] uppercase relative overflow-hidden group"
            data-cursor-hover
          >
            <span className="relative z-10">View Showreels</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            onClick={() => scrollTo("about")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 text-white/70 hover:text-white text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:border-white/40"
            data-cursor-hover
          >
            About Me
          </motion.button>
        </div>
      </div>

      {/* Waveform */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <Waveform />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#00d4ff]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
