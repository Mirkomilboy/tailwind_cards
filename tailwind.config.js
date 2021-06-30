module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Sans JP', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'main-blue': '#5C38FA',
        'reddish': '#FF8F8F',
      },
      spacing: {
        '3.5': '14px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
