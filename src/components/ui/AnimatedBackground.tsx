"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBriefingStore } from "@/store/useBriefingStore";
import Image from "next/image";

export const AnimatedBackground: React.FC = () => {
  const currentStep = useBriefingStore((state) => state.currentStep);

  // Background images for different phases of the briefing
  const backgrounds = [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", // Tech/Intro
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Strategy
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", // Creative
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", // Contact/Success
  ];

  const getBgIndex = () => {
    if (currentStep <= 1) return 0;
    if (currentStep <= 5) return 1;
    if (currentStep <= 10) return 2;
    return 3;
  };

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
           key={getBgIndex()}
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 0.15, scale: 1 }}
           exit={{ opacity: 0, scale: 0.95 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={backgrounds[getBgIndex()]} 
            alt="background" 
            fill
            className="object-cover filter grayscale"
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-primary/5 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-80" />
      
      {/* Grain Overlay Component (global css class) */}
      <div className="grain-overlay" />
    </div>
  );
};
