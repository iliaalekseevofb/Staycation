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
        'dotsGradient': 'rgba(255, 255, 255, 0.5)',
        'arrowGradient': 'rgba(255, 255, 255, 0.8)',
        'buttonGradient': 'rgba(255, 255, 255, 0.1)',
        'modalGradient': 'rgba(0, 0, 0, 0.8)'
      },
      boxShadow: {
        'buttonShadow': '0px 8px 15px 0px #3252DF4D'
      }
    },
  },
  plugins: [],
}