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
        'color4': '#6B7280',
        'color5': 'rgba(190, 18, 60, 0.10)',
        'color6': '#666',
        'color7': 'rgba(190, 18, 60, 0.70)',
        'color8': 'rgba(248, 231, 235, 0.40)',
        'color9': 'rgba(51, 51, 51, 0.80)',
        'color10': 'rgba(190, 18, 60, 0.20)',
        'color11': 'rgba(0, 0, 0, 0.30)',
        'color12': '#333',
        'color13': '#404040',
        'color14': '#B91C1C',
        'color15': '#F8E7EB',
        'color16': '#E8E8E8',
        'color17': '#C7C7C7',
        'color18': 'rgba(255, 255, 255, 0.80)',
        'color19': 'rgba(18, 18, 18, 0.50)',
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
        '1100': '1100px',
         // => @media (min-width: 1100px) { ... }
        ...defaultTheme.screens
      }, 
    },
  },
  plugins: [],
}

