import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Dark Colors
        void: {
          DEFAULT: '#0a0a0f',
          light: '#12121a',
          dark: '#050508',
        },
        abyss: {
          DEFAULT: '#0d0d14',
          light: '#15151f',
          dark: '#080810',
        },
        // Electric Blue Accents
        cyber: {
          DEFAULT: '#00d4ff',
          light: '#33ddff',
          dark: '#00a8cc',
          glow: '#00d4ff40',
        },
        neon: {
          DEFAULT: '#0ff',
          light: '#66ffff',
          dark: '#00cccc',
          glow: '#0ff30',
        },
        // Purple Accent
        plasma: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
          glow: '#6366f140',
        },
        // Success/Warning Colors (Futuristic variants)
        matrix: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
          glow: '#10b98140',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
          glow: '#f59e0b40',
        },
        danger: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#dc2626',
          glow: '#ef444440',
        },
        // Text Colors
        ghost: {
          DEFAULT: '#e2e8f0',
          muted: '#94a3b8',
          dim: '#64748b',
        },
        // Legacy mappings for compatibility
        navy: '#0a0a0f',
        'navy-light': '#15151f',
        gold: '#00d4ff',
        'gold-light': '#33ddff',
        'soft-sky': '#1e293b',
        'living-green': '#10b981',
        'warm-coral': '#ef4444',
        'purple-dawn': '#6366f1',
        'soft-orange': '#f59e0b',
        'deep-navy': '#050508',
        'soft-gold': '#0a0a0f',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)',
        'glow-line': 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)',
      },
      backgroundSize: {
        'grid-sm': '20px 20px',
        'grid-md': '40px 40px',
        'grid-lg': '60px 60px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 212, 255, 0.3)',
        'glow-md': '0 0 20px rgba(0, 212, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.5)',
        'glow-xl': '0 0 60px rgba(0, 212, 255, 0.6)',
        'glow-purple': '0 0 30px rgba(99, 102, 241, 0.5)',
        'glow-matrix': '0 0 30px rgba(16, 185, 129, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(0, 212, 255, 0.1)',
        '3d': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        '3d-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 10px 20px -5px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'cyber-flicker': 'cyber-flicker 0.15s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'cyber-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(0, 212, 255, 0.3)' },
          '50%': { borderColor: 'rgba(0, 212, 255, 0.8)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
