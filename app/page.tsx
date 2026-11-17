"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductDetails from "@/components/ProductDetails";
import ProductPerformance from "@/components/ProductPerformance";
import ProductPricing from "@/components/ProductPricing";
import MassiveCTA from "@/components/MassiveCTA";
import Footer from "@/components/Footer";
import QuickBuyModal from "@/components/QuickBuyModal";

export default function Home() {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [selectedPackId, setSelectedPackId] = useState("performance-6");

  const handleOpenBuy = (packId: string = "performance-6") => {
    setSelectedPackId(packId);
    setIsBuyModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#06090c] text-white overflow-x-clip">
      {/* Fixed Floating Navigation Bar */}
      <Navbar onBuyClick={() => handleOpenBuy("performance-6")} />

      {/* 1) Hero Scroll Canvas with Side-by-Side Text Overlays */}
      <ProductBottleScroll onBuyClick={() => handleOpenBuy("single")} />

      {/* 2) Details Split Layout: Kinetic Extraction & Sub-Zero HPP */}
      <ProductDetails />

      {/* 3) Performance Split Reversed: Bio-Active Hydration & Energy Curve */}
      <ProductPerformance />

      {/* 4) Pricing Block: Single Bottle, 6-Pack, Pro Case */}
      <ProductPricing onSelectPack={(packId) => handleOpenBuy(packId)} />

      {/* 5) Massive Angled CTA Section: Own The Energy. Drink JRINK. */}
      <MassiveCTA onBuyClick={() => handleOpenBuy("performance-6")} />

      {/* Footer */}
      <Footer />

      {/* Interactive Quick Buy Checkout Drawer */}
      <QuickBuyModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
        initialPackId={selectedPackId}
      />
    </main>
  );
}
