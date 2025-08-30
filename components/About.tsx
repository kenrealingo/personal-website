/**
 * About Section Component - Dark Theme with Pink Accents
 * Glassmorphism cards with animated skills and glowing profile photo
 */

"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

// Animation variants for stagger effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isClient, setIsClient] = useState(false);

  // Generate deterministic particle positions to avoid hydration mismatch
  const particles = useMemo(() => {
    if (!isClient) return [];
    
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: (i * 19 + 11) % 100,
      top: (i * 31 + 5) % 100,
      duration: 2 + (i % 3),
      delay: (i * 0.4) % 2,
    }));
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const skills = [
    // Frontend
    { name: "JavaScript", category: "Frontend", level: 90 },
    { name: "React", category: "Frontend", level: 85 },
    { name: "Next.js", category: "Frontend", level: 90 },
    { name: "TypeScript", category: "Frontend", level: 88 },
    { name: "Tailwind CSS", category: "Frontend", level: 95 },
    { name: "HTML/CSS", category: "Frontend", level: 95 },
    { name: "Leaflet", category: "Frontend", level: 80 },
    
    // Backend & ML
    { name: "Python", category: "Backend/ML", level: 95 },
    { name: "Node.js", category: "Backend/ML", level: 85 },
    { name: "Flask", category: "Backend/ML", level: 80 },
    { name: "FastAPI", category: "Backend/ML", level: 85 },
    { name: "REST APIs", category: "Backend/ML", level: 90 },
    { name: "MongoDB", category: "Backend/ML", level: 75 },
    
    // AI/ML Tools
    { name: "TensorFlow", category: "AI/ML", level: 85 },
    { name: "PyTorch", category: "AI/ML", level: 80 },
    { name: "OpenAI GPT-4o", category: "AI/ML", level: 85 },
    { name: "Scikit-learn", category: "AI/ML", level: 90 },
    { name: "Pandas", category: "AI/ML", level: 95 },
    { name: "NumPy", category: "AI/ML", level: 95 },
    { name: "Hugging Face", category: "AI/ML", level: 80 },
    { name: "LangChain", category: "AI/ML", level: 75 },
    
    // Cloud & Tools
    { name: "Google Cloud", category: "Cloud/Tools", level: 80 },
    { name: "AWS SageMaker", category: "Cloud/Tools", level: 75 },
    { name: "Docker", category: "Cloud/Tools", level: 70 },
    { name: "Git/GitHub", category: "Cloud/Tools", level: 90 },
    { name: "PNPM", category: "Cloud/Tools", level: 85 },
    { name: "Jest", category: "Cloud/Tools", level: 75 },
    { name: "Cypress", category: "Cloud/Tools", level: 70 },
    
    // Data & GIS
    { name: "Tableau", category: "Data/GIS", level: 85 },
    { name: "Power BI", category: "Data/GIS", level: 80 },
    { name: "ArcGIS", category: "Data/GIS", level: 85 },
    { name: "QGIS", category: "Data/GIS", level: 80 },
    { name: "Google Earth Engine", category: "Data/GIS", level: 75 },
    { name: "OpenStreetMap", category: "Data/GIS", level: 80 },
    { name: "ULAP Hazard API", category: "Data/GIS", level: 85 }
  ];

  const skillCategories = [
    { name: "AI/ML", color: "from-pink-500 to-purple-500", count: skills.filter(s => s.category === "AI/ML").length },
    { name: "Data/GIS", color: "from-blue-500 to-pink-500", count: skills.filter(s => s.category === "Data/GIS").length },
    { name: "Backend/ML", color: "from-purple-500 to-blue-500", count: skills.filter(s => s.category === "Backend/ML").length },
    { name: "Frontend", color: "from-pink-500 to-orange-500", count: skills.filter(s => s.category === "Frontend").length },
    { name: "Cloud/Tools", color: "from-green-500 to-pink-500", count: skills.filter(s => s.category === "Cloud/Tools").length },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 12, 
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
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Versatile professional bridging marketing, geospatial analysis, and machine learning innovation
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Profile Section - Left Side */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              
              {/* Profile Photo */}
              <Card className="glass border-pink-500/20 overflow-hidden group hover:shadow-pink-lg transition-all duration-500">
                <CardContent className="p-8">
                  <div className="relative aspect-square mx-auto max-w-sm">
                    {/* Glowing Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl p-1">
                      <div className="w-full h-full bg-dark-900 rounded-3xl flex items-center justify-center relative overflow-hidden">
                        
                        {/* Animated Background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20"
                          animate={{
                            background: [
                              "linear-gradient(135deg, rgba(255,77,166,0.2), rgba(168,85,247,0.2), rgba(59,130,246,0.2))",
                              "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(59,130,246,0.2), rgba(255,77,166,0.2))",
                              "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(255,77,166,0.2), rgba(168,85,247,0.2))"
                            ]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Profile Placeholder */}
                        <motion.div 
                          className="relative z-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          KR
                        </motion.div>
                        
                        {/* Add your actual photo here when ready */}
                        {/* <Image
                          src="/profile.jpg"
                          alt="Ken Realingo"
                          fill
                          className="object-cover"
                        /> */}
                        
                        {/* Floating Particles - Client-side only */}
                        {isClient && particles.map((particle) => (
                          <motion.div
                            key={particle.id}
                            className="absolute w-1 h-1 bg-pink-400/80 rounded-full"
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
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: "Location", value: "Quezon City, PH" },
                  { icon: Briefcase, label: "Role", value: "ML Engineer" },
                  { icon: GraduationCap, label: "Education", value: "UP Diliman" },
                  { icon: User, label: "Experience", value: "5+ Years" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="glass border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-pink">
                      <CardContent className="p-4 text-center">
                        <item.icon className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                        <p className="text-xs text-white/60 mb-1">{item.label}</p>
                        <p className="text-sm text-white font-medium">{item.value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content Section - Right Side */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
              
              {/* Bio */}
              <Card className="glass border-pink-500/20 hover:shadow-pink-lg transition-all duration-500">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                      <motion.div
                        className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
                        initial={{ height: 0 }}
                        animate={{ height: 32 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                      My Journey
                    </h3>
                    <p className="text-white/80 leading-relaxed text-lg">
                      Driven and versatile professional with expertise in marketing, event management, geospatial 
                      analysis, and machine learning. I thrive on turning ideas into impactful outcomes—whether 
                      scaling social media reach, securing key sponsorships, or delivering actionable insights 
                      through GIS and AI-powered solutions. With a proven track record of building strong 
                      relationships, managing complex projects, and fostering collaboration, I excel at balancing 
                      strategic goals with technical execution.
                    </p>
                    <p className="text-white/80 leading-relaxed text-lg">
                      Currently working as a Machine Learning Engineer, I focus on designing AI-driven tools for 
                      ESG risk assessment, geospatial intelligence, and data-driven decision-making. My academic 
                      background in Geology and Mining Engineering strengthens my technical foundation, allowing 
                      me to bridge environmental science, business needs, and cutting-edge AI. A creative 
                      problem-solver and lifelong learner, I&apos;m passionate about building meaningful technologies 
                      that drive growth, support sustainability, and create real-world impact.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Section */}
              <Card className="glass border-pink-500/20 hover:shadow-pink-lg transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                    <motion.div
                      className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
                      initial={{ height: 0 }}
                      animate={{ height: 32 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    />
                    Skills & Technologies
                  </h3>
                  
                  {/* Skill Categories */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {skillCategories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-10 border border-pink-500/20`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <h4 className="text-white font-semibold text-sm mb-1">{category.name}</h4>
                        <p className="text-pink-300 text-xs">{category.count} skills</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          delay: 1 + index * 0.05,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 200 
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge 
                          className="px-4 py-2 text-sm font-medium bg-dark-800/50 text-white border-pink-500/30 
                                   hover:bg-pink-500/20 hover:border-pink-400/50 hover:text-pink-200
                                   transition-all duration-300 cursor-default backdrop-blur-sm"
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
