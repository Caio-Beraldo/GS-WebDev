/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a6bc4',
        secondary: '#0d4b8a',
        accent: '#ff6b35',
      },
    },
  },
  plugins: [],
}