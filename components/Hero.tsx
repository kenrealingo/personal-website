/**
 * Hero Section Component - Futuristic Dark Theme with Aurora Effects
 * Cyberpunk-minimalist design with particle systems and advanced animations
 */

"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Brain, Zap } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  const fullText = "Building AI solutions that bridge data, environment, and decision-making.";
  
  // Enhanced particle system with different types
  const particles = useMemo(() => {
    if (!isClient) return [];
    
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: (i * 17 + 13) % 100,
      top: (i * 23 + 7) % 100,
      duration: 3 + (i % 4),
      delay: (i * 0.2) % 3,
      size: 2 + (i % 3),
      type: i % 3, // Different particle types
      color: ['#ff4da6', '#a855f7', '#06b6d4'][i % 3],
    }));
  }, [isClient]);

  // Floating orbs for background ambiance
  const floatingOrbs = useMemo(() => {
    if (!isClient) return [];
    
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: (i * 25 + 10) % 100,
      top: (i * 35 + 15) % 100,
      size: 100 + (i * 20),
      duration: 15 + (i * 3),
      delay: i * 2,
      opacity: 0.1 + (i % 3) * 0.05,
    }));
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <motion.section 
      className="min-h-screen relative flex items-center justify-center overflow-hidden 
                       px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      style={{ opacity, scale }}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora-like floating orbs */}
        {isClient && floatingOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full filter blur-3xl"
            style={{
              left: `${orb.left}%`,
              top: `${orb.top}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: `radial-gradient(circle, rgba(255, 77, 166, ${orb.opacity}) 0%, rgba(168, 85, 247, ${orb.opacity * 0.7}) 50%, transparent 100%)`,
              willChange: 'transform, opacity'
            }}
            animate={{ 
              scale: [1, 1.2, 0.8, 1],
              opacity: [orb.opacity, orb.opacity * 1.5, orb.opacity * 0.5, orb.opacity],
              x: [-20, 20, -10, 0],
              y: [-10, 10, -20, 0]
            }}
            transition={{ 
              duration: orb.duration, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay
            }}
          />
        ))}

        {/* Enhanced particle system */}
        {isClient && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full opacity-70"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [-20, -80, -20],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-pink-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 w-full px-4">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-center space-y-4 sm:space-y-6 lg:space-y-8 pb-24 sm:pb-28 lg:pb-32"
        >
          {/* Enhanced Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-3 px-8 py-4 glass neon-border
                       text-pink-300 text-sm font-medium shadow-pink-lg animate-pulse-pink 
                       mt-6 sm:mt-8 lg:mt-10 interactive shimmer"
          >
            <Zap className="w-5 h-5" />
            <span className="glow-text">Open to collaborations</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>

          {/* Enhanced Name and Title with improved spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-2 sm:space-y-3 lg:space-y-4"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight 
                          leading-[0.85] sm:leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 
                          pb-1 sm:pb-2 md:pb-3 lg:pb-4 animate-slide-up">
              {/* Mobile: stacked layout, Tablet+: inline layout */}
              <span className="block sm:inline text-white glow-text sm:mr-6 mb-2 sm:mb-0">Ken</span>
              <span className="block sm:inline text-gradient animate-glow">Realingo</span>
            </h1>
            
            <motion.h2 
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white/90 
                        px-4 sm:px-0 pt-1 sm:pt-2 glow-text animate-slide-up"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Machine Learning Engineer
            </motion.h2>
          </motion.div>

          {/* Enhanced Typing Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 sm:px-0"
          >
            <p className="text-base sm:text-xl md:text-2xl text-white/80 font-light 
                         leading-relaxed min-h-[2rem] sm:min-h-[3rem] glow-text">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-pink-400 ml-1"
              >
                |
              </motion.span>
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center 
                      pt-8 sm:pt-10 px-4 sm:px-0"
          >
            <Button 
              size="lg" 
              className="group relative overflow-hidden px-8 py-4 
                         text-base sm:text-lg font-semibold w-full sm:w-auto
                         glass neon-border shadow-pink-lg transition-all duration-300
                         hover:scale-[1.02] hover:shadow-pink-xl interactive shimmer"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Brain className="mr-3 h-5 w-5" />
              <span className="relative z-10 glow-text">View My Work</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group relative overflow-hidden px-8 py-4 
                         text-base sm:text-lg font-semibold w-full sm:w-auto
                         glass neon-border text-pink-300 hover:text-white
                         shadow-pink transition-all duration-300
                         hover:scale-[1.02] hover:shadow-pink-xl interactive"
              asChild
            >
              <a href="mailto:jlrealingo@gmail.com" className="flex items-center">
                <Mail className="mr-3 h-5 w-5" />
                <span className="relative z-10 glow-text">Get In Touch</span>
              </a>
            </Button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center gap-6 pt-10 sm:pt-12 pb-20 sm:pb-24 px-4 sm:px-0"
          >
            {[
              { 
                icon: Github, 
                href: "https://github.com/kenrealingo", 
                label: "GitHub",
                color: "hover:text-pink-400 hover:shadow-pink"
              },
              { 
                icon: Linkedin, 
                href: "https://www.linkedin.com/in/john-kenneth-realingo-062379206/", 
                label: "LinkedIn",
                color: "hover:text-pink-400 hover:shadow-pink"
              },
              { 
                icon: Mail, 
                href: "mailto:jlrealingo@gmail.com", 
                label: "Email",
                color: "hover:text-pink-400 hover:shadow-pink"
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-2xl bg-dark-800/30 backdrop-blur-sm border border-pink-500/20
                           text-white/70 transition-all duration-300 ${social.color}
                           hover:bg-pink-500/10 hover:border-pink-400/50 interactive`}
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                style={{ willChange: 'transform' }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-pink-400 transition-all duration-300 cursor-pointer group
                       p-3 rounded-xl hover:bg-white/5 backdrop-blur-sm interactive"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ willChange: 'transform' }}
          >
            <span className="text-xs font-medium tracking-wider group-hover:text-pink-300 transition-colors">SCROLL</span>
            <ArrowDown className="h-5 w-5 group-hover:text-pink-400 transition-colors" />
            <motion.div 
              className="w-px h-8 bg-gradient-to-b from-pink-500/50 to-transparent"
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
