/**
 * Navigation Component - Dark Theme with Glassmorphism
 * Fixed header with pink accents and smooth scrolling
 */

"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Portfolio", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  
  // Hide/show navbar on scroll with better performance
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  // Track active section with improved performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navigation.map(item => item.href.substring(1));
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 120 && rect.bottom >= 120;
            }
            return false;
          });
          if (current) {
            setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "backdrop-blur-xl bg-card/80 border-b border-border/50"
        )}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">KR</span>
              </div>
              <span className="text-foreground font-bold text-xl hidden sm:block">Ken Realingo</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-foreground/80 hover:text-foreground transition-all duration-300",
                      "hover:bg-primary/20 rounded-xl",
                      activeSection === item.href.substring(1) && 
                      "text-primary bg-primary/10"
                    )}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                    
                    {/* Active indicator */}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                        layoutId="activeTab"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
              
              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="ml-2"
              >
                <ThemeToggle />
              </motion.div>
            </nav>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-foreground hover:text-primary hover:bg-primary/10"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "backdrop-blur-xl bg-background/95"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.8
              }}
              transition={{ 
                duration: 0.3,
                delay: isOpen ? index * 0.1 : 0
              }}
            >
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-2xl font-semibold px-8 py-4 text-foreground/80 hover:text-foreground",
                  "hover:bg-primary/20 rounded-2xl transition-all duration-300",
                  "flex items-center gap-4",
                  activeSection === item.href.substring(1) && 
                  "text-primary bg-primary/10 scale-110"
                )}
              >
                <item.icon className="w-6 h-6" />
                {item.name}
              </Button>
            </motion.div>
          ))}
          
          {/* Mobile Menu Footer */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <p className="text-muted-foreground text-sm">
              Scroll to explore my work
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Background overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
