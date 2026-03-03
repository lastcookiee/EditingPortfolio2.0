"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { name: "YouTube", url: "#", icon: "YT" },
  { name: "Instagram", url: "#", icon: "IG" },
  { name: "Twitter", url: "#", icon: "X" },
  { name: "Discord", url: "#", icon: "DC" },
];

export default function Contact({ onOpenContact }: { onOpenContact: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big text reveal
      gsap.from(".contact-heading", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // CTA reveal
      gsap.from(".contact-cta", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Socials
      gsap.from(".social-link", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".socials-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00d4ff]/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-[#a855f7]/[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Label */}
        <p className="contact-heading text-xs tracking-[0.4em] text-[#00d4ff]/50 font-mono uppercase mb-8">
          // LET&apos;S CONNECT
        </p>

        {/* Big heading */}
        <div className="mb-4 overflow-hidden">
          <h2 className="contact-heading text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            LET&apos;S CREATE
          </h2>
        </div>
        <div className="mb-4 overflow-hidden">
          <h2 className="contact-heading text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
              SOMETHING
            </span>
          </h2>
        </div>
        <div className="mb-12 overflow-hidden">
          <h2 className="contact-heading text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            INSANE<span className="text-[#00d4ff]">.</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="contact-cta text-white/30 text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed">
          Got a project in mind? Let&apos;s turn your vision into a visual experience
          that hits different.
        </p>

        {/* CTA Buttons */}
        <div className="contact-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <motion.button
            onClick={onOpenContact}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0,212,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-black font-bold text-sm tracking-[0.15em] uppercase relative overflow-hidden group inline-block"
            data-cursor-hover
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>

          <motion.a
            href="mailto:kunalsingh.prf@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/20 text-white/70 hover:text-white text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:border-white/40 inline-block"
            data-cursor-hover
          >
            Send Email Directly
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="socials-container">
          <p className="text-xs tracking-[0.3em] text-white/20 uppercase mb-6">
            Find me on
          </p>
          <div className="flex items-center justify-center gap-6">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ y: -4, scale: 1.1 }}
                className="social-link w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-300 text-xs font-mono"
                data-cursor-hover
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20 tracking-[0.1em]">
              © 2024 KUNAL SINGH (LASTCOOKIEE). ALL RIGHTS RESERVED.
            </p>
            <p className="text-xs text-white/10 tracking-[0.1em]">
              DESIGNED & BUILT WITH PRECISION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
