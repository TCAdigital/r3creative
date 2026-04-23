"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro: React.FC<VideoIntroProps> = ({ onComplete }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay muted (required by browsers) then unmute after load if desired
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[9999] p-4 text-center">
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
            muted
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
                className="text-2xl md:text-3xl font-light text-white mb-8"
              >
                Acelere seus resultados. <span className="font-bold text-[#00ff99]">R3 Creative</span>, sua agência de Marketing e Performance!
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

