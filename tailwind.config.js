/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans'],
        custom1: ['Poppins-Thin', 'sans'],
      },
    },
    
  },
  plugins: [],
}