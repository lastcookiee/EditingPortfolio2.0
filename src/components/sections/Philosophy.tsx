"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statements = [
  {
    text: "Every frame should feel intentional.",
    emphasis: "intentional",
  },
  {
    text: "Rhythm is everything.",
    emphasis: "everything",
  },
  {
    text: "Story over effects.",
    emphasis: "Story",
  },
  {
    text: "Feel the beat. See the cut.",
    emphasis: "beat",
  },
  {
    text: "Less noise. More impact.",
    emphasis: "impact",
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label
      gsap.from(".philosophy-label", {
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

      // Each statement - kinetic typography style
      const statements = gsap.utils.toArray<HTMLElement>(".philosophy-statement");

      statements.forEach((statement, i) => {
        const words = statement.querySelectorAll(".word");

        // Staggered word reveal
        gsap.from(words, {
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.05,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: statement,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        });

        // Slight horizontal movement for cinematic feel
        gsap.fromTo(
          statement,
          { x: i % 2 === 0 ? -30 : 30 },
          {
            x: 0,
            scrollTrigger: {
              trigger: statement,
              start: "top 85%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      });

      // Divider lines
      gsap.from(".philosophy-divider", {
        scaleX: 0,
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
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#a855f7]/[0.02] blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <p className="philosophy-label text-xs tracking-[0.4em] text-[#a855f7]/50 font-mono uppercase mb-4">
          // PHILOSOPHY
        </p>
        <h2 className="philosophy-label text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-20">
          HOW I THINK<span className="text-[#a855f7]">.</span>
        </h2>

        {/* Statements */}
        <div className="space-y-12">
          {statements.map((statement, i) => (
            <div key={i}>
              <div
                className="philosophy-statement overflow-hidden py-4"
                style={{ perspective: "1000px" }}
              >
                <p className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
                  {statement.text.split(" ").map((word, wi) => (
                    <span
                      key={wi}
                      className="word inline-block mr-[0.3em]"
                      style={{ display: "inline-block" }}
                    >
                      {word === statement.emphasis ? (
                        <span className="bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
                          {word}
                        </span>
                      ) : (
                        <span className="text-white/80">{word}</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
              {i < statements.length - 1 && (
                <div className="philosophy-divider h-[1px] bg-gradient-to-r from-white/5 via-white/10 to-white/5 origin-left" />
              )}
            </div>
          ))}
        </div>

        {/* Editorial note */}
        <div className="mt-20 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-[#a855f7]/30" />
          <p className="text-xs tracking-[0.3em] text-white/20 uppercase">
            My creative philosophy
          </p>
        </div>
      </div>
    </section>
  );
}
