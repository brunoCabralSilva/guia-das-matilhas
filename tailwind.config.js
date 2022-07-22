/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      '33vh': '33vh',
    },
    extend: {
      fontFamily: {
        'amatic': ['Amatic SC'],
        'andika':['Andika New Basic'],
      },
      zIndex: {
        'back': '-40',
      },
      rotate: {
        '45deg': '-45deg',
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
        '50vw': '50vw',
        '80%': '80%',
        '20%': '20%',
        '95%':'95%',
        '99%': '98%',
        '13': '2.7rem',
      },
      colors: {
        'h-transp': 'rgb(0,0,0,0.3)',
        'f-transp': 'rgb(0,0,0,0.6)',
        't-transp': 'rgb(0,0,0,0.9)',
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
