/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#1d1d1f',
        'mainHover': '#2b2b2e',
        'accent': '#ffa407',
        'text': '#FFFFFF'
      },
      backgroundImage: {
        'splash': "url('/src/assets/splash.jpg')" 
      },
      fontFamily: {
        "sans": ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}