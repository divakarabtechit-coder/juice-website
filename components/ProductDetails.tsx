"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Snowflake, Droplets, Gauge } from "lucide-react";

export default function ProductDetails() {
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
    <section id="details" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#06090c] overflow-hidden">
      {/* Background Ambience */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6a00]/10 blur-[150px] pointer-events-none rounded-full"
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
              KINETIC EXTRACTION
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Engineered down to the{" "}
            <span className="bg-gradient-to-r from-orange-400 via-[#ff6a00] to-amber-200 bg-clip-text text-transparent">
              cellular drop.
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
            Conventional juices boil nutrients with thermal pasteurization. JRINK subjects single-origin
            Valencia oranges to 87,000 PSI of hydraulic cold pressure — preserving 100% of live enzymes.
          </p>
        </motion.div>

        {/* Details Split Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch"
        >
          {/* Left Column: 3 Technical Spec Cards */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={itemVariants}
              className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#ff6a00]/40 rounded-2xl p-8 transition-colors duration-300 shadow-xl relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ff6a00]/15 flex items-center justify-center text-[#ff6a00] mb-5 group-hover:scale-110 transition-transform">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Sub-Zero HPP Preservation
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Hydrostatic pressure breaks microbial cell walls at 3.2°C without heat. Flavonoids,
                active polyphenols, and delicate aromas stay intact.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                <span>PRESSURE: 87,000 PSI</span>
                <span className="text-[#ff6a00] font-bold">HEAT: 0.0°C APPLIED</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#ff6a00]/40 rounded-2xl p-8 transition-colors duration-300 shadow-xl relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ff6a00]/15 flex items-center justify-center text-[#ff6a00] mb-5 group-hover:scale-110 transition-transform">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Single-Origin Valencia
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Sun-drenched orchards harvested strictly at 12.5° Brix sweetness. Zero added sugars,
                zero artificial acidity regulators, zero dilution.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                <span>PURITY: 100% RAW</span>
                <span className="text-[#ff6a00] font-bold">WATER ADDED: 0.0%</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Lab Performance Card */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-md bg-gradient-to-br from-white/10 via-white/5 to-[#ff6a00]/10 border border-white/20 rounded-2xl p-8 md:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Top accent badge */}
            <div className="flex items-center justify-between pb-6 border-b border-white/15">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-[#ff6a00]" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/80 font-bold">
                  BIO-RETENTION METRIC
                </span>
              </div>
              <span className="text-xs font-mono bg-[#ff6a00]/20 text-[#ff6a00] px-3 py-1 rounded-full border border-[#ff6a00]/30 font-bold">
                BATCH V1.4
              </span>
            </div>

            {/* Large Stats Display */}
            <div className="my-8 flex flex-col gap-8">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
                    99.4%
                  </span>
                  <span className="text-sm font-mono text-[#ff6a00] uppercase font-bold">
                    Enzyme Retention
                  </span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
                  <div className="w-[99.4%] h-full bg-gradient-to-r from-orange-400 to-[#ff6a00]" />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-white/50 mt-1">
                  <span>Standard Heat Juice: 38%</span>
                  <span className="text-white/80">JRINK Cold-Press: 99.4%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-mono text-white/50 block mb-1">
                    NATURAL VITAMIN C
                  </span>
                  <span className="text-2xl md:text-3xl font-extrabold text-white">
                    320% <span className="text-xs font-mono text-[#ff6a00]">RDA</span>
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-mono text-white/50 block mb-1">
                    POTASSIUM ELECTROLYTES
                  </span>
                  <span className="text-2xl md:text-3xl font-extrabold text-white">
                    460 <span className="text-xs font-mono text-[#ff6a00]">MG</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quality Guarantee Footnote */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/15 text-xs text-white/60">
              <ShieldCheck className="w-5 h-5 text-[#ff6a00] shrink-0" />
              <span>
                Bottled within 180 seconds of cold extraction. Kept below 4°C across all delivery routes.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
