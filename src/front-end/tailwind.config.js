/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // gridTemplateAreas: {
      //   app: ["header", "navigation", "content", "footer"],
      // },
      // gridTemplateColumns: {
      //   app: "1fr",
      // },
      // gridTemplateRows: {
      //   app: "60px 40px 1fr 400px",
      // },
      keyframes: {
        itemShow: {
          "0%": {
            transform: "scale(0.97)",
            opacity: "0.6",
            top: "10px",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
            top: "0px",
          },
        },
      },
      animation: {
        "item-show": "itemShow 0.4s ease-in",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
});
