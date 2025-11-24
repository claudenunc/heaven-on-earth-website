import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A365D',
          light: '#2D3748',
        },
        gold: {
          DEFAULT: '#D69E2E',
          light: '#ECC94B',
        },
        'soft-sky': '#E2E8F0',
        'living-green': '#38A169',
        'warm-coral': '#E53E3E',
        'purple-dawn': '#805AD5',
        'soft-orange': '#ED8936',
        'deep-navy': '#0F2942',
        'soft-gold': '#FAF5E9',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
