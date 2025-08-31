/**
 * Hero Section Component - Dark Theme with Pink Accents
 * Stunning fullscreen hero with typing animations and neon effects
 */

"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Brain } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();
  
  const fullText = "Building AI solutions that bridge data, environment, and decision-making.";
  
  // Generate deterministic particle positions to avoid hydration mismatch
  const particles = useMemo(() => {
    if (!isClient) return [];
    
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: (i * 17 + 13) % 100, // Deterministic positioning
      top: (i * 23 + 7) % 100,
      duration: 2 + (i % 3), // Deterministic duration
      delay: (i * 0.3) % 2, // Deterministic delay
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
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden 
                       px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs - Optimized for performance */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 
                     bg-pink-500/20 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-56 sm:w-64 lg:w-80 h-56 sm:h-64 lg:h-80 
                     bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform, opacity' }}
        />
        
        {/* Floating Particles - Client-side only with optimized performance */}
        {isClient && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-pink-400/50 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [-20, -80, -20],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-center space-y-6 sm:space-y-8 lg:space-y-10 pb-24 sm:pb-28 lg:pb-32"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-800/50 backdrop-blur-sm 
                       border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium
                       shadow-pink animate-pulse-pink mt-12 sm:mt-16 lg:mt-20"
          >
            <Sparkles className="w-4 h-4" />
            Open to collaborations
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-2 sm:space-y-3 lg:space-y-4"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight 
                          leading-[0.9] sm:leading-[0.9] md:leading-[0.9] lg:leading-[0.9] 
                          pb-1 sm:pb-2 md:pb-3 lg:pb-4">
              {/* Mobile: stacked layout, Tablet+: inline layout */}
              <span className="block sm:inline text-white sm:mr-4 mb-2 sm:mb-0">Ken</span>
              <span className="block sm:inline text-gradient animate-glow">Realingo</span>
            </h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 
                        px-4 sm:px-0 pt-1 sm:pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Machine Learning Engineer
            </motion.h2>
          </motion.div>

          {/* Typing Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 sm:px-0"
          >
            <p className="text-base sm:text-xl md:text-2xl text-white/80 font-light 
                         leading-relaxed min-h-[2rem] sm:min-h-[3rem]">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-pink-400"
              >
                |
              </motion.span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
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
                         bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500
                         border-0 rounded-2xl shadow-pink-lg transition-all duration-300
                         hover:scale-[1.02] hover:shadow-pink-xl interactive"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Brain className="mr-2 h-5 w-5" />
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                style={{ borderRadius: "1rem" }}
              />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group px-8 py-4 text-base sm:text-lg font-semibold
                         w-full sm:w-auto
                         bg-transparent border-2 border-pink-500/50 text-white
                         hover:bg-pink-500/10 hover:border-pink-400 rounded-2xl
                         transition-all duration-300 hover:scale-[1.02] neon-border interactive"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
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
    </section>
  );
}
