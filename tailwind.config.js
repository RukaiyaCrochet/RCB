/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Soft, friendly body font for a handcrafted feel
        sans: ['"Quicksand"', 'Inter', 'system-ui', 'sans-serif'],
        // Elegant display font to complement crochet aesthetics
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
