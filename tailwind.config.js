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
    /*
    colors: {
      ...colors,
      'primary': '#FF597D',
      'white': '#EAEAEA',
      'gray': '#858585',
      'black': '#1F2023',
    },
    */
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '800px',
      // => @media (min-width: 1024px) { ... }

      'xl': '800px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '800px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
