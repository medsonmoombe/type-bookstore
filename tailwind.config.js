/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      screens: {
        'sm': { 'max': '767px'},
        'md': { 'min': '768px', 'max' : '901px'},
        // => @media (min-width: 768px) { ... }
  
        'lg': { 'min': '902px'},
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
}