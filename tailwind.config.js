/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    screens: {
      'sm': "398px",
      'md': "768px",
      'lg': "976px",
      'xl': "1440px",
    },
    extend: {},
  },
  plugins: [],
};
