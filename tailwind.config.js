/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    colors:{
      'lime': '#c2cf10',
      'blue': '#2d3c51',
      'dark-blue': '#182333',
      'white':'#ffffff'
    },
    extend: {},
  },
  plugins: [],
}
