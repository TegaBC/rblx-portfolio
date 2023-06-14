/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#FFFFFF',
        'secondary': '#f8f8f8',
        'accent': '#ffa407',
        'text': '#1d1d1f'
      },

      fontFamily: {
        "sans": ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}