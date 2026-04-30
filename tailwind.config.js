/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./index.html",          // ⚠️ VERY IMPORTANT (you missed this)
    "./src/**/*.{js,jsx}",   // your components
  ],

  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // indigo-500
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};
