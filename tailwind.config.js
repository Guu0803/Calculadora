/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        // dark mode

        fundoEscuro: '#05161a',
        verdeEscuro: '#072e33',
        verdeClaro: '#0c7073',
        verdeAgua: '#0f969c',
        azulMarinho:'#6da4c0',
        azulEscuro:'#294d61',

        // light mode

        beje: '#d59d80',
        laranjaClaro:'#c0754d',
        laranja:'#b6410f',
        brancoAzulado:'#f2c1a7',
        azulEsverdeado:'#104c64',
        azulEsverdeadoEscuro:'#03384d'

      },
      fontFamily:{
        orbitron: ['Orbitron']
      }
    },
  },
  plugins: [],
}

