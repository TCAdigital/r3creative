"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro: React.FC<VideoIntroProps> = ({ onComplete }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay video (no mute required)
  useEffect(() => {
    if (videoRef.current) {
      // No mute; play with sound
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="fixed inset-0 bg-[#000000] flex flex-col items-center justify-center z-[9999] p-4 text-center">
      <div className="w-full max-w-4xl">
        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden"
        >
          <video
            ref={videoRef}
            src="/VID-20260422-WA0131.mp4"
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
            playsInline
            autoPlay

          />
        </motion.div>

        {/* After video ends */}
        <AnimatePresence>
          {videoEnded && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12 flex flex-col items-center"
            >
              <motion.h1
                className="text-lg md:text-xl font-light text-white mb-8"
              >
                Acelere resultados. <span className="font-bold text-[#00ff99]">R3 Creative</span>, sua agência de Marketing e Performance!
              </motion.h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
                className="btn-next"
              >
                Briefing
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

