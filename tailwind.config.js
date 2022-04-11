module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        navBg: "#2B8A8E",
        heroButton: "#219ebc",
        heroDescription:"#023e8a",
        heroTitle:"#00afb9",
      },
      fontFamily:{
        'MainFont':[ 'Montserrat', 'sans-serif'],
      }
    },

    important: true,
  },
  plugins: [require("tw-elements/dist/plugin")],
};
