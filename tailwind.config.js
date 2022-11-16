module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1600px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1050px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "940px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "750px" },
      // => @media (max-width: 639px) { ... }
      mobile: { max: "470px" },
      // => @media (max-width: 639px) { ... }
      normal: { min: "470px" },
    },
    fontFamily: {
      sans: ["Heebo", "sans-serif"],
    },
    extend: {
      fontSize: {
        primary: "4.8rem",
        title: "1.8rem",
        xl: "2rem",
        xxl: "3rem",
      },
      lineHeight: {
        24: "6rem",
      },
      zIndex: {
        hidden: "-1",
        show: "999",
      },
    },
  },
  plugins: [],
};
