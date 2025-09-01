import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Pink accent colors
        pink: {
          DEFAULT: "#ff4da6",
          50: "#fff0f7",
          100: "#ffe3f1",
          200: "#ffc6e3",
          300: "#ff9ed0",
          400: "#ff66b2",
          500: "#ff4da6",
          600: "#ed1c7a",
          700: "#d10e63",
          800: "#ad1052",
          900: "#8f1147",
        },
        // Theme-aware surface colors
        surface: {
          50: "var(--surface-50)",
          100: "var(--surface-100)",
          200: "var(--surface-200)",
          300: "var(--surface-300)",
          600: "var(--surface-600)",
          700: "var(--surface-700)",
          800: "var(--surface-800)",
          900: "var(--surface-900)",
        },
        // Dark theme grays (kept for backward compatibility)
        dark: {
          50: "#f8f9fa",
          100: "#f1f3f4",
          200: "#e8eaed",
          300: "#dadce0",
          400: "#bdc1c6",
          500: "#9aa0a6",
          600: "#80868b",
          700: "#5f6368",
          800: "#3c4043",
          900: "#1a1a1a",
          950: "#0d0d0d",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-pink": "pulse-pink 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 15s ease infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "type": "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-pink": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 77, 166, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 77, 166, 0.8)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glow: {
          "from": { boxShadow: "0 0 20px rgba(255, 77, 166, 0.5)" },
          "to": { boxShadow: "0 0 30px rgba(255, 77, 166, 0.8)" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#ff4da6" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "pink": "0 0 20px rgba(255, 77, 166, 0.3)",
        "pink-lg": "0 0 40px rgba(255, 77, 166, 0.5)",
        "dark": "0 4px 20px rgba(0, 0, 0, 0.3)",
        "dark-lg": "0 8px 40px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
