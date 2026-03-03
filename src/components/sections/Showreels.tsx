"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface Reel {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
  description: string;
  client: string;
  thumbTime: number;
}

const categories = [
  "All",
  "Motion Graphics",
  "Ads",
  "Long Form",
];

const reels: Reel[] = [
  {
    id: 1,
    title: "SHOWREEL 1",
    category: "Long Form",
    videoUrl: "/videos/showreel-01.mp4",
    description: "Ankur Bhaiya Intro — Long form motion graphics & visual storytelling.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 2,
    title: "SHOWREEL 2",
    category: "Ads",
    videoUrl: "/videos/showreel-02.mp4",
    description: "Data Science Ad — Motion graphics with dynamic typography & beat-synced transitions.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 3,
    title: "SHOWREEL 3",
    category: "Ads",
    videoUrl: "/videos/showreel-03.mp4",
    description: "Data Science Ad — Motion graphics with cinematic color grading & visual effects.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 4,
    title: "SHOWREEL 4",
    category: "Ads",
    videoUrl: "/videos/showreel-04.mp4",
    description: "Data Science Ad — Motion graphics with energetic pacing & brand visuals.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 5,
    title: "SHOWREEL 5",
    category: "Motion Graphics",
    videoUrl: "/videos/showreel-05.mp4",
    description: "Kodr & Kodex Ad — Motion graphics with kinetic typography & creative transitions.",
    client: "Sheryians Coding School",
    thumbTime: 8,
  },
  {
    id: 6,
    title: "SHOWREEL 6",
    category: "Motion Graphics",
    videoUrl: "/videos/showreel-06.mp4",
    description: "Kodr & Kodex Ad — Motion graphics with bold visuals & rhythm-driven editing.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 7,
    title: "SHOWREEL 7",
    category: "Motion Graphics",
    videoUrl: "/videos/showreel-07.mp4",
    description: "Kodr & Kodex Ad — Motion graphics with glitch effects & seamless flow.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 8,
    title: "SHOWREEL 8",
    category: "Motion Graphics",
    videoUrl: "/videos/showreel-08.mp4",
    description: "Kodr & Kodex Ad — Motion graphics with dynamic composition & sound design.",
    client: "Sheryians Coding School",
    thumbTime: 8,
  },
  {
    id: 9,
    title: "SHOWREEL 9",
    category: "Motion Graphics",
    videoUrl: "/videos/showreel-09.mp4",
    description: "Kodr & Kodex Ad — Motion graphics with creative direction & visual storytelling.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 10,
    title: "SHOWREEL 10",
    category: "Motion Graphics",
    videoUrl: "/videos/showreel-10.mp4",
    description: "Kodr & Kodex Ad — Motion graphics with beat sync & energetic transitions.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 11,
    title: "SHOWREEL 11",
    category: "Long Form",
    videoUrl: "/videos/showreel-11.mp4",
    description: "NYC Degree Is Important — Long form edit with motion graphics & storytelling.",
    client: "Sheryians Coding School",
    thumbTime: 10,
  },
  {
    id: 12,
    title: "SHOWREEL 12",
    category: "Ads",
    videoUrl: "/videos/showreel-12.mp4",
    description: "Hiring Ad — Motion graphics with bold typography & brand identity.",
    client: "Sheryians Coding School",
    thumbTime: 8,
  },
  {
    id: 13,
    title: "SHOWREEL 13",
    category: "Ads",
    videoUrl: "/videos/showreel-13.mp4",
    description: "Javascript Ad — Motion graphics with dynamic text animation & visual effects.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 14,
    title: "SHOWREEL 14",
    category: "Ads",
    videoUrl: "/videos/showreel-14.mp4",
    description: "Javascript Ad — Motion graphics with cinematic pacing & sound design.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 15,
    title: "SHOWREEL 15",
    category: "Ads",
    videoUrl: "/videos/showreel-15.mp4",
    description: "SRC Ad — Motion graphics with creative transitions & brand visuals.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
  {
    id: 16,
    title: "SHOWREEL 16",
    category: "Ads",
    videoUrl: "/videos/showreel-16.mp4",
    description: "SRC Ad — Motion graphics with kinetic design & rhythm-driven editing.",
    client: "Sheryians Coding School",
    thumbTime: 2,
  },
];

function VideoModal({
  reel,
  onClose,
}: {
  reel: Reel;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 modal-backdrop" />

      {/* Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full max-w-5xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
          data-cursor-hover
        >
          Close ✕
        </button>

        {/* Video */}
        <div className="relative w-full bg-black border border-white/10 overflow-hidden">
          <div className="absolute inset-0 scanlines pointer-events-none z-10 opacity-20" />
          <video
            src={reel.videoUrl}
            className="w-full h-auto max-h-[75vh]"
            controls
            autoPlay
            playsInline
          />
        </div>

        {/* Info */}
        <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {reel.title}
            </h3>
            <p className="text-[#00d4ff]/60 text-xs tracking-[0.2em] uppercase mt-1">
              {reel.category} — {reel.client}
            </p>
          </div>
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            {reel.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ReelCard({ reel, onClick }: { reel: Reel; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Start playing once the video element mounts and loads
  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isHovered]);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden cursor-pointer"
      data-cursor-hover
    >
      {/* Card */}
      <div className="relative aspect-video bg-[#0a0a0a] overflow-hidden border border-white/5">
        {/* Video only renders on hover — zero downloads until user interacts */}
        {isHovered && (
          <video
            ref={videoRef}
            src={reel.videoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="auto"
          />
        )}

        {/* Static styled thumbnail — always visible, fades out on hover */}
        <div className={`absolute inset-0 transition-opacity duration-300 z-[1] ${isHovered ? "opacity-0" : "opacity-100"}`}>
          {/* Cinematic gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#111827] to-[#0a0a0a]" />

          {/* Subtle accent glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#00d4ff]/[0.03] to-transparent" />

          {/* Reel number display */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            {/* Play button */}
            <div className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#00d4ff]/50 transition-all duration-300 group-hover:scale-110">
              <div className="w-0 h-0 border-l-[10px] border-l-white/60 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1 group-hover:border-l-[#00d4ff]/80 transition-colors duration-300" />
            </div>
            {/* Reel number */}
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">
              #{String(reel.id).padStart(2, "0")}
            </span>
          </div>

          {/* Corner accent lines */}
          <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-[#00d4ff]/15" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-[#00d4ff]/15" />
        </div>

        {/* Scanlines on hover */}
        <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-[2]" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] tracking-[0.15em] uppercase bg-black/60 px-2 py-1 text-[#00d4ff]/80 border border-[#00d4ff]/20">
            {reel.category}
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-3 px-1">
        <h3 className="text-sm font-bold text-white/80 tracking-wide group-hover:text-white transition-colors duration-300 glitch-hover">
          {reel.title}
        </h3>
        <p className="text-xs text-[#a855f7]/50 mt-0.5">{reel.client}</p>
        <p className="text-xs text-white/30 mt-1 line-clamp-1">
          {reel.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Showreels() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);

  const filteredReels =
    activeCategory === "All"
      ? reels
      : reels.filter((r) => r.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".showreel-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".filter-btn", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showreels"
      className="relative py-32 px-6 md:px-12 lg:px-24"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="showreel-title text-xs tracking-[0.4em] text-[#00d4ff]/50 font-mono uppercase mb-4">
              // SELECTED WORK
            </p>
            <h2 className="showreel-title text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
              SHOWREELS
              <span className="text-[#00d4ff]">.</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-[#00d4ff] text-[#00d4ff] bg-[#00d4ff]/5"
                    : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/70"
                }`}
                data-cursor-hover
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReels.map((reel) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                onClick={() => setSelectedReel(reel)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedReel && (
          <VideoModal
            reel={selectedReel}
            onClose={() => setSelectedReel(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
