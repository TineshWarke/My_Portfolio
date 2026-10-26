import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        "Sofadi-One": ["var(--font-sofadi)", "cursive"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    themes: [
      "forest",
      "luxury",
      "sunset",
      "cyberpunk",
      "synthwave",
      "coffee",
      "winter",
    ],
  },
};

export default config;
