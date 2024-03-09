module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 50: "#f1f1f1", 100: "#cccccc", 900: "#303030", "900_b3": "#303030b3", "100_01": "#d9d9d9" },
        gray: {
          100: "#f6f6f7",
          300: "#e3e3e3",
          400: "#cbc8c8",
          600: "#70707a",
          700: "#676767",
          "700_01": "#616161",
          "100_01": "#f5f5f5",
        },
        white: { A700: "#ffffff" },
        deep_purple: { A200: "#9747ff" },
        black: { 900: "#000000", "900_cc": "#000000cc" },
      },
      boxShadow: { xs: "0px 1px  2px 0px #0000003f" },
      fontFamily: { inter: "Inter" },
      opacity: { 0.99: 0.99 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
