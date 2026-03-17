"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";

// Dynamic imports for code splitting
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const Showreels = dynamic(() => import("@/components/sections/Showreels"), { ssr: false });
const FeaturedReel = dynamic(() => import("@/components/sections/FeaturedReel"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: false });
const Philosophy = dynamic(() => import("@/components/sections/Philosophy"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Grain Overlay */}
      <GrainOverlay />

      {/* Smooth Scroll Wrapper */}
      <SmoothScroll>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          {/* 1. Hero Section */}
          <Hero />

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* 2. Showreel System */}
          <Showreels />

          {/* 3. Featured Hero Video */}
          <FeaturedReel />

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* 4. About Section */}
          <About />

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/5 to-transparent" />

          {/* 5. Skills Section */}
          <Skills />

          {/* 6. Editing Philosophy */}
          <Philosophy />

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#a855f7]/5 to-transparent" />

          {/* 7. Projects Section */}
          <Projects />

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* 8. Experience Timeline */}
          <Experience />

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/5 to-transparent" />

          {/* 9. Contact / CTA */}
          <Contact onOpenContact={openContact} />
        </main>
      </SmoothScroll>
    </>
  );
}
