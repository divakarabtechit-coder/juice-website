"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Check, Zap, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import { product } from "@/data/product";

interface ProductPricingProps {
  onSelectPack?: (packId: string) => void;
}

export default function ProductPricing({ onSelectPack }: ProductPricingProps) {
  const [selectedPackId, setSelectedPackId] = useState<string>("performance-6");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="pricing" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#06090c] overflow-hidden">
      {/* Background Ambience */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff6a00]/10 blur-[180px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6a00]" />
            <span className="text-xs font-mono tracking-widest text-[#ff6a00] uppercase font-bold">
              ORDER FUEL
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Select your{" "}
            <span className="bg-gradient-to-r from-orange-400 via-[#ff6a00] to-amber-200 bg-clip-text text-transparent">
              energy loadout.
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
            Shipped inside insulated cold-chain cartons kept at 2–4°C. Pure live enzymes delivered fresh to your door.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {product.packs.map((pack) => {
            const isSelected = selectedPackId === pack.id;
            return (
              <motion.div
                key={pack.id}
                variants={cardVariants}
                onClick={() => setSelectedPackId(pack.id)}
                className={`cursor-pointer rounded-2xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  pack.popular
                    ? "bg-gradient-to-b from-white/10 to-[#ff6a00]/15 border-2 border-[#ff6a00] shadow-[0_0_40px_rgba(255,106,0,0.35)] scale-105 z-10"
                    : "backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/25 shadow-xl"
                } ${isSelected && !pack.popular ? "ring-2 ring-[#ff6a00]/60" : ""}`}
              >
                {/* Popular or Athlete Badge */}
                {pack.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#ff6a00] text-black font-extrabold text-[11px] font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(255,106,0,0.8)]">
                    {pack.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono text-white/50 uppercase tracking-widest mb-2">
                    {pack.qty}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {pack.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-black tracking-tight text-white">
                      {pack.formattedPrice}
                    </span>
                    {pack.savings && (
                      <span className="text-xs font-mono font-bold text-[#ff6a00] bg-[#ff6a00]/10 px-2.5 py-1 rounded-full border border-[#ff6a00]/20">
                        {pack.savings}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-white/70 mb-8 leading-relaxed">
                    {pack.id === "single"
                      ? "The raw starter blast. Experience genuine cold-pressed Valencia intensity."
                      : pack.id === "performance-6"
                      ? "A full workweek of morning cellular hydration and post-workout glycogen fuel."
                      : "Monthly athlete subscription. Includes complimentary thermo-insulated shaker."}
                  </p>

                  <ul className="space-y-3 pt-6 border-t border-white/10 mb-8 text-xs sm:text-sm text-white/80">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#ff6a00] shrink-0" />
                      <span>100% Raw Cold-Pressed (0 heat)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#ff6a00] shrink-0" />
                      <span>Zero refined sugars or syrups</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#ff6a00] shrink-0" />
                      <span>Chilled cold-chain packaging</span>
                    </li>
                    {pack.popular && (
                      <li className="flex items-center gap-2.5 text-[#ff6a00] font-bold">
                        <Zap className="w-4 h-4 fill-[#ff6a00] shrink-0" />
                        <span>Priority expedited courier dispatch</span>
                      </li>
                    )}
                  </ul>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPack?.(pack.id);
                  }}
                  className={`w-full py-4 rounded-xl font-extrabold uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                    pack.popular
                      ? "bg-[#ff6a00] hover:bg-[#ff7b1a] text-black shadow-[0_0_25px_rgba(255,106,0,0.6)] hover:shadow-[0_0_35px_rgba(255,106,0,0.9)]"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Claim {pack.title}</span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guarantees Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs font-mono text-white/60">
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-[#ff6a00]" />
            <span>24-Hour Insulated Cold Shipping</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ff6a00]" />
            <span>100% Freshness or Free Replacement</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-[#ff6a00]" />
            <span>Zero Preservatives • Raw Enzymes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
