"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro: React.FC<VideoIntroProps> = ({ onComplete }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayOverlay, setShowPlayOverlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
          setShowPlayOverlay(false);
        } catch (error) {
          console.log("Auto-play prevented:", error);
          setShowPlayOverlay(true);
        }
      }
    };
    playVideo();
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowPlayOverlay(false);
    }
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center z-[9999] px-6 text-center overflow-hidden font-sans">
      <div className="w-full max-w-5xl flex flex-col items-center relative">
        
        {/* Video Frame with Premium Border/Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.1)] bg-black group"
        >
          <video
            ref={videoRef}
            src="/VID-20260422-WA0131.mp4"
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
            playsInline
            onPlay={() => setIsPlaying(true)}
          />

          {/* Play Overlay if blocked */}
          <AnimatePresence>
            {showPlayOverlay && !isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                onClick={handleManualPlay}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content after video ends */}
        <div className="h-48 flex items-center justify-center"> {/* Fixed height to prevent layout shift */}
          <AnimatePresence>
            {videoEnded && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <motion.h1 
                  className="text-2xl md:text-4xl font-extralight text-white tracking-tight leading-tight mb-10 max-w-3xl"
                >
                  Acelere seus resultados. <br />
                  <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">R3 Creative</span>, sua agência de Marketing e Performance!
                </motion.h1>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onComplete}
                  className="group relative px-16 py-5 bg-white text-black rounded-full text-xl font-semibold overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10">Briefing</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Gradient Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};
