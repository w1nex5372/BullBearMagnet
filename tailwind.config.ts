import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        accentSoft: "hsl(var(--accent-soft))",
        glow: "hsl(var(--glow))",
      },
      boxShadow: {
        halo: "0 24px 80px rgba(7, 10, 18, 0.45)",
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 30%), radial-gradient(circle at bottom, rgba(113, 215, 255, 0.08), transparent 35%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, 14px, 0)" },
        },
      },
      animation: {
        drift: "drift 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
