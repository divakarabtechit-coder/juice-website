"use client";

import React, { useState } from "react";
import { Zap, ArrowRight, CheckCircle2, Shield, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#050709] text-white overflow-hidden">
      {/* Subtle orange top border gradient */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent opacity-80" />

      {/* Ambient background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#ff6a00]/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column (spans 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff6a00] to-amber-300 flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.5)]">
                <Zap className="w-4 h-4 text-black fill-black" />
              </div>
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-orange-400 via-[#ff6a00] to-amber-300 bg-clip-text text-transparent">
                JRINK
              </span>
            </div>

            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              From fruit to fuel. Engineered for relentless performance through sub-zero
              cold-pressure extraction. No added sugars. No artificial crash.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Shield className="w-3.5 h-3.5 text-[#ff6a00]" />
                100% Cold-Pressed HPP
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Heart className="w-3.5 h-3.5 text-[#ff6a00]" />
                Valencia Certified
              </span>
            </div>
          </div>

          {/* Shop Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff6a00] font-bold">
              Shop Fuel
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Single Bottle (250ml)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Performance 6-Pack
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pro Athlete Case (24)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Cold-Chain Subscription
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Corporate Gym Supply
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff6a00] font-bold">
              Support
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cold-Chain Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nutritional Lab Tests
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shelf Life & Storage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ & Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Energy Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff6a00] font-bold">
              Energy Dispatch
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Get secret drops, athletic recovery insights, and batch release dates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/30 text-white text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" />
                <span>You're locked into the dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter athlete email"
                    className="w-full bg-white/5 border border-white/15 focus:border-[#ff6a00] rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#ff6a00] hover:bg-[#ff7b1a] text-black font-bold rounded-lg transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-[10px] text-white/40 font-mono">
                  Zero spam. Instant unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} JRINK Labs Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Protocol
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Fuel
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security & Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
