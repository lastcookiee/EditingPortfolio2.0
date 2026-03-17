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
  youtubeUrl: string;
  thumbnailUrl: string;
  description: string;
}

const categories = [
  "All",
  "Short Form",
  "Long Form",
];

const reels: Reel[] = [
  {
    id: 1,
    title: "SHOWREEL 1",
    category: "Short Form",
    youtubeUrl: "https://youtube.com/shorts/ygNN_1fK3Rw",
    thumbnailUrl: "https://img.youtube.com/vi/ygNN_1fK3Rw/hqdefault.jpg",
    description: "Short-form edit",
  },
  {
    id: 2,
    title: "SHOWREEL 2",
    category: "Short Form",
    youtubeUrl: "https://youtube.com/shorts/DSW39SHDdXQ",
    thumbnailUrl: "https://img.youtube.com/vi/DSW39SHDdXQ/hqdefault.jpg",
    description: "Short-form edit",
  },
  {
    id: 3,
    title: "SHOWREEL 3",
    category: "Long Form",
    youtubeUrl: "https://youtu.be/zG3hNL08Dro?si=CW2WR5wdxZQU8TGz",
    thumbnailUrl: "https://img.youtube.com/vi/zG3hNL08Dro/hqdefault.jpg",
    description: "Long-form edit",
  },
  {
    id: 4,
    title: "SHOWREEL 4",
    category: "Long Form",
    youtubeUrl: "https://youtu.be/NQOAQP0mow0?si=DmEhwGOfs7QoPbZp",
    thumbnailUrl: "https://img.youtube.com/vi/NQOAQP0mow0/hqdefault.jpg",
    description: "Long-form edit",
  },
  {
    id: 5,
    title: "SHOWREEL 5",
    category: "Short Form",
    youtubeUrl: "https://youtube.com/shorts/3DeuaDxEnDw",
    thumbnailUrl: "https://img.youtube.com/vi/3DeuaDxEnDw/hqdefault.jpg",
    description: "Short-form edit",
  },
  {
    id: 6,
    title: "SHOWREEL 6",
    category: "Short Form",
    youtubeUrl: "https://youtube.com/shorts/SdBbZ7I7JHs",
    thumbnailUrl: "https://img.youtube.com/vi/SdBbZ7I7JHs/hqdefault.jpg",
    description: "Short-form edit",
  },
  {
    id: 7,
    title: "SHOWREEL 7",
    category: "Short Form",
    youtubeUrl: "https://youtube.com/shorts/KSNCXITIBTk",
    thumbnailUrl: "https://img.youtube.com/vi/KSNCXITIBTk/hqdefault.jpg",
    description: "Short-form edit",
  },
];

function getYouTubeVideoId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|watch\?v=))([a-zA-Z0-9_-]{11})/);
  return match?.[1] ?? "";
}

function VideoModal({
  reel,
  onClose,
}: {
  reel: Reel;
  onClose: () => void;
}) {
  const videoId = getYouTubeVideoId(reel.youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-10000 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 modal-backdrop" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="relative w-full max-w-5xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
          data-cursor-hover
        >
          Close x
        </button>

        <div className="relative w-full aspect-video bg-black border border-white/10 overflow-hidden">
          <iframe
            src={embedUrl}
            title={reel.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
            {reel.title}
          </h3>
          <span className="text-xs tracking-[0.2em] uppercase text-[#00d4ff]/80">
            {reel.category}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ReelCard({ reel, onClick }: { reel: Reel; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      className="group relative overflow-hidden"
      data-cursor-hover
    >
      {/* Card */}
      <button
        type="button"
        onClick={onClick}
        className="block w-full text-left relative aspect-video bg-[#0a0a0a] overflow-hidden border border-white/5 cursor-pointer"
      >
        <img
          src={reel.thumbnailUrl}
          alt={`${reel.title} thumbnail`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-300" />

        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] tracking-[0.15em] uppercase bg-black/70 px-2 py-1 text-[#00d4ff]/90 border border-[#00d4ff]/25">
            {reel.category}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-14 h-14 rounded-full border border-white/30 bg-black/30 flex items-center justify-center group-hover:border-[#00d4ff]/70 transition-all duration-300 group-hover:scale-110">
            <div className="w-0 h-0 border-l-10 border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1" />
          </div>
        </div>
      </button>

      {/* Title */}
      <div className="mt-3 px-1">
        <h3 className="text-sm font-bold text-white/80 tracking-wide group-hover:text-white transition-colors duration-300 glitch-hover">
          {reel.title}
        </h3>
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
                className={`filter-btn text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
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
