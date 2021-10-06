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
    colors: {
      ...colors,
      'primary': '#FF597D',
      'white': '#EAEAEA',
      'gray': '#858585',
      'black': '#1F2023',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
