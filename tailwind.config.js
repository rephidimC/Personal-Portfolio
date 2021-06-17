module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
      'white': theme('colors.white.500'),
    }),
    backgroundImage: theme => ({
      'growth': "url('https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923461/green_au1be8.jpg')",
      'experience': "url('https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923434/experience_algh1n.jpg')"
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
