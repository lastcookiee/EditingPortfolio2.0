"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Shape from "@/components/Shape";

const easeCustom = [0.22, 1, 0.36, 1] as const;

export default function Statement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-white text-black py-28 md:py-40 px-6 md:px-12 flex items-center justify-center select-none overflow-hidden border-y border-black">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Outlined pill label */}
        <div className="mb-8 flex justify-center">
          <span className="px-5 py-1.5 rounded-full border border-black text-xs font-bold uppercase tracking-widest text-black">
            The Philosophy
          </span>
        </div>

        {/* Statement typography */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.3] text-black">
          {/* Line 1 */}
          <div className="overflow-hidden pb-2">
            <motion.p
              initial={shouldReduceMotion ? false : { y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: easeCustom }}
            >
              Every frame has a purpose.
            </motion.p>
          </div>

          {/* Line 2 with yellow octagon */}
          <div className="overflow-hidden pb-2 flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            <motion.div
              initial={shouldReduceMotion ? false : { y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="inline-flex items-center gap-3 md:gap-4 flex-wrap justify-center"
            >
              <span>Raw footage</span>
              <span className="inline-flex items-center align-middle mx-1">
                <Shape
                  type="octagon"
                  fill="yellow"
                  size={44}
                  spin={false}
                  pop={true}
                  className="inline-block shadow-sm"
                />
              </span>
              <span>becomes rhythm.</span>
            </motion.div>
          </div>

          {/* Line 3 with tiny looping reel thumbnail */}
          <div className="overflow-hidden pb-2 flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            <motion.div
              initial={shouldReduceMotion ? false : { y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="inline-flex items-center gap-3 md:gap-4 flex-wrap justify-center"
            >
              <span>Rhythm becomes</span>
              <span className="inline-flex items-center align-middle mx-1">
                <span className="relative w-16 md:w-20 aspect-video rounded-lg overflow-hidden border-2 border-black inline-block shadow-md">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/reel-hero.mp4" type="video/mp4" />
                  </video>
                </span>
              </span>
              <span>stories.</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
