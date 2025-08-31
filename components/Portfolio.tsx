/**
 * Portfolio Section Component - Dark Theme with Pink Accents
 * Glassmorphism project cards with neon glow effects
 */

"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Zap } from "lucide-react";
import Link from "next/link";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    },
  },
};

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isClient, setIsClient] = useState(false);

  // Generate deterministic particle positions with better performance
  const particles = useMemo(() => {
    if (!isClient) return [];
    
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: (i * 23 + 7) % 100,
      top: (i * 37 + 13) % 100,
      duration: 3 + (i % 2),
      delay: (i * 0.5) % 3,
    }));
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Sow Sure AI – Agricultural Lending Risk Assessment Platform",
      description: "Sow Sure AI is an enterprise-grade agricultural lending risk assessment platform for the Philippines. It combines AI-driven financial analysis, satellite data, and government hazard reports to provide intelligent, data-driven loan decisions for farmers.",
      image: "/images/sowsure-screenshot.jpg", // You'll upload your image here
      video: "/images/sowsurevid.mp4", // Video banner for the project
      technologies: ["Next.js 14+", "TypeScript", "Tailwind CSS", "Node.js", "Python", "OpenAI GPT-4o-mini", "Leaflet", "ULAP Hazard API"],
      liveUrl: "https://drive.google.com/file/d/1Q4qyEKveehaD3Id9YmlvxE32GEZnts4u/view?usp=drive_link",
      githubUrl: "https://github.com/gerdguerrero/Sow-Sure-AI-Final",
      category: "AI/ML",
      featured: true,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      impact: "Reduced default rates, faster loan processing, expanded access to financing, sustainable agriculture support",
      features: ["AI-powered risk scoring", "Hazard data integration", "Automated PDF extraction", "Interactive dashboard with visualizations", "Responsive design"]
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="portfolio" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/3 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h2 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Portfolio</span>
            </motion.h2>
            <motion.p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions across AI/ML, geospatial analysis, and web development
            </motion.p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div className="mb-20" variants={containerVariants}>
            <motion.h3 
              className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3"
              variants={projectVariants}
            >
              <Zap className="w-8 h-8 text-pink-400" />
              Featured Projects
            </motion.h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="glass border-pink-500/20 overflow-hidden group hover:shadow-pink-xl hover:border-pink-500/40 transition-all duration-500">
                    <CardContent className="p-0">
                      {/* Project Video/Image */}
                      <div className="relative h-64 overflow-hidden">
                        {project.video ? (
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          >
                            <source src={project.video} type="video/mp4" />
                            {/* Fallback gradient if video fails to load */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                          </video>
                        ) : (
                          <>
                            <motion.div 
                              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div
                                className="text-8xl font-bold text-white/20 select-none"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                              >
                                {project.category}
                              </motion.div>
                            </div>
                          </>
                        )}
                        
                        {/* Overlay on hover */}
                        <motion.div 
                          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="flex gap-4">
                            <Button
                              size="lg"
                              className="bg-pink-500 hover:bg-pink-600 text-white border-0 shadow-pink"
                              asChild
                            >
                              <Link href={project.liveUrl}>
                                <Eye className="w-5 h-5 mr-2" />
                                View
                              </Link>
                            </Button>
                            <Button
                              size="lg"
                              variant="outline"
                              className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400"
                              asChild
                            >
                              <Link href={project.githubUrl}>
                                <Github className="w-5 h-5 mr-2" />
                                Code
                              </Link>
                            </Button>
                          </div>
                        </motion.div>

                        {/* Floating particles - Client-side only */}
                        {isClient && particles.slice(0, 8).map((particle) => (
                          <motion.div
                            key={particle.id}
                            className="absolute w-1 h-1 bg-white/60 rounded-full"
                            style={{
                              left: `${particle.left}%`,
                              top: `${particle.top}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: particle.duration,
                              repeat: Infinity,
                              delay: particle.delay,
                            }}
                          />
                        ))}
                      </div>

                      {/* Project Details */}
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                            {project.category}
                          </Badge>
                        </div>
                        
                        <p className="text-white/80 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        
                        {/* Features - Only show for projects that have them */}
                        {project.features && (
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-pink-300 mb-3">Key Features</h4>
                            <ul className="list-disc list-inside text-white/70 space-y-1">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="text-sm">{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Impact - Only show for projects that have it */}
                        {project.impact && (
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-emerald-300 mb-2">Impact</h4>
                            <p className="text-white/70 text-sm">{project.impact}</p>
                          </div>
                        )}
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ 
                                delay: 0.5 + techIndex * 0.1,
                                duration: 0.3 
                              }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="text-xs bg-dark-800/50 text-white/90 border-pink-500/20 hover:border-pink-400/40 transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            className="flex-1 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border-pink-500/30 hover:border-pink-400/50 transition-all duration-300"
                            variant="outline"
                            asChild
                          >
                            <Link href={project.liveUrl}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                          <Button
                            className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                            variant="outline"
                            asChild
                          >
                            <Link href={project.githubUrl}>
                              <Github className="w-4 h-4 mr-2" />
                              Source
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
