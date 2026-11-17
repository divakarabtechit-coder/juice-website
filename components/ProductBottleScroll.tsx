"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { product } from "@/data/product";
import ProductTextOverlays from "./ProductTextOverlays";

const TOTAL_FRAMES = 240;

interface ProductBottleScrollProps {
  onBuyClick?: () => void;
}

export default function ProductBottleScroll({ onBuyClick }: ProductBottleScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES + 1).fill(null));
  const loadedFramesRef = useRef<Set<number>>(new Set());
  const lastRenderedFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const currentInterpolatedFrameRef = useRef<number>(1);
  const rafIdRef = useRef<number | null>(null);

  const [activeStage, setActiveStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [loadProgress, setLoadProgress] = useState<number>(0);

  // Pad frame index: 1 -> "001", 12 -> "012", 240 -> "240"
  const getFramePath = useCallback((index: number) => {
    const padded = String(Math.min(TOTAL_FRAMES, Math.max(1, index))).padStart(3, "0");
    return `${product.folderPath}/ezgif-frame-${padded}.jpg`;
  }, []);

  // Draw specific frame onto canvas with responsive "contain" scaling
  const drawFrame = useCallback((frameNumber: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Auto-initialize canvas dimensions if not set
    if (canvas.width === 0 || canvas.height === 0) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }

    let img = imagesRef.current[frameNumber];

    // Fallback: if requested frame is not yet loaded, find nearest loaded frame
    if (!img || !img.complete || img.naturalWidth === 0) {
      const loaded = Array.from(loadedFramesRef.current);
      if (loaded.length > 0) {
        let closest = loaded[0];
        let minDiff = Math.abs(closest - frameNumber);
        for (let i = 1; i < loaded.length; i++) {
          const diff = Math.abs(loaded[i] - frameNumber);
          if (diff < minDiff) {
            minDiff = diff;
            closest = loaded[i];
          }
        }
        img = imagesRef.current[closest];
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    lastRenderedFrameRef.current = frameNumber;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Clear background
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Responsive contain calculation (1280x720 video frames)
    const imgWidth = img.naturalWidth || 1280;
    const imgHeight = img.naturalHeight || 720;

    const scale = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const drawX = (canvasWidth - drawWidth) / 2;
    const drawY = (canvasHeight - drawHeight) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Update canvas resolution to match window dimensions and DPI
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }

    drawFrame(targetFrameRef.current);
  }, [drawFrame]);

  // Fast preloader
  useEffect(() => {
    handleResize();

    // 1. Preload frame 1 immediately and draw as soon as ready
    const firstImg = new Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => {
      imagesRef.current[1] = firstImg;
      loadedFramesRef.current.add(1);
      drawFrame(1);
    };

    // 2. Preload remaining frames concurrently
    let loadedCount = 1;
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      const frameIndex = i;
      img.onload = () => {
        imagesRef.current[frameIndex] = img;
        loadedFramesRef.current.add(frameIndex);
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
      };
      img.onerror = () => {
        loadedCount++;
      };
    }
  }, [getFramePath, drawFrame, handleResize]);

  // Window resize listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Scroll tracking and RAF loop
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollHeight = container.offsetHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      // Calculate progress between 0 and 1
      const progress = Math.min(1, Math.max(0, -rect.top / scrollHeight));
      setScrollProgress(progress);

      // Map progress to frame index (1 to 240)
      const mappedFrame = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1)
      );
      targetFrameRef.current = mappedFrame;

      // 6 distinct stages for HUD
      const stage = Math.min(5, Math.floor(progress * 6));
      setActiveStage(stage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 60fps RAF lerp loop for ultra-smooth frame follow-through
    const renderLoop = () => {
      const target = targetFrameRef.current;
      const current = currentInterpolatedFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.02) {
        currentInterpolatedFrameRef.current += diff * 0.35;
        const frameToRender = Math.min(
          TOTAL_FRAMES,
          Math.max(1, Math.round(currentInterpolatedFrameRef.current))
        );
        if (frameToRender !== lastRenderedFrameRef.current) {
          drawFrame(frameToRender);
        }
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [drawFrame]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#06090c]">
      {/* 
        STICKY VIEWPORT CONTAINER:
        Pinned at top: 0, 100vh tall.
        Remains completely sticky throughout all 6 sections until the entire 600vh is scrolled!
      */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
        {/* Background Cinematic Radial Highlights */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255, 106, 0, ${
              0.12 + scrollProgress * 0.22
            }) 0%, rgba(10, 15, 20, 0.4) 60%, transparent 100%)`,
          }}
          aria-hidden="true"
        />

        {/* Ambient Backlight Cones */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none rounded-full blur-[140px] transition-all duration-500"
          style={{
            background: `radial-gradient(circle, rgba(255, 106, 0, ${
              0.18 + (scrollProgress > 0.5 ? 0.25 : 0.08)
            }) 0%, transparent 70%)`,
            transform: `translate(-50%, ${scrollProgress * 40}px) scale(${1 + scrollProgress * 0.2})`,
          }}
          aria-hidden="true"
        />

        {/* Centered Canvas Container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <canvas
            ref={canvasRef}
            className="block max-h-screen max-w-full select-none"
          />
        </div>

        {/* Preload Progress Indicator */}
        <AnimatePresence>
          {loadProgress < 100 && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-24 right-8 z-30 pointer-events-none flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
            >
              <div className="w-2 h-2 rounded-full bg-[#ff6a00] animate-ping" />
              <span className="text-xs uppercase tracking-widest text-white/70 font-mono">
                Buffering Film {loadProgress}%
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cinematic Scroll Indicator (Fades out when scrolled) */}
        <motion.div
          animate={{ opacity: scrollProgress < 0.03 ? 1 : 0, y: scrollProgress < 0.03 ? 0 : 20 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-2"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-white/60">
            Scroll To Transform
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"
            />
          </div>
        </motion.div>

        {/* Timeline Stage Indicator (Top/Right HUD) */}
        <div className="hidden md:flex absolute top-28 right-8 z-30 flex-col items-end gap-1 pointer-events-none">
          <div className="text-[11px] font-mono tracking-widest text-[#ff6a00] font-bold">
            STAGE 0{activeStage + 1} / 06
          </div>
          <div className="w-24 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-[#ff6a00] transition-all duration-150"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <div className="text-[9px] font-mono tracking-wider text-white/40 uppercase">
            FRAME {String(lastRenderedFrameRef.current).padStart(3, "0")} / 240
          </div>
        </div>
      </div>

      {/* 
        SCROLLING TEXT SECTIONS LAYERED OVER THE STICKY CANVAS:
        Each section is 100vh tall.
        The canvas remains sticky underneath while the user scrolls through all 6 sections!
      */}
      <ProductTextOverlays onBuyClick={onBuyClick} />
    </div>
  );
}
