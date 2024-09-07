/** @type {import('tailwindcss').Config} */

const { default: shadows } = require("@mui/material/styles/shadows");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    colors: {
      background: {
        light: "#f9fafb",
        dark: "#121212",
      },

      text: {
        light: "#000000",
        dark: "#e5e5e5",
      },

      white: "#FFFFFF",

      black: "#000000",

      red: "#900603",

      darkRed: "#700404",

      gray: colors.gray,

      transparent: "transparent",
    },

    boxShadow: {
      hovering: "5px 5px 10px rgba(0,0,0,0.5)",
      clicked: "5px 5px 10px rgba(0,0,0,0.5) inset",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
