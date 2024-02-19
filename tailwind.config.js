/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        Load: "Load 1.5s infinite linear",
      },
      keyframes: {
        Load: {
          "100%": { transform: " rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
