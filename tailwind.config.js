/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      colors: {
        lime: "#c2cf10",
        red: "#cc0000",
        blue: "#2d3c51",
        "blue-transparent": "#182333cc",
        "light-blue": "#213148",
        "dark-blue": "#2D3C51",
        grey: {
          200: "#f8f9fa",
          300: "#667181",
          400: "#ccc",
          500: "#a3a3a6",
          600: "#cdcdcd",
          700: "#8d9297",
          900: "#20292f",
        },
        white: "#ffffff",
        cream: "#f9f9f9",
        black: "#1a1a1a",
      },

      backgroundImage: {
        home_bg_image: "url('../public/mainbg.jpg')",
        home_bg_dull_image: "url('../public/mainbg3.jpg')",
        contact_us: "url('../public/image33.png')",
        our_services: "url('../public/image17.png')",
        privacy_policy_image: "url('../public/privacy_image.jpg')",
        footer_bg_image: "url('../public/footer-bg.jpg')",
        header_bg: "url('../public/image36.png')",
        head: "url('../public/bs1.jpg')",
        row_bg: "url('../public/row-bg.png')",
        energy_performance_header_bg: "url('../public/test.jpg')",
        row_bg_two: "url('../public/row-bg-two.jpg')",
        hero:"url('../public/heroHomePage.png')",
        hero_EPC:"url('../public/energy-performance-certificate.png')",
        hero_gas_safety:"url('../public/gas-safety.png')",
        hero_building_survey:"url('../public/building-survey.png')",
        eicr_bg: "url('../public/services/electrical-installation-condition-report.jpg')"
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
      fontFamily: {
        poppins: ["Poppins", "Arial", "Helvetica", "sans-serif"],
        montserrat: ["Montserrat", "Arial", "Helvetica", "sans-serif"],
        opensans: ["Open Sans", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
