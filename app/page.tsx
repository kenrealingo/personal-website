/**
 * Home Page Component
 * Main landing page with all sections
 */

"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="min-h-screen"
      >
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section */}
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        
        {/* Portfolio Section */}
        <section id="projects" className="scroll-mt-16">
          <Portfolio />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
        
        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border/40 bg-dark-900/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.p 
              className="text-muted-foreground text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2025 Ken Realingo. Built with Next.js, Tailwind CSS, and Framer Motion.
            </motion.p>
          </div>
        </footer>
      </motion.main>
    </>
  );
}
