"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "Nov 2025 — Present",
    role: "Visual Media Designer",
    company: "Sheryians Coding School",
    location: "Bhopal, Madhya Pradesh, India · On-site",
    description:
      "Working as a Visual Media Designer, contributing to video editing and motion design for educational and promotional content. Editing short-form and long-form videos for social media platforms. Creating motion graphics, transitions, and visual effects to enhance storytelling.",
    highlights: ["Video Editing & Motion Design", "Social Media Content", "Motion Graphics & VFX"],
    current: true,
  },
  {
    period: "2020 — Present",
    role: "Freelance Video Editor",
    company: "Independent",
    location: "Remote",
    description:
      "Working with creators, brands, and esports organizations worldwide. Specializing in gaming montages, brand promos, and cinematic edits with a focus on beat-synced storytelling.",
    highlights: ["150+ projects delivered", "International clients", "Full creative direction"],
    current: false,
  },
  {
    period: "2022 — 2023",
    role: "Video Editor",
    company: "9MM Esports",
    location: "Remote",
    description:
      "Lead editor for social media content and tournament highlight reels. Created high-energy fragmovies and promo content that drove engagement and brand identity for the organization.",
    highlights: ["Team content strategy", "Tournament coverage", "Brand identity"],
    current: false,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Timeline line animation
      gsap.from(".timeline-line-animated", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Timeline items
      gsap.from(".timeline-item", {
        x: -60,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Timeline dots
      gsap.from(".timeline-dot", {
        scale: 0,
        stagger: 0.3,
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <p className="experience-title text-xs tracking-[0.4em] text-[#a855f7]/50 font-mono uppercase mb-4">
          // EXPERIENCE
        </p>
        <h2 className="experience-title text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-20">
          THE JOURNEY<span className="text-[#a855f7]">.</span>
        </h2>

        {/* Timeline */}
        <div className="timeline-container relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px]">
            <div className="timeline-line-animated w-full h-full timeline-line" />
          </div>

          {/* Timeline items */}
          <div className="space-y-16 pl-8 md:pl-20">
            {experiences.map((exp, i) => (
              <div key={i} className="timeline-item relative">
                {/* Dot */}
                <div className="timeline-dot absolute -left-8 md:-left-20 top-2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00d4ff] z-10">
                  <div className="absolute inset-0 rounded-full bg-[#00d4ff]/20 animate-ping" />
                </div>

                {/* Connector line */}
                <div className="absolute -left-4 md:-left-12 top-[14px] w-4 md:w-12 h-[1px] bg-gradient-to-r from-[#00d4ff]/50 to-transparent" />

                {/* Content */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-xs tracking-[0.3em] text-[#00d4ff]/60 font-mono uppercase">
                      {exp.period}
                    </p>
                    {exp.current && (
                      <span className="text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] animate-pulse">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[#a855f7]/70 tracking-[0.1em] uppercase mb-1">
                    {exp.company}
                  </p>
                  {exp.location && (
                    <p className="text-xs text-white/20 tracking-[0.05em] mb-4">
                      {exp.location}
                    </p>
                  )}
                  <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] tracking-[0.1em] uppercase px-3 py-1 border border-white/5 text-white/30 hover:border-[#00d4ff]/20 hover:text-[#00d4ff]/50 transition-all duration-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
