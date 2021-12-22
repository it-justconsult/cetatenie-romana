const tailwindColors = require('tailwind-colors')
module.exports = {
  srcDir: 'src',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      ...tailwindColors,
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'regal-blue': '#243c5a',
        'cetro-green': '#72BB5D',
        'cetro-white': '#fff',
        'cetro-black': '#424242',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
