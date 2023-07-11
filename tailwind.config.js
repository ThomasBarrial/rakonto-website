/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin)'],
        bayon: ['var(--font-bayon)'],
      },
      colors: {
        background: '#FEFFF0',
        textColor: '#454545',
        primary: '#13795F',
        secondary: '#91C98C',
        tertiary: '#FEBE10',
        quaternary: '#DD6D48',
      },
      maxWidth: {
        content: '1700px',
      },
      animation: {
        backgroundOverlay: 'backgroundOpacityAnimation 1s linear',
        fadeIn: 'fadeIn 0.5s linear',
      },
      keyframes: {
        backgroundOpacityAnimation: {
          '0%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '20%',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      iframe: '815px',
    },
  },
  plugins: [],
};
