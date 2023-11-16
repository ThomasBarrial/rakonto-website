/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'off',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin)'],
        francoisOne: ['var(--font-francois_one)'],
      },
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
        fifth: 'var(--color-fifth)',
      },
      maxWidth: {
        content: '1700px',
      },
      animation: {
        backgroundOverlay: 'backgroundOpacityAnimation 1s linear',
        fadeIn: 'fadeIn 1s linear',
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
