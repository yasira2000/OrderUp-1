// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        customBackground: "#ECE6E3",
        customButtonSelected: "#F09C67",
        customButtonSelectedText: "#FFFFFF",
        customButtonActive: "#FDF0E7",
        customButtonActiveText: "#F09C67",
        primeColor: "#F6E9DC",
        fadedGray: "#ADADAD",
        lightGrayLines: "#DEDEDE",
      },
      boxShadow: {
        upward: "0 -4px 6px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        slideUp: "slideUp 0.3s ease-in-out",
        slideDown: "slideDown 0.3s ease-in-out",
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
      },
      fontSize: {
        "result-heading": "22px", // Result Headings: 20px
        "icon-sub-heading": "15px", // Icon Sub Headings: 15px
        "small-icon-sub-heading": "12px", // Small Icon Sub Headings: 10px
        "bold-icon-sub-heading": "13px", // Bold Icon Sub Heading: 12px
        "mid-size": "13px", // Mid Size: 12px
      },
      fontWeight: {
        "bold-icon-sub-heading": "bold", // Bold Icon Sub Heading: Bold
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
};
