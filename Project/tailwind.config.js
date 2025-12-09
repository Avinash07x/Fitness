/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#3b82f6",
        gray1: "#f3f4f6",
        gray0: "#e5e7eb",
        gray8: "#1f2937",
      },
      borderRadius: {
        "3xl": "1rem",
      },
      boxShadow: {
        "3xl": "0 10px 30px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
