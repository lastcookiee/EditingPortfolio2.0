"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterLineProps {
  phrases?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const DEFAULT_PHRASES = [
  "beat-synced edits",
  "kinetic typography",
  "cinematic reels",
  "Gen-AI stories",
];

export default function TypewriterLine({
  phrases = DEFAULT_PHRASES,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className = "",
}: TypewriterLineProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0] || "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 200);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <span className={`inline-block font-bold ${className}`}>
        {phrases.join(" · ")}
      </span>
    );
  }

  return (
    <span className={`inline-block font-bold ${className}`}>
      <span>{displayText}</span>
      <span className="inline-block animate-pulse font-normal ml-0.5">_</span>
    </span>
  );
}
