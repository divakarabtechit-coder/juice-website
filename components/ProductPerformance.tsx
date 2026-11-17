"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Zap, Activity, BatteryCharging, Flame } from "lucide-react";

export default function ProductPerformance() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="performance" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070b0e] overflow-hidden">
      {/* Glow Ambient behind section */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-[#ff6a00]/12 blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6a00]" />
            <span className="text-xs font-mono tracking-widest text-[#ff6a00] uppercase font-bold">
              PERFORMANCE ARCHITECTURE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Built to energize.{" "}
            <span className="bg-gradient-to-r from-orange-400 via-[#ff6a00] to-amber-200 bg-clip-text text-transparent">
              Zero crash.
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
            Electrolytes. Vitamins. High-impact hydration. Traditional energy drinks blast you with synthetic
            taurine and refined sucrose. JRINK powers muscle recovery and focus through natural ionic bioavailability.
          </p>
        </motion.div>

        {/* Reversed Split Layout: Left side comparison card, Right side 3 pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch"
        >
          {/* LEFT: Comparison Matrix Card (Reversed flow) */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-md bg-gradient-to-bl from-white/10 via-white/5 to-[#ff6a00]/15 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <span className="text-xs font-mono uppercase tracking-widest text-white/70 font-bold">
                  FUEL CURVE COMPARISON
                </span>
                <span className="text-xs font-mono text-[#ff6a00] font-bold">
                  TEST PROTOCOL: 4 HOURS
                </span>
              </div>

              {/* Energy Curve Breakdown */}
              <div className="my-8 flex flex-col gap-6">
                {/* JRINK Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-[#ff6a00] flex items-center gap-1.5">
                      <Zap className="w-4 h-4 fill-[#ff6a00]" /> JRINK Orange (Cold-Pressed)
                    </span>
                    <span className="text-white font-mono">100% SUSTAINED</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5">
                    <div className="w-[96%] h-full bg-gradient-to-r from-orange-400 to-[#ff6a00] rounded-full shadow-[0_0_12px_rgba(255,106,0,0.8)]" />
                  </div>
                  <p className="text-xs text-white/60">
                    Gradual glycogen release, 0 spike, 0 drop. Sustained cellular focus.
                  </p>
                </div>

                {/* Energy Drink Bar */}
                <div className="space-y-2 opacity-60">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">Commercial Energy Drink</span>
                    <span className="text-red-400 font-mono">CRASH AT 45M</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[45%] h-full bg-red-500 rounded-full" />
                  </div>
                  <p className="text-xs text-white/40">
                    Synthetic caffeine spike followed by sharp jittery rebound drop.
                  </p>
                </div>

                {/* Sugary Soda Bar */}
                <div className="space-y-2 opacity-40">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">Concentrate Juice / Soda</span>
                    <span className="text-white/70 font-mono">CRASH AT 20M</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[25%] h-full bg-amber-500 rounded-full" />
                  </div>
                  <p className="text-xs text-white/40">
                    High fructose corn syrup crash, rapid insulin spike and fatigue.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/15 text-center">
              <div>
                <span className="text-xs font-mono text-white/40 block">SUGAR CRASH</span>
                <span className="text-lg font-bold text-emerald-400">0%</span>
              </div>
              <div>
                <span className="text-xs font-mono text-white/40 block">ELECTROLYTES</span>
                <span className="text-lg font-bold text-[#ff6a00]">TRIPLE</span>
              </div>
              <div>
                <span className="text-xs font-mono text-white/40 block">DIGESTION</span>
                <span className="text-lg font-bold text-white">RAPID</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3 Athletic Pillars */}
          <div className="flex flex-col gap-6 justify-center">
            <motion.div
              variants={itemVariants}
              className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#ff6a00]/40 rounded-2xl p-7 transition-colors duration-300 shadow-xl group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6a00]/15 flex items-center justify-center text-[#ff6a00] shrink-0 group-hover:scale-110 transition-transform">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                    Fast-Twitch Glycogen Refuel
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Natural citrus oligosaccharides bypass sluggish digestive breakdown, immediately
                    restoring cellular ATP reserves during high-exertion training.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#ff6a00]/40 rounded-2xl p-7 transition-colors duration-300 shadow-xl group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6a00]/15 flex items-center justify-center text-[#ff6a00] shrink-0 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                    Bio-Ionic Electrolyte Complex
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    460mg of natural potassium matched with trace Himalayan sodium ions to optimize
                    intracellular fluid balance and prevent cramping under heat.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#ff6a00]/40 rounded-2xl p-7 transition-colors duration-300 shadow-xl group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6a00]/15 flex items-center justify-center text-[#ff6a00] shrink-0 group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                    High-Potency Bioflavonoids
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Hesperidin and naringenin act as natural nitric oxide promoters, supporting
                    vasodilation and clean blood oxygen flow to working muscles.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
