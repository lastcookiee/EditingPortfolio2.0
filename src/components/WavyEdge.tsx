"use client";

import React from "react";

interface WavyEdgeProps {
  fillColor?: string; // color of the bottom section (e.g. black #000000)
  className?: string;
  waves?: number;
}

export default function WavyEdge({
  fillColor = "#000000",
  className = "",
  waves = 8,
}: WavyEdgeProps) {
  // Generate a scalloped / wavy path
  const width = 1440;
  const height = 48;
  const step = width / waves;

  let pathD = `M 0,0 `;
  for (let i = 0; i < waves; i++) {
    const startX = i * step;
    const endX = (i + 1) * step;
    const midX = startX + step / 2;
    pathD += `Q ${midX},${height} ${endX},0 `;
  }
  pathD += `L ${width},${height} L 0,${height} Z`;

  return (
    <div className={`w-full overflow-hidden leading-none select-none ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12 block"
        aria-hidden="true"
      >
        <path d={pathD} fill={fillColor} />
      </svg>
    </div>
  );
}
