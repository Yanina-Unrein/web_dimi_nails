import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          fuchsia:  "#c4186a",   // deep fuchsia — not full neon
          pink:     "#e05585",   // warm rose
          blush:    "#f2a7c3",   // soft pink
          gold:     "#c9a84c",   // muted gold (replaces neon yellow)
          cream:    "#fdf6f0",   // warm white
          dark:     "#18060f",   // near black with a warm tint
          deep:     "#2a0d1a",   // dark plum
          mid:      "#3d1429",   // mid plum
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        script:  ["var(--font-dancing)", "cursive"],
        body:    ["var(--font-jost)", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.8s ease forwards",
        "fade-in":    "fadeIn 0.6s ease forwards",
        "float":      "float 5s ease-in-out infinite",
        "shimmer":    "shimmer 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
