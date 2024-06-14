/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: "#ECE6E3",
        customButtonSelected: "#FDF0E7",
        customButtonSelectedText: "#F09C67",
      },
    },
  },
  plugins: [],
};
