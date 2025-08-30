/**
 * Scroll Animation Wrapper Component
 * Reusable component for scroll-triggered animations
 */

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  className?: string;
}

// Animation variants for different directions
const variants = {
  up: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function ScrollAnimation({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = "up", 
  className = "" 
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
