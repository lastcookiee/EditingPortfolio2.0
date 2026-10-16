"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import Shape, { ShapeColor, ShapeType } from "@/components/Shape";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index?: number;
}

const STICKER_PALETTE: { type: ShapeType; fill: ShapeColor }[] = [
  { type: "starburst", fill: "lavender" },
  { type: "octagon", fill: "yellow" },
  { type: "scallop", fill: "amber" },
  { type: "flower", fill: "peach" },
  { type: "blob", fill: "sky" },
];

export default function ProjectCard({
  project,
  onOpen,
  index = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(project.poster);

  const sticker1 = STICKER_PALETTE[index % STICKER_PALETTE.length];

  return (
    <article
      onClick={() => onOpen(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer w-full bg-white text-black border border-black/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* 16:9 Media Frame */}
      <div className="relative w-full aspect-video overflow-hidden bg-neutral-900">
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => {
            // Fallback to hqdefault if maxresdefault is unavailable
            setImgSrc(`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`);
          }}
          className={`object-cover transition-transform duration-700 ease-out ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Play Overlay */}
        <div
          className={`absolute inset-0 bg-black/25 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest shadow-lg flex items-center gap-2 transform transition-transform group-hover:scale-105">
            <span className="text-[10px]">▶</span>
            <span>Watch Edit</span>
          </div>
        </div>

        {/* Format badge top-left */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black text-white">
            {project.format === "long" ? "Long Form" : "Short Form"}
          </span>
        </div>
      </div>

      {/* Info Row */}
      <div className="p-6 md:p-8 flex flex-col justify-between gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-xl md:text-2xl lg:text-3xl tracking-tight uppercase leading-snug group-hover:text-black transition-colors">
              {project.title}
            </h3>
            <p className="text-sm md:text-base font-medium text-neutral-500 mt-1">
              {project.category}
            </p>
          </div>

          {/* 1-2 Pastel Sticker Shapes on the right */}
          <div className="flex items-center gap-2 shrink-0 pt-1">
            <div className="transform group-hover:rotate-12 transition-transform duration-300">
              <Shape
                type={sticker1.type}
                fill={sticker1.fill}
                size={28}
                spin={isHovered}
                spinDuration={12}
                pop={false}
              />
            </div>
            {project.stickers && project.stickers.length > 0 && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-black/20 bg-neutral-100">
                {project.stickers[0]}
              </span>
            )}
          </div>
        </div>

        {/* Description & Tags */}
        <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-[11px] font-medium border border-neutral-200 text-neutral-700 bg-neutral-50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
