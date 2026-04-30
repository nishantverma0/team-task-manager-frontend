/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        darkBg: "#0f172a",   // premium dark background
        card: "#111827",     // card color
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(99,102,241,0.4)",
      },

      backdropBlur: {
        xs: "2px",
      },

      transitionProperty: {
        theme: "background-color, color, border-color",
      },
    },
  },

  plugins: [],
};
