module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "320px",
      tablet: "580px",
    },
    extend: {
      colors: {
        navBg: "#066163",
        heroButton: "#219ebc",
        heroTitle: "#00afb9",
        gray: { 100: "#eeffff", 200: "#f9f9f9" },
        mobileHerobg: "#4831d4",
        mobileHerobg2: "#ccf381",
        indigo: {
          100: "#4831d4",
          200: "#3d155f",
          300: "rgba(61, 21, 95, 0.75)",
          400: "rgba(61, 21, 95, 0.5)",
        },
        yellow: "#ccf381",
        white: "#fff",
      },
      fontFamily: {
        oxygen: "Oxygen",
        MainFont: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "2xs": "13.61px",
        xs: "14.59px",
        sm: "15.12px",
        base: "16.18px",
        lg: "17.39px",
        xl: "19.66px",
        "2xl": "24.19px",
        "3xl": "48.38px",
        "4xl": "60.48px",
        "5xl": "66.53px",
      },
    },

    important: true,
  },
  plugins: [require("tw-elements/dist/plugin")],
 
};
