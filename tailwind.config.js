const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: { 200: '50rem' },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      black: '#1F2023',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
