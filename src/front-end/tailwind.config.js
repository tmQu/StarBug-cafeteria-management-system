module.exports = {
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
        app: "74px 74px 1fr 250px",
      },
    },
    screens: {
      md: { min: "741px", max: "1023px" }, // tablet responsive
      sm: { max: "740px" }, // mobile responsive
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
