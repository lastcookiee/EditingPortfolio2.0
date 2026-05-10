"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  color: string;
  popular?: boolean;
}

interface LongFormTier {
  service: string;
  price: string;
}

const shortFormTiers: PricingTier[] = [
  {
    name: "Basic Edit",
    price: "₹500",
    description: "onwards",
    features: [
      "Clean cuts & transitions",
      "Captions/Subtitles",
      "Basic sound effects",
      "Background music",
      "Basic color correction",
    ],
    color: "#00d4ff",
  },
  {
    name: "Enhanced Edit",
    price: "₹1000",
    description: "to ₹1500",
    features: [
      "Everything in Basic Edit",
      "Better engagement-focused editing",
      "Advanced subtitles",
      "Zooms & dynamic transitions",
      "Light motion graphics",
      "Smooth pacing for retention",
      "Trending editing style",
    ],
    color: "#a855f7",
    popular: true,
  },
  {
    name: "Premium / Cinematic Edit",
    price: "₹1500",
    description: "to ₹2000+",
    features: [
      "Full high-quality editing",
      "Advanced motion graphics",
      "Cinematic effects",
      "Professional sound design",
      "Advanced color grading",
      "Velocity edits & sync edits",
      "High engagement storytelling",
      "Premium transitions & effects",
    ],
    color: "#ff3366",
  },
];

const longFormTiers: LongFormTier[] = [
  { service: "First 1 Minute", price: "₹1500" },
  { service: "Every Additional Minute", price: "₹1000/minute" },
];

const longFormFeatures = [
  "Professional pacing",
  "Audio cleanup",
  "Motion graphics",
  "Color grading",
  "Background music & SFX",
  "Engagement optimization",
  "High quality export",
];

const revisionPolicy = [
  { item: "Minor text/audio adjustments", price: "Free" },
  { item: "Major revisions", price: "₹300 per revision" },
];

const importantNotes = [
  "Prices are starting rates and may vary depending on project complexity.",
  "Urgent delivery charges may apply.",
  "50% advance payment required before starting the project.",
  "Final files delivered in high quality format.",
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pricing-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".pricing-card", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-black"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-px opacity-5 pointer-events-none z-0">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-white/10" />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.h2
            className="pricing-title text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-white">Video Editing</span>{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #00d4ff, #a855f7, #ff3366)",
              }}
            >
              Pricing
            </span>
          </motion.h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Professional video editing services tailored to your needs. Choose from short-form content editing
            for social media or long-form content for YouTube and beyond.
          </p>
        </div>

        {/* Short Form Section */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Short Form Content Editing
            <span className="text-white/40 text-base ml-3">
              (Reels, Shorts, TikTok, Instagram Videos)
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shortFormTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="pricing-card relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Glow effect for popular tier */}
                {tier.popular && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-xl opacity-50 group-hover:opacity-75 blur transition duration-300" />
                )}

                <div
                  className={`relative h-full bg-black/40 backdrop-blur border rounded-xl p-8 transition-all duration-300 flex flex-col ${
                    tier.popular
                      ? "border-[#a855f7]/50"
                      : "border-white/10 group-hover:border-white/20"
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#a855f7] to-[#00d4ff] text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Title and Price */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {tier.name}
                    </h4>
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: tier.color }}
                      >
                        {tier.price}
                      </span>
                      <span className="text-white/50 text-sm">
                        {tier.description}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 flex-grow">
                    {tier.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: tier.color }}
                        />
                        <p className="text-white/70 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="mailto:kunalsingh.prf@gmail.com"
                    className="block w-full mt-8 py-3 px-6 font-semibold rounded-lg border transition-all duration-300 text-sm tracking-wider uppercase text-center"
                    style={{
                      borderColor: tier.color,
                      color: tier.color,
                    }}
                    whileHover={{
                      backgroundColor: tier.color,
                      color: "#000",
                      boxShadow: `0 0 30px ${tier.color}80`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor-hover
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Long Form Section */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Long Form Content Editing
            <span className="text-white/40 text-base ml-3">
              (YouTube Videos, Podcasts, Courses, Documentary Style)
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pricing Table */}
            <motion.div
              className="pricing-card relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-black/40 backdrop-blur border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">Pricing</h4>
                <div className="space-y-4">
                  {longFormTiers.map((tier, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-4 border-b border-white/5"
                    >
                      <span className="text-white/80">{tier.service}</span>
                      <span className="text-[#00d4ff] font-bold">
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="pricing-card relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-black/40 backdrop-blur border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">
                  What&apos;s Included
                </h4>
                <div className="space-y-3">
                  {longFormFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 bg-[#00d4ff] flex-shrink-0" />
                      <p className="text-white/70 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Revision Policy & Important Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Revision Policy */}
          <motion.div
            className="pricing-card relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-black/40 backdrop-blur border border-white/10 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">
                Revision Policy
              </h4>
              <div className="space-y-3">
                {revisionPolicy.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/70">{item.item}</span>
                    <span className="text-[#a855f7] font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            className="pricing-card relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-black/40 backdrop-blur border border-white/10 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">
                Important Notes
              </h4>
              <div className="space-y-3">
                {importantNotes.map((note, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 bg-[#ff3366] flex-shrink-0" />
                    <p className="text-white/70 text-sm">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          className="relative mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-white/60 text-lg mb-6">
            Want to discuss your project? Let&apos;s talk about how we can bring
            your vision to life.
          </p>
          <motion.a
            href="mailto:kunalsingh.prf@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-black font-bold rounded-lg uppercase tracking-wider text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
