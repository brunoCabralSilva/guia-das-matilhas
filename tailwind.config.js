/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'amatic': ['Amatic SC'],
        'andika':['Andika New Basic'],
      },
      backgroundImage: {
        'wolf-01': "url('/src/images/wallpapers/001.jpg')",
      },
      spacing: {
        '20vw': '20vw',
        '33vh': '33vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '80vw': '80vw',
        '80%': '80%',
        '95%':'95%,'
      },
      colors: {
        'h-transp': 'rgb(0,0,0,0.3)',
        'f-transp': 'rgb(0,0,0,0.6)',
        'g-transp': 'rgb(0,0,0,0.8)',
        'crepusculo': '#df9793',
      },
      animation: {
        'pulse-fast': 'pulse 1s linear infinite',
      },
      screens: {
        '1xl': '1400px',
        'mob-1': '335px',
        'mob-2': '426px',
        'mob-3': '586px',
      },
    },
  },
  plugins: [],
}
