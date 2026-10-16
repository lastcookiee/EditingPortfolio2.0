"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

export type ShapeType = "starburst" | "octagon" | "scallop" | "flower" | "blob";
export type ShapeColor =
  | "lavender"
  | "purpleDeep"
  | "yellow"
  | "amber"
  | "peach"
  | "sky"
  | "black"
  | "white"
  | "grey"
  | string;

const COLOR_MAP: Record<string, string> = {
  lavender: "#CA9DF1",
  purpleDeep: "#7A5FA8",
  yellow: "#FFD650",
  amber: "#FFB900",
  peach: "#F7B9A1",
  sky: "#9FD4F5",
  black: "#000000",
  white: "#FFFFFF",
  grey: "#666666",
};

// 16-ray starburst points (32 vertices: alternating outer 49, inner 14)
const STARBURST_POINTS = (() => {
  const pts: string[] = [];
  for (let i = 0; i < 32; i++) {
    const angle = (i * Math.PI) / 16 - Math.PI / 2;
    const r = i % 2 === 0 ? 49 : 14;
    const x = 50 + r * Math.cos(angle);
    const y = 50 + r * Math.sin(angle);
    pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return pts.join(" ");
})();

// Regular 8-sided octagon
const OCTAGON_POINTS = "29.29,0 70.71,0 100,29.29 100,70.71 70.71,100 29.29,100 0,70.71 0,29.29";

// 12-lobed scalloped circle
const SCALLOP_PATH = (() => {
  const lobes = 12;
  const d: string[] = [];
  for (let i = 0; i < lobes; i++) {
    const a1 = (i * 2 * Math.PI) / lobes;
    const a2 = ((i + 1) * 2 * Math.PI) / lobes;
    const amid = (a1 + a2) / 2;
    const rBase = 40;
    const rOuter = 49;
    const x1 = 50 + rBase * Math.cos(a1);
    const y1 = 50 + rBase * Math.sin(a1);
    const cx = 50 + rOuter * Math.cos(amid);
    const cy = 50 + rOuter * Math.sin(amid);
    const x2 = 50 + rBase * Math.cos(a2);
    const y2 = 50 + rBase * Math.sin(a2);
    if (i === 0) d.push(`M ${x1.toFixed(2)} ${y1.toFixed(2)}`);
    d.push(`Q ${cx.toFixed(2)} ${cy.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`);
  }
  d.push("Z");
  return d.join(" ");
})();

// 4-petal flower
const FLOWER_PATH =
  "M 50 15 C 50 2 30 2 30 25 C 2 25 2 45 25 50 C 2 55 2 75 30 75 C 30 98 50 98 50 85 C 50 98 70 98 70 75 C 98 75 98 55 75 50 C 98 45 98 25 70 25 C 70 2 50 2 50 15 Z";

// Soft organic blob
const BLOB_PATH =
  "M 50 6 C 75 6 94 22 93 47 C 92 72 78 94 51 94 C 24 94 7 76 6 51 C 5 26 25 6 50 6 Z";

interface ShapeProps {
  type: ShapeType;
  fill?: ShapeColor;
  size?: number | string;
  spin?: boolean;
  spinDuration?: number;
  reverse?: boolean;
  pop?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
}

export default function Shape({
  type,
  fill = "lavender",
  size = 40,
  spin = true,
  spinDuration = 24,
  reverse = false,
  className = "",
  style = {},
  "aria-hidden": ariaHidden = true,
}: ShapeProps) {
  const shouldReduceMotion = useReducedMotion();
  const hexColor = COLOR_MAP[fill] || fill;

  const renderShapePath = () => {
    switch (type) {
      case "starburst":
        return <polygon points={STARBURST_POINTS} fill={hexColor} />;
      case "octagon":
        return <polygon points={OCTAGON_POINTS} fill={hexColor} />;
      case "scallop":
        return <path d={SCALLOP_PATH} fill={hexColor} />;
      case "flower":
        return <path d={FLOWER_PATH} fill={hexColor} />;
      case "blob":
        return <path d={BLOB_PATH} fill={hexColor} />;
      default:
        return <circle cx="50" cy="50" r="45" fill={hexColor} />;
    }
  };

  const dim = typeof size === "number" ? `${size}px` : size;
  const isSpinning = spin && !shouldReduceMotion;
  const spinClass = isSpinning
    ? reverse
      ? "animate-spin-slow-reverse"
      : "animate-spin-slow"
    : "";

  return (
    <div
      className={`inline-flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: dim, height: dim, ...style }}
      aria-hidden={ariaHidden}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        className={`overflow-visible ${spinClass}`}
        style={
          isSpinning && spinDuration !== 24
            ? { animationDuration: `${spinDuration}s` }
            : undefined
        }
      >
        {renderShapePath()}
      </svg>
    </div>
  );
}
