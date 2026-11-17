"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, ShoppingBag } from "lucide-react";

interface NavbarProps {
  onBuyClick?: () => void;
}

export default function Navbar({ onBuyClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-6 py-3.5 flex items-center justify-between ${
          isScrolled
            ? "bg-black/75 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
            : "bg-black/20 backdrop-blur-md border border-white/10 shadow-[0_5px_20px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Left: JRINK Bold Orange Gradient Brand */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer group select-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff6a00] to-amber-300 flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.6)] group-hover:scale-105 transition-transform">
            <Zap className="w-4 h-4 text-black fill-black" />
          </div>
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-orange-400 via-[#ff6a00] to-amber-300 bg-clip-text text-transparent group-hover:opacity-95 transition-opacity">
            JRINK
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
            FUEL
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-white/70">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white transition-colors uppercase tracking-wider text-xs font-mono"
          >
            Story
          </button>
          <button
            onClick={() => scrollTo("details")}
            className="hover:text-white transition-colors uppercase tracking-wider text-xs font-mono"
          >
            Engineering
          </button>
          <button
            onClick={() => scrollTo("performance")}
            className="hover:text-white transition-colors uppercase tracking-wider text-xs font-mono"
          >
            Nutrition
          </button>
          <button
            onClick={() => scrollTo("pricing")}
            className="hover:text-white transition-colors uppercase tracking-wider text-xs font-mono"
          >
            Pricing
          </button>
        </nav>

        {/* Right: Glowing Buy Now CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBuyClick}
            className="group relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-extrabold px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,106,0,0.6)] hover:shadow-[0_0_30px_rgba(255,106,0,0.9)] transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover:-rotate-12" />
            <span>Buy Now</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-7xl mx-auto backdrop-blur-2xl bg-black/90 border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-center"
          >
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="py-2 text-white/80 hover:text-white uppercase font-mono tracking-wider text-sm"
            >
              Story
            </button>
            <button
              onClick={() => scrollTo("details")}
              className="py-2 text-white/80 hover:text-white uppercase font-mono tracking-wider text-sm"
            >
              Engineering
            </button>
            <button
              onClick={() => scrollTo("performance")}
              className="py-2 text-white/80 hover:text-white uppercase font-mono tracking-wider text-sm"
            >
              Nutrition
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="py-2 text-white/80 hover:text-white uppercase font-mono tracking-wider text-sm"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBuyClick?.();
              }}
              className="mt-2 w-full py-3 rounded-full bg-orange-500 text-black font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(255,106,0,0.6)]"
            >
              Buy Now • ₹149
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
