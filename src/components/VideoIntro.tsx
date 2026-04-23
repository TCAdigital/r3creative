"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro: React.FC<VideoIntroProps> = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Safety fallback: if video doesn't trigger end, show content after 10 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 10000);

    // Attempt to play video
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // If play is blocked, we still want the fallback to work
      });
    }

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setShowContent(true);
  };

  return (
    <div className="fixed inset-0 bg-[#000000] flex flex-col items-center justify-center z-[9999] overflow-hidden">
      <div className="w-full max-w-4xl px-4 flex flex-col items-center">
        {/* Video Player */}
        <div className="w-full aspect-video relative rounded-lg overflow-hidden bg-black">
          <video
            ref={videoRef}
            src="/VID-20260422-WA0131.mp4"
            className="w-full h-full object-contain"
            onEnded={handleVideoEnd}
            playsInline
            autoPlay
            muted={true}
          />
        </div>

        {/* Content after video */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <h1 className="text-base md:text-lg font-light text-white mb-12">
                Acelere resultados. <span className="font-bold text-[#00ff99]">R3 Creative</span>, sua agência de Marketing e Performance!
              </h1>
              
              <button
                onClick={onComplete}
                className="btn-next px-8 py-3 bg-[#00ff99] text-black font-bold rounded-full hover:bg-white transition-all duration-300"
              >
                Briefing
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
