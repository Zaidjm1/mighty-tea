/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'milktea': "url(./assets/images/milktea.png)",
        'teabg': "url(./assets/images/teabg.png)",
        'shop': "url(./assets/images/mshop.png)",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        dm: ['"DM Serif Text"', "serif"],
        lexa: ['"Lexend Exa"', "sans-serif"],
      }
    },
  },
  plugins: [],
}

