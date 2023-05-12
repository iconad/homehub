/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        't-primary': '#3b82f6',
        't-secondary': '#7e22ce'
      }
    },
  },
  plugins: [],
}

