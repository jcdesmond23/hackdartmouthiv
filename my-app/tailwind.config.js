/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        title: `linear-gradient(to right, #FF0000,#FFB800,#FFD600,#4AFFC9,#FFD600,#FFB800,#FF0000)`,
        radial: `radial-gradient(50% 50% at 50% 50%, #190000 0%, rgba(255, 0, 0, 0) 100%)`,
        "sponsors-title": `linear-gradient(to right, #A410FF 13.11%, #2F38FF 68.1%)`,
        rainbow: `linear-gradient(to right, #FF0C0C 0%, #FF4C00 21.35%, #FAFF00 42.71%, #12DE00 62.5%, #001AFF 97.92%, #BD00FF 100%)`,
        "sponsors-background": `linear-gradient(180deg, rgba(0, 86, 252, 0.2) 0%, rgba(32, 0, 0, 0.2) 100%)`

      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        scroll: 'scroll 25s linear infinite',
        scroll2: 'scroll2 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scroll2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    fontFamily: {
      compacta: ["Compacta", "sans-serif"],
      puente: ["Puente", "sans-serif"],
      'avant-garde': ["Avant Garde", "sans-serif"],
      'avant-garde-lt': ["Avant Garde LT", "sans-serif"],
    },
  },
  plugins: [],
}
