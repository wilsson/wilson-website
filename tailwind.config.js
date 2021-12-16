const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'black': '#1F2023',
    }),
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '800px',
      'xl': '800px',
      '2xl': '800px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
