import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'game-bg-1': "url('../public/images/game-bg-1.gif')",
        'game-bg-2': "url('../public/images/game-bg-2.gif')",
        'game-bg-3': "url('../public/images/game-bg-3.gif')",
        'game-bg-4': "url('../public/images/game-bg-4.gif')",
        'game-bg-5': "url('../public/images/game-bg-5.gif')",
        'game-bg-6': "url('../public/images/game-bg-6.gif')",
        'game-bg-7': "url('../public/images/game-bg-7.gif')",
        'game-bg-8': "url('../public/images/game-bg-8.gif')",
        'game-bg-9': "url('../public/images/game-bg-9.gif')",
        'game-bg-10': "url('../public/images/game-bg-10.gif')",
        'resume-bg-1': "url('../public/images/resume-bg-1.png')",
      },
      fontFamily: {
        'minecraft': ["Tiny5"],
        'Sofadi-One': ["Sofadi One"]
      },
      lineHeight: {
        'extra-loose': '2.5', // Custom line height
      },
      boxShadow: {
        'inner2': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],

  daisyui: {
    themes: [
      "forest",
      "luxury",
      "sunset",
      "cyberpunk",
      "synthwave",
      "coffee",
      "winter"
    ],
  },
}
export default config
