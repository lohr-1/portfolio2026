import React from 'react';
import { motion } from 'framer-motion';

export default function RevealBlock({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.2, ease: "linear", delay }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
