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
        content: '1300px',
      },
      animation: {
        backgroundOverlay: 'backgroundOpacityAnimation 1s linear',
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
      },
    },
  },
  plugins: [],
};
