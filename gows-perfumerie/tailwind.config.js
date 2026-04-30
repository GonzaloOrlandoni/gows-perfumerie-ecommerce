/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        gold: "#C4A265",
        "gold-light": "#D4B480",
        dark: "#0A0A0A",
        "warm-white": "#FAFAF8",
      },
      animation: {
        "slide-in": "slideIn 0.35s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
