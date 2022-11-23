/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },

    extend: {
      colors: {
        lime: "#c2cf10",
        blue: "#2d3c51",
        "dark-blue": "#182333",

        grey: {
          400: "#ccc",
          500: "#a3a3a6",
          600: "#cdcdcd",
          700: "#8d9297",
          900: "#20292f",
        },
        white: "#ffffff",
      },

      backgroundImage: {
        home_bg_image: "url('../public/mainbg.jpg')",
        footer_bg_image: "url('../public/footer-bg.jpg')",
      },

      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "fade-in-down": {
            "0%": {
              opacity: "0",
              transform: "translateY(0px)",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
