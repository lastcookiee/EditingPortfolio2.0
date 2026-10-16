"use client";

import React from "react";
import Shape from "@/components/Shape";
import WavyEdge from "@/components/WavyEdge";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-yellow text-black pt-24 md:pt-36 pb-0 select-none overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Outlined Pill Label */}
        <span className="px-6 py-2 rounded-full border-2 border-black text-xs font-black uppercase tracking-widest text-black bg-white/30 mb-12">
          Get in Touch
        </span>

        {/* Thick Black Bar Above */}
        <div className="w-full h-3 md:h-4 bg-black rounded-full mb-8 md:mb-12" />

        {/* Huge Bowlby One SC Title: SAY HELLO with spinning black starburst as the "O" */}
        <div className="my-2 md:my-4 flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 leading-none">
          <h2
            className="font-bowlby text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[170px] uppercase text-black tracking-normal leading-none inline-flex items-center flex-wrap justify-center gap-x-3 md:gap-x-6"
            style={{ fontFamily: "var(--font-bowlby), cursive" }}
          >
            <span>SAY</span>
            <span className="inline-flex items-center">
              <span>HELL</span>
              <span className="inline-flex items-center justify-center mx-2 md:mx-4 align-middle relative -top-1 md:-top-3">
                <Shape
                  type="starburst"
                  fill="black"
                  size="clamp(48px, 12vw, 130px)"
                  spin={true}
                  spinDuration={16}
                  pop={true}
                />
              </span>
            </span>
          </h2>
        </div>

        {/* Thick Black Bar Below */}
        <div className="w-full h-3 md:h-4 bg-black rounded-full mt-8 md:mb-16 mb-12" />

        {/* Big Mailto Link */}
        <div className="space-y-8 my-6">
          <p className="text-base sm:text-xl font-bold uppercase tracking-wider text-black/70">
            Have a project in mind? Let&apos;s build something memorable.
          </p>

          <div>
            <a
              href="mailto:kunalsingh.prf@gmail.com"
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black hover:opacity-75 transition-opacity underline decoration-black decoration-4 underline-offset-8 block tracking-tight"
            >
              kunalsingh.prf@gmail.com
            </a>
          </div>

          {/* Black "Let's talk" Pill */}
          <div className="pt-4 pb-16">
            <a
              href="mailto:kunalsingh.prf@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-black text-white font-extrabold text-sm md:text-base uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl group"
            >
              <span>Let&apos;s talk</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Wavy scalloped SVG edge transitioning seamlessly into the black footer */}
      <div className="w-full pt-8">
        <WavyEdge fillColor="#000000" waves={10} />
      </div>
    </section>
  );
}
