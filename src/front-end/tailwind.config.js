/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
      keyframes: {},
=======
      gridTemplateAreas: {
        app: ["header", "navigation", "content", "footer"],
      },
      gridTemplateColumns: {
        app: "1fr",
      },
      gridTemplateRows: {
        app: "59px 59px 1fr 250px",
      },
>>>>>>> 85ded07 (Chuong - Header fix commit)
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
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting")(require("postcss-nesting")),
    require("autoprefixer"),
    require("tailwindcss"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
});
