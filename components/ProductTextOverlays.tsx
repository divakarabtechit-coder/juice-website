"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

export interface SectionData {
  id: number;
  badge: string;
  headline: string;
  paragraph: string;
  stats?: { label: string; value: string }[];
  ctaButton?: boolean;
}

export const SECTIONS: SectionData[] = [
  {
    id: 0,
    badge: "01 // ORIGIN",
    headline: "Start natural.",
    paragraph: "A single orange. Pure energy waiting to be unleashed.",
    stats: [
      { label: "RAW ORIGIN", value: "VALENCIA" },
      { label: "PURITY", value: "100%" },
    ],
  },
  {
    id: 1,
    badge: "02 // KINETICS",
    headline: "Impact.",
    paragraph: "Momentum builds. Energy compresses. Power prepares to transform.",
    stats: [
      { label: "PRESSURE", value: "87,000 PSI" },
      { label: "TEMP", value: "3.2°C" },
    ],
  },
  {
    id: 2,
    badge: "03 // SYNTHESIS",
    headline: "Break the surface.",
    paragraph: "From fruit to fuel — engineered for performance.",
    stats: [
      { label: "BIOFLAVONOIDS", value: "99.4% ACTIVE" },
      { label: "CELLULAR UPTAKE", value: "2.4X" },
    ],
  },
  {
    id: 3,
    badge: "04 // THE REVELATION",
    headline: "JRINK.",
    paragraph: "Cold-pressed orange intensity. No sugar crash. No compromise.",
    stats: [
      { label: "ADDED SUGAR", value: "0 GRAMS" },
      { label: "CALORIES", value: "92 KCAL" },
    ],
  },
  {
    id: 4,
    badge: "05 // FUEL MATRIX",
    headline: "Built to energize.",
    paragraph: "Electrolytes. Vitamins. High-impact hydration.",
    stats: [
      { label: "VITAMIN C", value: "320% RDA" },
      { label: "POTASSIUM", value: "460 MG" },
    ],
  },
  {
    id: 5,
    badge: "06 // IGNITION",
    headline: "Fuel your momentum.",
    paragraph: "Own the energy. Drink JRINK.",
    ctaButton: true,
    stats: [
      { label: "PRICE", value: "₹149" },
      { label: "SHIPPING", value: "COLD CHAIN" },
    ],
  },
];

interface ProductTextOverlaysProps {
  onBuyClick?: () => void;
}

export default function ProductTextOverlays({ onBuyClick }: ProductTextOverlaysProps) {
  return (
    <div className="relative z-10 -mt-[100vh] w-full">
      {SECTIONS.map((section, idx) => (
        <div
          key={section.id}
          className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-16 pointer-events-none relative"
        >
          <div className="w-full max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.35, once: false }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* LEFT COLUMN: Headline Glass Card */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.65, ease: "easeOut" },
                  },
                }}
                className="pointer-events-auto"
              >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group">
                  {/* Subtle Top Edge Glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse" />
                    <span className="text-xs md:text-sm font-mono tracking-widest text-[#ff6a00] uppercase font-bold">
                      {section.badge}
                    </span>
                  </div>

                  {/* Huge Athletic Headline */}
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
                    {section.headline.includes("JRINK") ? (
                      <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,106,0,0.5)]">
                        JRINK.
                      </span>
                    ) : (
                      section.headline
                    )}
                  </h2>

                  {/* Micro Specs Pill Tags */}
                  {section.stats && (
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                      {section.stats.map((st, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] md:text-xs font-mono text-white/50 tracking-wider">
                            {st.label}
                          </span>
                          <span className="text-sm md:text-base font-bold text-white tracking-tight">
                            {st.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* RIGHT COLUMN: Paragraph Glass Card */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.65, delay: 0.12, ease: "easeOut" },
                  },
                }}
                className="pointer-events-auto"
              >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
                  {/* Subtle Corner Glow Accent */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#ff6a00]/15 blur-2xl pointer-events-none" />

                  {/* Paragraph */}
                  <p className="text-lg md:text-xl lg:text-2xl text-white/85 font-normal leading-relaxed tracking-normal mb-6">
                    {section.paragraph}
                  </p>

                  {/* Section CTA / Action Trigger */}
                  {section.ctaButton ? (
                    <div className="pt-2">
                      <button
                        onClick={onBuyClick}
                        className="group relative inline-flex items-center gap-3 bg-[#ff6a00] hover:bg-[#ff7b1a] text-black font-extrabold px-8 py-4 rounded-xl text-sm md:text-base tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,106,0,0.6)] hover:shadow-[0_0_35px_rgba(255,106,0,0.9)] transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Zap className="w-5 h-5 fill-black" />
                        <span>Claim Your Fuel • ₹149</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-white/40 tracking-wider">
                      <Sparkles className="w-4 h-4 text-[#ff6a00]" />
                      <span>SCROLL TO ADVANCE TRANSFORMATION</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
