/** @type {import('tailwindcss').Config} */
const screens = {
  tablet: "768px",
  laptop: "1440px",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens,
    },
  },

  plugins: [],
};
