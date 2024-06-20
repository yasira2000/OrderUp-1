/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: "#ECE6E3",
        customButtonSelected: "#F09C67",
        customButtonSelectedText: "#FFFFFF",
        customButtonActive: "#FDF0E7",
        customButtonActiveText: "#F09C67",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          overflow: "-moz-scrollbars-none" /* Firefox */,
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, and Opera */,
        },
      };

      addUtilities(newUtilities);
    },
  ],
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
};
