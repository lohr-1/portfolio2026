import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function StairPreloader({ children, delay = 0, baseDelay = 0.6, direction = 'ltr', className = "", ...props }) {
  const [isFinished, setIsFinished] = useState(false);

  // Define variants based on the direction prop:
  // - ltr (left-to-right): slides horizontally from left to right (x: "0%" -> "100%")
  // - ttb (top-to-bottom): slides vertically from top to bottom (y: "0%" -> "100%")
  const panelVariants = {
    initial: {
      x: "0%",
      y: "0%",
    },
    animate: {
      x: direction === 'ltr' ? "100%" : "0%",
      y: direction === 'ttb' ? "100%" : "0%",
      transition: {
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1], // Premium cubic-bezier
        delay: baseDelay + delay,
      },
    },
  };

  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      {/* Content wrapper */}
      <div className="w-full h-full">
        {children}
      </div>

      {/* Single Wipe Panel Overlay */}
      {!isFinished && (
        <motion.div
          variants={panelVariants}
          initial="initial"
          animate="animate"
          onAnimationComplete={() => setIsFinished(true)}
          className="absolute inset-0 z-50 pointer-events-none bg-[#1E1E1C] dark:bg-[#ECEBE7]"
        />
      )}
    </div>
  );
}
