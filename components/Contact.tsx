/**
 * Contact Section Component - Dark Theme with Pink Accents  
 * Simple contact information with social links and floating particles
 */

"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Sparkles
} from "lucide-react";
import Link from "next/link";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isClient, setIsClient] = useState(false);

  // Generate deterministic particle positions to avoid hydration mismatch
  const particles = useMemo(() => {
    if (!isClient) return [];
    
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
    }));
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Social links data
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/kenrealingo",
      color: "text-white hover:text-pink-400"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/in/kenrealingo",
      color: "text-blue-400 hover:text-blue-300"
    }
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "jlrealingo@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=jlrealingo@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Philippines",
      href: null
    }
  ];

  return (
    <section 
      ref={ref}
      id="contact" 
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Aurora Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Particles - Client-side only */}
      {isClient && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-pink-400/60 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative container mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Ready to collaborate on your next project? Let&apos;s connect and create something amazing together!
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="glass border-pink-500/20 hover:shadow-pink-xl transition-all duration-500 relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <motion.div
                      className="w-2 h-12 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
                      initial={{ height: 0 }}
                      animate={{ height: 48 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                    <h3 className="text-3xl font-bold text-white">Contact Info</h3>
                    <Sparkles className="w-8 h-8 text-pink-400 ml-auto" />
                  </div>

                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={method.label}
                        className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/50 border border-pink-500/10 hover:border-pink-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.02, x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                          <method.icon className="w-6 h-6 text-pink-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60 text-sm">{method.label}</p>
                          {method.href ? (
                            <Link 
                              href={method.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white font-medium hover:text-pink-400 transition-colors"
                            >
                              {method.value}
                            </Link>
                          ) : (
                            <p className="text-white font-medium">{method.value}</p>
                          )}
                        </div>
                        {method.href && <ExternalLink className="w-4 h-4 text-pink-400/60" />}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="glass border-pink-500/20 hover:shadow-pink-xl transition-all duration-500 relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <motion.div
                      className="w-2 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
                      initial={{ height: 0 }}
                      animate={{ height: 48 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    />
                    <h3 className="text-3xl font-bold text-white">Connect</h3>
                    <ExternalLink className="w-8 h-8 text-purple-400 ml-auto" />
                  </div>

                  <div className="space-y-4 mb-8">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <Link
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full justify-start gap-4 h-16 border-pink-500/20 bg-dark-800/50 hover:bg-pink-500/10 hover:border-pink-500/50 text-white hover:text-pink-400 transition-all duration-300"
                          >
                            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                              <social.icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-lg">{social.name}</span>
                            <ExternalLink className="w-4 h-4 ml-auto opacity-60" />
                          </Button>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="text-center p-6 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-pink-500/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="text-white/80 mb-2">
                      <strong className="text-pink-400">Open to Opportunities</strong>
                    </p>
                    <p className="text-white/60 text-sm">
                      Always excited to discuss new projects and collaborations!
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
