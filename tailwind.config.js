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
        '80%': '80%',
        '45vh': '45vh',
        '40vh': '40vh',
        '20vw': '20vw',
        '80vw': '80vw',
      },
      colors: {
        'h-transp': 'rgb(0,0,0,0.3)',
        'f-transp': 'rgb(0,0,0,0.6)',
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
