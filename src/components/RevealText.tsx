"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  wrapperClassName?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const customEase = [0.22, 1, 0.36, 1] as const;

export default function RevealText({
  children,
  delay = 0,
  className = "",
  wrapperClassName = "",
  as: Component = "div",
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <Component className={`${wrapperClassName} ${className}`}>
        {children}
      </Component>
    );
  }

  return (
    <Component className={`overflow-hidden ${wrapperClassName}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.75,
          delay,
          ease: customEase,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </Component>
  );
}
