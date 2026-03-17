"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "After Effects",
    description: "Motion graphics, VFX, compositing",
    icon: "Ae",
    color: "#9999FF",
  },
  {
    name: "Premiere Pro",
    description: "Editing, color grading, assembly",
    icon: "Pr",
    color: "#EA77FF",
  },
  {
    name: "Adobe Photoshop",
    description: "Compositing, retouching, design assets",
    icon: "Ps",
    color: "#31A8FF",
  },
  {
    name: "Beat Sync",
    description: "Rhythm-driven editing & timing",
    icon: "♪",
    color: "#00d4ff",
  },
  {
    name: "Color Grading",
    description: "Cinematic looks & mood design",
    icon: "◐",
    color: "#ff6b35",
  },
  {
    name: "Typography",
    description: "Kinetic type & text animation",
    icon: "Aa",
    color: "#a855f7",
  },
  {
    name: "Transitions",
    description: "Creative & seamless flow design",
    icon: "⟿",
    color: "#00ff88",
  },
  {
    name: "Storytelling",
    description: "Narrative structure & pacing",
    icon: "◈",
    color: "#ff3366",
  },
  {
    name: "Sound Design",
    description: "Audio sync & sound effects",
    icon: "◉",
    color: "#ffcc00",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.p
          variants={titleVariants}
          className="text-xs tracking-[0.4em] text-[#00d4ff]/50 font-mono uppercase mb-4"
        >
          // CAPABILITIES
        </motion.p>
        <motion.h2
          variants={titleVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter"
        >
          SKILLS<span className="text-[#00d4ff]">.</span>
        </motion.h2>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: `0 0 40px ${skill.color}20, 0 0 80px ${skill.color}10`,
            }}
            className="p-8 bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
            data-cursor-hover
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${skill.color}08 0%, transparent 70%)`,
              }}
            />

            {/* Icon */}
            <div
              className="relative text-4xl font-bold mb-6 transition-colors duration-300"
              style={{ color: `${skill.color}80` }}
            >
              <span className="group-hover:text-glow-blue">{skill.icon}</span>
            </div>

            {/* Name */}
            <h3 className="relative text-xl font-bold text-white mb-2 tracking-tight">
              {skill.name}
            </h3>

            {/* Description */}
            <p className="relative text-sm text-white/30 leading-relaxed">
              {skill.description}
            </p>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-700"
              style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
