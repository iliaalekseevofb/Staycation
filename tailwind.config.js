module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3252DF',
        secondary: '#152C5B',
        thirdly: '#FF498B',
        'myGradient1': 'rgba(0, 0, 0, 0)',
        'myGradient2': 'rgba(0, 0, 0, 0.4)',
        'myGradientHover': 'rgba(0, 0, 0, 0.6)'
      },
      boxShadow: {
        'buttonShadow': '0px 8px 15px 0px #3252DF4D'
      }
    },
  },
  plugins: [],
}