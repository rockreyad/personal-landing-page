/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Space: ["Space Grotesk", "sans-serif"] },
    },
  },
  plugins: [],
};
