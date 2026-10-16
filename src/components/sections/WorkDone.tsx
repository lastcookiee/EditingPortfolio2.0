"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import VideoLightbox from "@/components/VideoLightbox";
import Shape, { ShapeColor, ShapeType } from "@/components/Shape";

type FilterType = "ALL" | "SHORT FORM" | "LONG FORM";

const STICKER_PALETTE: { type: ShapeType; fill: ShapeColor }[] = [
  { type: "starburst", fill: "lavender" },
  { type: "octagon", fill: "yellow" },
  { type: "scallop", fill: "amber" },
  { type: "flower", fill: "peach" },
  { type: "blob", fill: "sky" },
];

export default function WorkDone() {
  const [filter, setFilter] = useState<FilterType>("ALL");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 4 Featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  // Non-featured projects for the grid
  const gridProjects = projects.filter((p) => !p.featured);

  // Filtered grid projects
  const filteredGrid = gridProjects.filter((p) => {
    if (filter === "SHORT FORM") return p.format === "short";
    if (filter === "LONG FORM") return p.format === "long";
    return true;
  });

  // At most 12 reels in the grid; rest behind "More projects"
  const visibleGridProjects = showAllProjects
    ? filteredGrid
    : filteredGrid.slice(0, 12);

  const hasMore = filteredGrid.length > 12;

  return (
    <>
      <section
        id="work"
        className="relative w-full bg-white text-black py-24 md:py-36 px-6 md:px-12 select-none border-b border-black overflow-hidden"
      >
        {/* Sticky Centred "WORK DONE" Title that cards scroll over */}
        <div className="sticky top-20 z-0 flex flex-col items-center justify-center text-center mb-12 pointer-events-none will-change-transform [transform:translateZ(0)]">
          <span className="px-5 py-1.5 rounded-full border border-black text-xs font-bold uppercase tracking-widest text-black mb-4 bg-white">
            Selected Works
          </span>
          <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-black uppercase tracking-tighter text-black opacity-15 leading-none">
            WORK DONE
          </h2>
        </div>

        {/* Content Container (z-10 to scroll over sticky title) */}
        <div className="relative z-10 max-w-[1200px] mx-auto space-y-24">
          {/* SECTION 1: 4 Featured Stacked Full-Width Cards */}
          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-500">
                {"// FEATURED EDITS (04)"}
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-500">
                FULL-BLEED SELECTION
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setSelectedProject}
                  index={idx}
                />
              ))}
            </div>
          </div>

          {/* SECTION 2: Filter Pills + Grid */}
          <div className="pt-12 border-t-2 border-black">
            {/* Header + Filter Pills */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                  Archive & Explorations
                </h3>
                <p className="text-sm font-medium text-neutral-500 mt-1">
                  Categorized by format and kinetic style
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-full border border-black bg-neutral-100">
                {(["ALL", "SHORT FORM", "LONG FORM"] as FilterType[]).map((tab) => {
                  const isActive = filter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setFilter(tab)}
                      className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? "bg-black text-white shadow"
                          : "text-black hover:bg-neutral-200"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Grid Layout */}
            {/* If filter is LONG FORM: 2 columns at 16:9 */}
            {filter === "LONG FORM" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visibleGridProjects.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpen={setSelectedProject}
                    index={idx}
                  />
                ))}
              </div>
            )}

            {/* If filter is SHORT FORM: 3 columns at 9:16 */}
            {filter === "SHORT FORM" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleGridProjects.map((project, idx) => {
                  const sticker = STICKER_PALETTE[idx % STICKER_PALETTE.length];
                  return (
                    <article
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer bg-white border border-black/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* 9:16 Vertical Reel Frame */}
                      <div className="relative w-full aspect-[9/16] overflow-hidden bg-neutral-900">
                        <Image
                          src={project.poster}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* Play button overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                            ▶
                          </div>
                        </div>

                        {/* Top badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black text-white">
                            Short Form
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5 flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-extrabold text-base tracking-tight uppercase group-hover:text-black">
                            {project.title}
                          </h4>
                          <Shape
                            type={sticker.type}
                            fill={sticker.fill}
                            size={22}
                            spin={false}
                            pop={false}
                          />
                        </div>
                        <p className="text-xs text-neutral-500 font-medium">
                          {project.category}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* If filter is ALL: Mixed responsive presentation */}
            {filter === "ALL" && (
              <div className="space-y-12">
                {/* Long Form subset (2 columns 16:9) */}
                {visibleGridProjects.some((p) => p.format === "long") && (
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6">
                      Long-Form Projects
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {visibleGridProjects
                        .filter((p) => p.format === "long")
                        .map((project, idx) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            onOpen={setSelectedProject}
                            index={idx}
                          />
                        ))}
                    </div>
                  </div>
                )}

                {/* Short Form subset (3 columns 9:16) */}
                {visibleGridProjects.some((p) => p.format === "short") && (
                  <div className="pt-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6">
                      Short-Form / Reels (9:16)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {visibleGridProjects
                        .filter((p) => p.format === "short")
                        .map((project, idx) => {
                          const sticker = STICKER_PALETTE[idx % STICKER_PALETTE.length];
                          return (
                            <article
                              key={project.id}
                              onClick={() => setSelectedProject(project)}
                              className="group cursor-pointer bg-white border border-black/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                              <div className="relative w-full aspect-[9/16] overflow-hidden bg-neutral-900">
                                <Image
                                  src={project.poster}
                                  alt={project.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                                    ▶
                                  </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black text-white">
                                    Reel
                                  </span>
                                </div>
                              </div>

                              <div className="p-5 flex flex-col gap-2">
                                <div className="flex items-center justify-between gap-2">
                                  <h4 className="font-extrabold text-base tracking-tight uppercase group-hover:text-black">
                                    {project.title}
                                  </h4>
                                  <Shape
                                    type={sticker.type}
                                    fill={sticker.fill}
                                    size={22}
                                    spin={false}
                                    pop={false}
                                  />
                                </div>
                                <p className="text-xs text-neutral-500 font-medium">
                                  {project.category}
                                </p>
                              </div>
                            </article>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* More Projects Button */}
            {hasMore && (
              <div className="flex justify-center mt-16">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="px-8 py-4 rounded-full border-2 border-black bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center gap-3 shadow-md"
                >
                  <span>{showAllProjects ? "Show Less" : "More projects"}</span>
                  <span className="text-sm">{showAllProjects ? "↑" : "↓"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      {selectedProject && (
        <VideoLightbox
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          youtubeId={selectedProject.youtubeId}
          title={selectedProject.title}
        />
      )}
    </>
  );
}
