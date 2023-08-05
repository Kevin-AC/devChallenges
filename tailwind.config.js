/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBG: '#100E1D',
        cardBG: '#1E213A',
        buttonSeachP: '#6E707A',
        buttonSearch: '#3C47E9',
        buttonF: '#585676',
        primaryText: '#E7E7EB',
        secundaryText: '#A09FB1',
        infoText: '#88869D',
        HumidityBar: '#FFEC65'
      },
      fontFamily: {
        Raleway: 'Raleway'
      }
    }
  },
  plugins: []
}
