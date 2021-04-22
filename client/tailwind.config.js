module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: require("./src/Components/screenSize"),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
