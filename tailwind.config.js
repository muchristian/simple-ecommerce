module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        palette: {
          lighter: "#F5F3FF",
          light: "#DDD6FE",
          primary: "#5B21B6",
          dark: "#4C1D95",
        },
      },
      fontFamily: {
        primary: ['"Josefin Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
