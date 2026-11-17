"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, Truck, Zap, ShoppingBag, Plus, Minus } from "lucide-react";
import { product } from "@/data/product";

interface QuickBuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackId?: string;
}

export default function QuickBuyModal({ isOpen, onClose, initialPackId = "performance-6" }: QuickBuyModalProps) {
  const [selectedPackId, setSelectedPackId] = useState<string>(initialPackId);
  const [quantity, setQuantity] = useState<number>(1);
  const [isOrdered, setIsOrdered] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const selectedPack = product.packs.find((p) => p.id === selectedPackId) || product.packs[0];
  const totalPrice = selectedPack.price * quantity;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  const resetAndClose = () => {
    setIsOrdered(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg backdrop-blur-2xl bg-[#090d12]/95 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Top orange line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent" />

            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {isOrdered ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#ff6a00]/20 border border-[#ff6a00] flex items-center justify-center text-[#ff6a00] mb-5 shadow-[0_0_30px_rgba(255,106,0,0.5)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight mb-2">
                  FUEL DISPATCHED!
                </h3>
                <p className="text-sm text-white/70 max-w-sm mb-6 leading-relaxed">
                  Your order of <span className="text-[#ff6a00] font-bold">{quantity}× {selectedPack.title}</span> has
                  been locked into the cold-chain dispatch pipeline.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full mb-6 text-left text-xs font-mono space-y-1.5 text-white/60">
                  <div className="flex justify-between">
                    <span>ORDER ID:</span>
                    <span className="text-white font-bold">#JRK-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DISPATCH TEMP:</span>
                    <span className="text-emerald-400 font-bold">2.8°C (VERIFIED)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ESTIMATED DELIVERY:</span>
                    <span className="text-white font-bold">TOMORROW 08:00 AM</span>
                  </div>
                </div>
                <button
                  onClick={resetAndClose}
                  className="w-full py-4 rounded-xl bg-[#ff6a00] hover:bg-[#ff7b1a] text-black font-extrabold uppercase tracking-wider text-sm transition-colors"
                >
                  Return to Experience
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-black fill-black" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#ff6a00] font-bold">
                    FAST FUEL CHECKOUT
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-6">
                  Select Pack & Lock Order
                </h3>

                {/* Pack Selector */}
                <div className="space-y-2.5 mb-6">
                  {product.packs.map((pack) => (
                    <div
                      key={pack.id}
                      onClick={() => setSelectedPackId(pack.id)}
                      className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                        selectedPackId === pack.id
                          ? "bg-[#ff6a00]/15 border-[#ff6a00] shadow-[0_0_15px_rgba(255,106,0,0.25)]"
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white flex items-center gap-2">
                          {pack.title}
                          {pack.popular && (
                            <span className="text-[10px] font-mono bg-[#ff6a00] text-black px-2 py-0.5 rounded-full font-extrabold">
                              HOT
                            </span>
                          )}
                        </span>
                        <span className="text-xs text-white/50">{pack.qty}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-black text-white">{pack.formattedPrice}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <span className="text-xs font-mono text-white/70 uppercase tracking-wider">
                    Quantity
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-base font-bold font-mono text-white w-6 text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Simple Form */}
                <form onSubmit={handleOrder} className="space-y-3 mb-6">
                  <input
                    type="text"
                    required
                    placeholder="Athlete Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#ff6a00] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Delivery City & Address (Cold-Chain Route)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#ff6a00] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none"
                  />

                  {/* Summary & Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#ff6a00] hover:bg-[#ff7b1a] text-black font-extrabold uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(255,106,0,0.6)] flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Confirm Order • ₹{totalPrice.toLocaleString("en-IN")}</span>
                    </button>
                  </div>
                </form>

                {/* Trust Badges */}
                <div className="flex items-center justify-around text-[10px] font-mono text-white/40 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#ff6a00]" /> Cold-Chain Shipped
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#ff6a00]" /> 100% Raw Certified
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
