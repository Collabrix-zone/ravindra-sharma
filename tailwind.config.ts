import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      colors: {
        navy: {
          dark: "#080C18",
          DEFAULT: "#0D1120",
        },
        crimson: {
          DEFAULT: "#C41E3A",
          dark: "#a01830",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#b8952d",
        },
      },
    },
  },
  plugins: [],
};

export default config;
