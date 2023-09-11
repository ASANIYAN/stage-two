/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#BE123C',
        'color2': '#9CA3AF',
        'color3': '#111827',
      }, 
      screens: {
        'xxxs': '280px',
         // => @media (min-width: 280px) { ... }
        'xxs': '320px',
         // => @media (min-width: 320px) { ... }
        'xs': '480px',
         // => @media (min-width: 480px) { ... }
        's': '576px',
         // => @media (min-width: 576px) { ... }
        '840': '840px',
         // => @media (min-width: 840px) { ... }
        ...defaultTheme.screens
      }, 
    },
  },
  plugins: [],
}

