"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

interface MassiveCTAProps {
  onBuyClick?: () => void;
}

export default function MassiveCTA({ onBuyClick }: MassiveCTAProps) {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 bg-black overflow-hidden">
      {/* Intense Angled Backdrop Slanted Ribbon */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#170a02] via-[#2d1101] to-[#ff6a00]/30 -skew-y-3 origin-top-left transform scale-110 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial Hot Spot Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#ff6a00]/25 blur-[170px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Grid Pattern Accent */}
      <div
        className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#ff6a00]" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/90 font-bold">
            THE LAUNCH INITIATIVE
          </span>
        </motion.div>

        {/* Massive Athletic Typography */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.95] mb-8"
        >
          OWN THE ENERGY.
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-[#ff6a00] to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,106,0,0.6)]">
            DRINK JRINK.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          From fruit to fuel. Pure cold-pressed orange intensity engineered to power your momentum.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <button
            onClick={onBuyClick}
            className="group relative inline-flex items-center gap-3 bg-[#ff6a00] hover:bg-[#ff7b1a] text-black font-black px-10 py-5 rounded-full text-base sm:text-lg uppercase tracking-wider shadow-[0_0_35px_rgba(255,106,0,0.7)] hover:shadow-[0_0_55px_rgba(255,106,0,1)] transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Zap className="w-5 h-5 fill-black" />
            <span>CLAIM YOUR FUEL • ₹149</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </button>
        </motion.div>

        {/* Micro Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/50 tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]" /> 100% VALENCIA COLD-PRESSED
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]" /> REFRIGERATED COLD-CHAIN
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]" /> ZERO ARTIFICIAL SWEETENERS
          </span>
        </div>
      </div>
    </section>
  );
}
