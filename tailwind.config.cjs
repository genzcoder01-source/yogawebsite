/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#ff7213',
        'orange-primary-stroke': '#a65d32',
        'orange-dark': '#833100',
        'orange-dark-stroke': '#370808',
        'brown': '#a65d32',
        'white-soft': '#fef7f2',
      },
      fontFamily: {
        primary: ['var(--font-helveticaNeue)', 'helveticaNeue', 'sans-serif'],
        secondary: ['var(--font-wonderbar)', 'wonderbar', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
