/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        app: ["header", "navigation", "content", "footer"],
      },
      gridTemplateColumns: {
        app: "1fr",
      },
      gridTemplateRows: {
        app: "60px 60px 1fr 250px",
      },
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
      md: { min: "741px", max: "1023px" }, // tablet responsive
      sm: { max: "740px" }, // mobile responsive
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
});
