import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        "paper-dim": "#F8F8F8",
        sand: "#F0EAD6",
        champagne: "#D4AF37",
        "champagne-deep": "#B8860B",
        graphite: "#1A1A1A",
        "graphite-soft": "#333333",
        ink: "#0A0A0A",
        "ink-soft": "#121212",
        line: "#E5E5E5",
        "line-dark": "#262626",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.9rem, 3.4vw, 3.1rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        edit: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
