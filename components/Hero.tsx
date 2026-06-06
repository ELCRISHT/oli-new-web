import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="home" className="relative h-[calc(100vh-68px)] md:h-[calc(100vh-80px)] min-h-[480px] md:min-h-150 flex items-center overflow-hidden bg-[#0d1a15]">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="https://olione.ovialand.com/assets/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/30" />
      </div> 
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-white text-center">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-4 md:mb-6"
          >
            <span className="uppercase tracking-widest sm:tracking-[0.25em] md:tracking-[0.4em] text-base sm:text-2xl md:text-4xl font-bold text-green-400 whitespace-nowrap [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">Welcome to Ovialand</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-7xl mb-4 md:mb-6 leading-tight font-bold [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]"
          >
            Experience
            <span className="block italic font-light mt-2 text-2xl sm:text-3xl md:text-5xl">Premier Family Living</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white mb-8 md:mb-10 leading-relaxed font-semibold px-2 md:px-0 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]"
          >
            Discover how Ovialand makes owning a premier home simpler than you ever imagined.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('communities')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Communities
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
