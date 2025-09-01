'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

const themes = [
  { key: 'system' as const, icon: Monitor, label: 'System' },
  { key: 'light' as const, icon: Sun, label: 'Light' },
  { key: 'dark' as const, icon: Moon, label: 'Dark' },
];

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-theme-toggle]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const currentTheme = themes.find(t => t.key === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative" data-theme-toggle>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 h-9 w-9 p-0 transition-all duration-200"
        aria-label={`Current theme: ${currentTheme.label}. Click to change theme.`}
      >
        <motion.div
          key={theme}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          <CurrentIcon className="h-4 w-4" />
        </motion.div>
        
        {/* Theme indicator dot */}
        <motion.div 
          className={`absolute -top-1 -right-1 w-2 h-2 rounded-full border border-background transition-colors ${
            resolvedTheme === 'dark' ? 'bg-pink-500' : 'bg-orange-400'
          }`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-12 right-0 z-50 min-w-[140px] overflow-hidden rounded-xl border border-border/50 bg-card/90 backdrop-blur-md shadow-xl"
          >
            <div className="p-1">
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isSelected = theme === themeOption.key;
                
                return (
                  <motion.button
                    key={themeOption.key}
                    onClick={() => {
                      setTheme(themeOption.key);
                      setIsOpen(false);
                    }}
                    className={`relative w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                      isSelected 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'hover:bg-secondary/50 text-foreground'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="flex-1 text-left">{themeOption.label}</span>
                    
                    {isSelected && (
                      <motion.div
                        layoutId="theme-indicator"
                        className="w-2 h-2 bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
            
            {/* Current resolved theme indicator */}
            <div className="border-t border-border/30 px-3 py-2 text-xs text-muted-foreground">
              Active: {resolvedTheme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
