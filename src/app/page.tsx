"use client";

import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Hero from "@/components/sections/Hero";
import ShowreelExpand from "@/components/sections/ShowreelExpand";
import Statement from "@/components/sections/Statement";
import ServicesIntro from "@/components/sections/ServicesIntro";
import ServicesList from "@/components/sections/ServicesList";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import WorkDone from "@/components/sections/WorkDone";
import SocialMarquee from "@/components/sections/SocialMarquee";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import PhilosophyMarquee from "@/components/sections/PhilosophyMarquee";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Fast Session Intro (<=1.2s wipe up) */}
      <Intro />

      {/* Smooth Scroll Container */}
      <SmoothScroll>
        {/* 2. Fixed Monogram Nav & Fullscreen Menu */}
        <Navbar />

        <main className="relative w-full overflow-hidden">
          {/* 3. HERO (black) */}
          <Hero />

          {/* 4. SHOWREEL EXPAND (black) */}
          <ShowreelExpand />

          {/* 5. STATEMENT (white) */}
          <Statement />

          {/* 6. SERVICES INTRO (black) */}
          <ServicesIntro />

          {/* 7. SERVICES LIST (lavender) */}
          <ServicesList />

          {/* 8. CLIENTS & TOOLS MARQUEE (black band) */}
          <ClientsMarquee />

          {/* 9. WORK DONE (white) */}
          <WorkDone />

          {/* 10. SOCIAL MARQUEE (yellow band) */}
          <SocialMarquee />

          {/* 11. ABOUT (black) */}
          <About />

          {/* 12. EXPERIENCE (white) */}
          <Experience />

          {/* 13. PHILOSOPHY MARQUEE (black) */}
          <PhilosophyMarquee />

          {/* 14. CONTACT (yellow) */}
          <Contact />

          {/* 15. FOOTER (black) */}
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
