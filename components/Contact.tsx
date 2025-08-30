/**
 * Contact Section Component - Dark Theme with Pink Accents
 * Glassmorphism contact form with neon social icons and floating particles
 */

"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

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
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Generate deterministic particle positions to avoid hydration mismatch
  const particles = useMemo(() => {
    if (!isClient) return [];
    
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: (i * 11 + 3) % 100,
      top: (i * 37 + 13) % 100,
      duration: 3 + (i % 4),
      delay: (i * 0.1) % 3,
    }));
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error (show toast notification, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jlrealingo@gmail.com",
      href: "mailto:jlrealingo@gmail.com",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Quezon City, Philippines",
      href: "#",
      color: "from-purple-500 to-blue-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",

      href: "https://github.com/kenrealingo",
      color: "from-gray-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/john-kenneth-realingo-062379206/",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 100, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 16, 
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
              Get In <span className="text-gradient">Touch</span>
            </motion.h2>
            <motion.p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on innovative projects? Let&apos;s build something amazing together.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form - Left Side */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <Card className="glass border-pink-500/20 hover:shadow-pink-xl transition-all duration-500 relative overflow-hidden">
                
                {/* Success State */}
                {isSubmitted && (
                  <motion.div
                    className="absolute inset-0 bg-green-500/20 backdrop-blur-sm flex items-center justify-center z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="w-20 h-20 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                      >
                        <Sparkles className="w-10 h-10 text-green-400" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-white/80">Thanks for reaching out. I&apos;ll get back to you soon!</p>
                    </div>
                  </motion.div>
                )}
                
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <motion.div
                      className="w-2 h-12 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
                      initial={{ height: 0 }}
                      animate={{ height: 48 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                    <h3 className="text-3xl font-bold text-white">Send a Message</h3>
                    <MessageCircle className="w-8 h-8 text-pink-400 ml-auto" />
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white/90">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          {...register("name")}
                          className="bg-dark-800/50 border-pink-500/30 text-white placeholder:text-white/50 
                                   focus:border-pink-400/70 focus:ring-pink-400/30 transition-all duration-300"
                          placeholder="Your full name"
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <motion.p 
                            className="text-red-400 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/90">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="bg-dark-800/50 border-pink-500/30 text-white placeholder:text-white/50 
                                   focus:border-pink-400/70 focus:ring-pink-400/30 transition-all duration-300"
                          placeholder="your@email.com"
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <motion.p 
                            className="text-red-400 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white/90">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        className="bg-dark-800/50 border-pink-500/30 text-white placeholder:text-white/50 
                                 focus:border-pink-400/70 focus:ring-pink-400/30 transition-all duration-300"
                        placeholder="What&apos;s this about?"
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <motion.p 
                          className="text-red-400 text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.subject.message}
                        </motion.p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white/90">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        rows={6}
                        className="bg-dark-800/50 border-pink-500/30 text-white placeholder:text-white/50 
                                 focus:border-pink-400/70 focus:ring-pink-400/30 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project, ideas, or just say hello!"
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <motion.p 
                          className="text-red-400 text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.message.message}
                        </motion.p>
                      )}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 
                                 hover:to-purple-600 text-white border-0 shadow-pink text-lg py-6 
                                 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="flex items-center gap-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </motion.div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>

                  {/* Floating particles - Client-side only */}
                  {isClient && particles.slice(0, 6).map((particle) => (
                    <motion.div
                      key={particle.id}
                      className="absolute w-1 h-1 bg-pink-400/60 rounded-full pointer-events-none"
                      style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                      }}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Social - Right Side */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              
              {/* Contact Information */}
              <Card className="glass border-pink-500/20 hover:shadow-pink-lg transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <motion.div
                      className="w-2 h-12 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
                      initial={{ height: 0 }}
                      animate={{ height: 48 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    />
                    <h3 className="text-2xl font-bold text-white">Contact Info</h3>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <Link 
                          href={item.href} 
                          className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800/30 
                                   hover:bg-dark-800/50 border border-pink-500/20 hover:border-pink-400/40 
                                   transition-all duration-300 group"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl 
                                        flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">{item.label}</p>
                            <p className="text-white font-medium">{item.value}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="glass border-pink-500/20 hover:shadow-pink-lg transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <motion.div
                      className="w-2 h-12 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
                      initial={{ height: 0 }}
                      animate={{ height: 48 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                    />
                    <h3 className="text-2xl font-bold text-white">Follow Me</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full justify-start gap-4 bg-dark-800/30 hover:bg-dark-800/50 
                                   border-pink-500/20 hover:border-pink-400/40 text-white/90 
                                   hover:text-pink-300 transition-all duration-300 p-4 h-auto"
                          asChild
                        >
                          <Link href={social.href} target="_blank" rel="noopener noreferrer">
                            <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg 
                                          flex items-center justify-center`}>
                              <social.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-medium">{social.label}</span>
                          </Link>
                        </Button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick Connect */}
                  <motion.div
                    className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 
                             border border-pink-500/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">Quick Connect</h4>
                    <p className="text-white/70 text-sm mb-4">
                      Available for freelance projects, collaborations, and exciting opportunities.
                    </p>
                    <div className="flex items-center gap-2 text-pink-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm">Currently available</span>
                    </div>
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
