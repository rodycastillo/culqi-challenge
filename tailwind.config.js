/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope, sans-serif"]
      },
      backgroundImage: {
        'search': "url('./src/assets/icons/search.svg')",
        'down': "url('./src/assets/icons/down.svg')",
        'sub': "url('./src/assets/icons/sub.svg')",
      },
      backgroundPosition: {
        'rightP': "97% 50%"
      },
    },
    screens: {
      'sm': { "max": '640px' },
      // => @media (min-width: 640px) { ... }

      'md': { 'max': '768px' },
      // => @media (min-width: 768px) { ... }

      'lg': { 'max': '1024px' },
      // => @media (min-width: 1024px) { ... }

      'xl': { 'max': '1280px' },
      // => @media (min-width: 1280px) { ... }

      '2xl': { 'max': '1536px' },
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

