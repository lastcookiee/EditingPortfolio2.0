"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  videoUrl: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Typography Reel Series",
    subtitle: "Kinetic Type Collection",
    description:
      "A series of typography-driven reels showcasing the power of words in motion. Each reel explores different typographic styles, from aggressive cuts to smooth transitions. Beat-synced text animations that feel alive.",
    tags: ["Typography", "After Effects", "Beat Sync"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    color: "#00d4ff",
  },
  {
    id: 2,
    title: "WHAT IS BEHIND THE DOOR",
    subtitle: "Cinematic Short",
    description:
      "A cinematic storytelling piece that keeps the viewer guessing. Atmospheric editing with deep color grading, tension-building cuts, and a narrative structure designed to captivate from start to finish.",
    tags: ["Cinematic", "Storytelling", "Color Grading"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    color: "#a855f7",
  },
  {
    id: 3,
    title: "LAN Fest Aftermovie",
    subtitle: "Event Highlight Reel",
    description:
      "High-energy aftermovie capturing the essence of competitive gaming. Fast-paced cuts, crowd reactions, and epic gaming moments woven together with precision timing and professional sound design.",
    tags: ["Gaming", "Premiere Pro", "Transitions"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    color: "#ff3366",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
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
      <div className="absolute inset-0 bg-black/90 modal-backdrop" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full max-w-5xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
          data-cursor-hover
        >
          Close ✕
        </button>

        <div className="relative w-full aspect-video bg-black border border-white/10 overflow-hidden">
          <div className="absolute inset-0 scanlines pointer-events-none z-10 opacity-20" />
          <iframe
            src={`${project.videoUrl}?autoplay=1&mute=0`}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <div className="mt-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p
                className="text-sm mt-1 tracking-[0.1em]"
                style={{ color: project.color }}
              >
                {project.subtitle}
              </p>
            </div>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-2xl mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 border border-white/10 text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
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

      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="projects-title text-xs tracking-[0.4em] text-[#00d4ff]/50 font-mono uppercase mb-4">
          // PROJECTS
        </p>
        <h2 className="projects-title text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-16">
          FEATURED WORK<span className="text-[#00d4ff]">.</span>
        </h2>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
              className="project-card group relative overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer"
              data-cursor-hover
            >
              {/* Thumbnail area */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#0a0a0a]" />

                {/* Color accent */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.color}10 0%, transparent 70%)`,
                  }}
                />

                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-300 group-hover:scale-110">
                    <div className="w-0 h-0 border-l-[10px] border-l-white/60 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1 group-hover:border-l-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Glitch lines on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className="absolute top-1/4 left-0 w-full h-[1px]"
                    style={{ backgroundColor: `${project.color}30` }}
                  />
                  <div
                    className="absolute top-3/4 left-0 w-full h-[1px]"
                    style={{ backgroundColor: `${project.color}20` }}
                  />
                </div>

                {/* Scanlines */}
                <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-2"
                  style={{ color: `${project.color}80` }}
                >
                  {project.subtitle}
                </p>
                <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-glow-blue glitch-hover">
                  {project.title}
                </h3>
                <p className="text-xs text-white/30 leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 border border-white/5 text-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="h-[2px] w-0 group-hover:w-full transition-all duration-700"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
