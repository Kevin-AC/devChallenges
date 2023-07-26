/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        decoration: '#F7DF94',
        primary: '#4F4F4F',
        secundary: '#828282',
        card: '#333333',
        textCard: '#F2F2F2'

      },
      fontFamily: {
        Raleway: 'Raleway'
      }
    }
  },
  plugins: []
}
