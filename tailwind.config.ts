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
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#080C18",
        "primary-accent": "#C41E3A",
        "secondary-accent": "#D4AF37",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A0AEC0",
      },
    },
  },
  plugins: [],
};

export default config;
