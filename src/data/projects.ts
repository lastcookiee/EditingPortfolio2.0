export interface Project {
  id: string;
  title: string;
  category: string;
  format: "long" | "short";
  youtubeId: string;
  previewMp4?: string;
  poster: string;
  featured: boolean;
  description: string;
  tags: string[];
  stickers?: string[];
}

export const projects: Project[] = [
  // 4 Featured Projects (Top of Work Done)
  {
    id: "gen-ai-story",
    title: "GEN-AI VISUAL STORY EDIT",
    category: "Gen-AI / Narrative Direction",
    format: "long",
    youtubeId: "NQOAQP0mow0",
    poster: "https://img.youtube.com/vi/NQOAQP0mow0/maxresdefault.jpg",
    featured: true,
    description:
      "A Gen AI-driven visual edit blending prompt-crafted scenes, cinematic pacing, and intentional transitions. Designed to feel futuristic while keeping emotional storytelling at the center.",
    tags: ["Gen AI", "Visual Storytelling", "Motion Design", "Cinematic"],
    stickers: ["AI", "4K"],
  },
  {
    id: "kinetic-motion",
    title: "KINETIC MOTION EDIT",
    category: "Motion Graphics / Rhythm Sync",
    format: "short",
    youtubeId: "04RCkhqe_hs",
    poster: "https://img.youtube.com/vi/04RCkhqe_hs/maxresdefault.jpg",
    featured: true,
    description:
      "A dynamic motion graphics piece featuring fluid animations and seamless transitions. Crafted with precision to showcase visual storytelling through movement and design.",
    tags: ["Motion Graphics", "Animation", "Transitions", "After Effects"],
    stickers: ["FLOW", "SYNC"],
  },
  {
    id: "cinematic-motion",
    title: "CINEMATIC MOTION DESIGN",
    category: "VFX / Atmospheric Cut",
    format: "short",
    youtubeId: "xfZWI-taTrg",
    poster: "https://img.youtube.com/vi/xfZWI-taTrg/maxresdefault.jpg",
    featured: true,
    description:
      "A sophisticated motion design piece combining cinematic elements with creative motion graphics. Atmospheric editing paired with stunning visual effects for maximum impact.",
    tags: ["Cinematic", "Motion Design", "VFX", "Atmosphere"],
    stickers: ["CINEMA", "VFX"],
  },
  {
    id: "advanced-motion",
    title: "ADVANCED MOTION GRAPHICS",
    category: "Color Grade / Kinetic Sequencing",
    format: "short",
    youtubeId: "50MgJmqrlYA",
    poster: "https://img.youtube.com/vi/50MgJmqrlYA/maxresdefault.jpg",
    featured: true,
    description:
      "High-energy motion graphics showcasing advanced techniques and creative direction. Dynamic cuts, professional color grading, and smooth motion to captivate viewers.",
    tags: ["Advanced Graphics", "Color Grading", "Effects", "Premiere Pro"],
    stickers: ["GRADE", "BEAT"],
  },

  // 3 LATEST SHORTS (Top of Short-Form Grid)
  {
    id: "latest-hyper-kinetic",
    title: "HYPER-KINETIC MOTION REEL",
    category: "Motion Graphics / Kinetic Typography",
    format: "short",
    youtubeId: "i3PJGXLzp14",
    poster: "https://img.youtube.com/vi/i3PJGXLzp14/maxresdefault.jpg",
    featured: false,
    description:
      "High-energy kinetic typography, graphic animation, and razor-sharp rhythm cuts created for modern digital audiences.",
    tags: ["Motion Graphics", "Kinetic Type", "Visual Rhythm", "After Effects"],
    stickers: ["LATEST", "TYPE"],
  },
  {
    id: "latest-dynamic-flow",
    title: "DYNAMIC VECTOR FLOW",
    category: "Motion Design / Shape Animation",
    format: "short",
    youtubeId: "tCzpo86dBFM",
    poster: "https://img.youtube.com/vi/tCzpo86dBFM/maxresdefault.jpg",
    featured: false,
    description:
      "Fluid shape transitions, synchronized typography animations, and precise visual pacing designed for instant brand impact.",
    tags: ["Vector Motion", "Shape Sync", "Pacing", "Typography"],
    stickers: ["LATEST", "FLOW"],
  },
  {
    id: "latest-kinetic-impact",
    title: "KINETIC IMPACT REEL",
    category: "Motion Graphics / Rhythmic Impact",
    format: "short",
    youtubeId: "b0UJBWo6lug",
    poster: "https://img.youtube.com/vi/b0UJBWo6lug/maxresdefault.jpg",
    featured: false,
    description:
      "Punchy motion design sequences, beat-matched animation transients, and bold typographic hierarchies.",
    tags: ["Motion Design", "Beat Matching", "Visual Pacing", "After Effects"],
    stickers: ["LATEST", "SYNC"],
  },

  // Long Form Projects (With SpHc7nXVuXE as latest)
  {
    id: "vijayawada-motion-comp",
    title: "VIJAYAWADA EVENT MOTION COMP",
    category: "Motion Graphics / Linked Composition",
    format: "long",
    youtubeId: "SpHc7nXVuXE",
    poster: "https://img.youtube.com/vi/SpHc7nXVuXE/maxresdefault.jpg",
    featured: false,
    description:
      "Dynamic event motion graphics composition featuring fluid camera sweeps, multi-layered visual rhythm, and seamless Adobe After Effects linked comp workflows.",
    tags: ["Event Motion", "Linked Comp", "Visual Rhythm", "After Effects", "Live Highlights"],
    stickers: ["NEW", "AE"],
  },
  {
    id: "apex-ascendance",
    title: "APEX LEGENDS: ASCENDANCE",
    category: "Gaming / Cinematic Montage",
    format: "long",
    youtubeId: "9sHejZ1D5R4",
    poster: "https://img.youtube.com/vi/9sHejZ1D5R4/maxresdefault.jpg",
    featured: false,
    description:
      "High-octane competitive montage weaving cinematic camera tracks, 3D title placements, and beat-dropped velocity.",
    tags: ["Cinematic", "Color Grade", "Sound Design"],
    stickers: ["LONG", "3D"],
  },
  {
    id: "valorant-documentary",
    title: "VALORANT CHAMPIONS DOC",
    category: "Documentary / Esports Narrative",
    format: "long",
    youtubeId: "hcWsJwwwSs0",
    poster: "https://img.youtube.com/vi/hcWsJwwwSs0/maxresdefault.jpg",
    featured: false,
    description:
      "Narrative-driven esports documentary blending tournament comms, emotional player arcs, and explosive kinetic match highlights.",
    tags: ["Narrative", "Pacing", "Soundtrack"],
    stickers: ["DOC", "STORY"],
  },
  {
    id: "esports-anthem",
    title: "ESPORTS SEASON ANTHEM",
    category: "Commercial / Fast Cut",
    format: "long",
    youtubeId: "zG3hNL08Dro",
    poster: "https://img.youtube.com/vi/zG3hNL08Dro/maxresdefault.jpg",
    featured: false,
    description:
      "Fast-paced seasonal anthem featuring aggressive transitions, glitch typography, and immersive stadium audio design.",
    tags: ["Transitions", "Anthem", "After Effects"],
    stickers: ["HYPER", "SOUND"],
  },

  // Additional Short Form Projects
  {
    id: "velocity-beatdrop",
    title: "VELOCITY BEAT-DROP",
    category: "Beat Sync / Velocity Ramping",
    format: "short",
    youtubeId: "FM7Y3rWfEnc",
    poster: "https://img.youtube.com/vi/FM7Y3rWfEnc/maxresdefault.jpg",
    featured: false,
    description:
      "Frame-perfect audio waveform sync cut with aggressive speed ramping, bass impact shakes, and flash frames.",
    tags: ["Beat Sync", "Speed Ramp", "Sound Design"],
    stickers: ["BEAT"],
  },
  {
    id: "neon-glitchflow",
    title: "NEON GLITCHFLOW",
    category: "Glitch / Kinetic Typography",
    format: "short",
    youtubeId: "BZ5kedDutf4",
    poster: "https://img.youtube.com/vi/BZ5kedDutf4/maxresdefault.jpg",
    featured: false,
    description:
      "Analog distortion paired with RGB split kinetic typography and hyper-accelerated cuts.",
    tags: ["Glitch", "Typography", "Fast Cut"],
    stickers: ["GLITCH"],
  },
  {
    id: "ghost-fragment",
    title: "GHOST FRAGMENT",
    category: "Cinematic Reel / 3D Track",
    format: "short",
    youtubeId: "WK2CGDyyIoA",
    poster: "https://img.youtube.com/vi/WK2CGDyyIoA/maxresdefault.jpg",
    featured: false,
    description:
      "Ethereal atmospheric grade with subtle 3D tracking and smooth spatial camera pans.",
    tags: ["Atmospheric", "3D Tracking", "Color Grade"],
    stickers: ["MOOD"],
  },
  {
    id: "sync-or-sink",
    title: "SYNC OR SINK",
    category: "Beat Sync / Micro Timing",
    format: "short",
    youtubeId: "zaKy6u7joSw",
    poster: "https://img.youtube.com/vi/zaKy6u7joSw/maxresdefault.jpg",
    featured: false,
    description:
      "Snappy rhythmic cuts timed to percussion transients with custom impact audio sweeps.",
    tags: ["Rhythm", "Percussion", "Snappy"],
    stickers: ["RHYTHM"],
  },
  {
    id: "bass-heavy-impact",
    title: "BASS HEAVY IMPACT",
    category: "Short Form / Retention Hook",
    format: "short",
    youtubeId: "a3CngW4ZOzY",
    poster: "https://img.youtube.com/vi/a3CngW4ZOzY/maxresdefault.jpg",
    featured: false,
    description:
      "Short-form hook-optimized reel structured to maximize viewer retention within the first 2 seconds.",
    tags: ["Retention", "Hooks", "Reel"],
    stickers: ["HOOK"],
  },
  {
    id: "hyperdrive-cuts",
    title: "HYPERDRIVE CUTS",
    category: "Motion Design / Match Cuts",
    format: "short",
    youtubeId: "elIRzktSAuY",
    poster: "https://img.youtube.com/vi/elIRzktSAuY/maxresdefault.jpg",
    featured: false,
    description:
      "Seamless whip pans, kinetic match cuts, and bold typographic overlays in rapid sequence.",
    tags: ["Match Cuts", "Whip Pans", "Type"],
    stickers: ["SPEED"],
  },
  {
    id: "tokyo-drift-rhythm",
    title: "TOKYO DRIFT RHYTHM",
    category: "Short Form / Color Mood",
    format: "short",
    youtubeId: "9mhl_Q0Z7D0",
    poster: "https://img.youtube.com/vi/9mhl_Q0Z7D0/maxresdefault.jpg",
    featured: false,
    description:
      "Urban aesthetic montage combining night grading, light streaks, and precision pacing.",
    tags: ["Urban Grade", "Pacing", "Night"],
    stickers: ["NIGHT"],
  },
  {
    id: "phantom-echo",
    title: "PHANTOM ECHO",
    category: "Beat Sync / Dynamic Zoom",
    format: "short",
    youtubeId: "ygNN_1fK3Rw",
    poster: "https://img.youtube.com/vi/ygNN_1fK3Rw/maxresdefault.jpg",
    featured: false,
    description:
      "Glitch sync reel with dynamic zoom transitions and stylized color grade.",
    tags: ["Glitch Sync", "Zooms", "VFX"],
    stickers: ["ECHO"],
  },
  {
    id: "velocity-flow",
    title: "VELOCITY FLOW",
    category: "Short Form / Optical Velocity",
    format: "short",
    youtubeId: "DSW39SHDdXQ",
    poster: "https://img.youtube.com/vi/DSW39SHDdXQ/maxresdefault.jpg",
    featured: false,
    description:
      "Micro-second audio syncing and optical flow velocity maps that create hypnotic movement.",
    tags: ["Velocity", "Optical Flow", "Precision"],
    stickers: ["OPTICAL"],
  },

  // Archive Projects (Behind "More projects")
  {
    id: "aesthetic-stutter",
    title: "AESTHETIC STUTTER",
    category: "Experimental / Audio Cut",
    format: "short",
    youtubeId: "3DeuaDxEnDw",
    poster: "https://img.youtube.com/vi/3DeuaDxEnDw/maxresdefault.jpg",
    featured: false,
    description:
      "Experimental stutter-frame sequencing and rhythmic audio drops with retro digital texture.",
    tags: ["Stutter", "Experimental", "Texture"],
    stickers: ["RAW"],
  },
  {
    id: "cyber-prowler",
    title: "CYBER PROWLER",
    category: "Short Form / Cyber Aesthetic",
    format: "short",
    youtubeId: "SdBbZ7I7JHs",
    poster: "https://img.youtube.com/vi/SdBbZ7I7JHs/maxresdefault.jpg",
    featured: false,
    description:
      "Neon-lit cyber aesthetic montage with custom motion graphics and aggressive pacing.",
    tags: ["Cyber", "VFX", "Neon"],
    stickers: ["CYBER"],
  },
  {
    id: "midnight-surge",
    title: "MIDNIGHT SURGE",
    category: "Short Form / Momentum Cut",
    format: "short",
    youtubeId: "KSNCXITIBTk",
    poster: "https://img.youtube.com/vi/KSNCXITIBTk/maxresdefault.jpg",
    featured: false,
    description:
      "Dark moody color palette and relentless momentum across every cut from start to finish.",
    tags: ["Mood", "Momentum", "Impact"],
    stickers: ["SURGE"],
  },
];
