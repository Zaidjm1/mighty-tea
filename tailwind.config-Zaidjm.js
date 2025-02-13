/** @type {import('tailwindcss').Config} */


export default {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
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
  plugins: [
    require('tailwindcss-animated'),
    require('taos/plugin')
  ],
}

