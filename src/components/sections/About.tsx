"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const floatingWords = [
  { text: "Typography", x: "10%", y: "20%", delay: 0 },
  { text: "Rhythm", x: "75%", y: "15%", delay: 0.5 },
  { text: "Impact", x: "85%", y: "70%", delay: 1 },
  { text: "Precision", x: "5%", y: "75%", delay: 1.5 },
  { text: "Cinematic", x: "60%", y: "85%", delay: 0.8 },
  { text: "Flow", x: "40%", y: "10%", delay: 1.2 },
];

const stats = [
  { number: "5+", label: "Years of Experience" },
  { number: "150+", label: "Videos Edited" },
  { number: "50+", label: "Happy Clients" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title
      gsap.from(".about-label", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Paragraph reveal - stagger lines
      gsap.from(".about-text-line", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-container",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Stats counter animation
      gsap.from(".stat-item", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Floating words
      gsap.from(".floating-word", {
        opacity: 0,
        scale: 0.5,
        stagger: 0.2,
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
      id="about"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Floating words */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingWords.map((word, i) => (
          <motion.span
            key={i}
            className="floating-word absolute text-6xl md:text-8xl lg:text-9xl font-black text-white/[0.02] select-none"
            style={{ left: word.x, top: word.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: word.delay,
              ease: "easeInOut",
            }}
          >
            {word.text}
          </motion.span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <p className="about-label text-xs tracking-[0.4em] text-[#00d4ff]/50 font-mono uppercase mb-4">
          // ABOUT
        </p>
        <h2 className="about-label text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-16">
          THE EDITOR<span className="text-[#a855f7]">.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="about-text-container">
            <div className="space-y-6">
              <div className="overflow-hidden">
                <p className="about-text-line text-lg md:text-xl text-white/60 leading-relaxed">
                  I&apos;m <span className="text-white font-bold">Kunal Singh</span>, known
                  online as <span className="text-[#00d4ff]">lastcookiee</span>. A video editor
                  who doesn&apos;t just cut clips — I craft{" "}
                  <span className="text-white font-semibold">visual experiences</span>.
                </p>
              </div>

              <div className="overflow-hidden">
                <p className="about-text-line text-lg md:text-xl text-white/60 leading-relaxed">
                  With <span className="text-white font-semibold">5+ years</span> behind the
                  timeline and <span className="text-white font-semibold">150+ projects</span>{" "}
                  delivered, I specialize in{" "}
                  <span className="text-[#a855f7]">beat-synced edits</span>,{" "}
                  <span className="text-[#00d4ff]">kinetic typography</span>, and{" "}
                  <span className="text-white">cinematic storytelling</span>.
                </p>
              </div>

              <div className="overflow-hidden">
                <p className="about-text-line text-lg md:text-xl text-white/60 leading-relaxed">
                  From freelance projects to editing for{" "}
                  <span className="text-white font-bold">9MM Esports</span>, every frame I
                  touch is designed to make an impact. My tools of choice:{" "}
                  <span className="text-[#00d4ff]">After Effects</span> &{" "}
                  <span className="text-[#a855f7]">Premiere Pro</span>.
                </p>
              </div>

              <div className="overflow-hidden">
                <p className="about-text-line text-lg md:text-xl text-white/40 leading-relaxed italic">
                  &ldquo;Every frame has a purpose.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-container flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="stat-item group flex items-baseline gap-6 border-b border-white/5 pb-6"
                >
                  <span className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                  <span className="text-white/40 text-sm md:text-base tracking-[0.1em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-12">
              <p className="text-xs tracking-[0.3em] text-white/20 uppercase mb-4">
                Primary Tools
              </p>
              <div className="flex gap-4">
                {["After Effects", "Premiere Pro"].map((tool) => (
                  <span
                    key={tool}
                    className="text-xs tracking-[0.1em] uppercase px-4 py-2 border border-white/10 text-white/50 hover:border-[#00d4ff]/30 hover:text-[#00d4ff]/70 transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
