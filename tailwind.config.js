/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      'darkest-gray': '#34313D',
      'dark-purple': '#3A3054',
      'light-purple': '#4B3F6B',
      'dark-gray': '#9E9AA8',
      'light-gray': '#EFF1F7',
      cyan: '#2BD0D0',
    },
    gridTemplateColumns: {
      // mobile grid
      mobile: '24px 1fr 24px',
      desktop: '165px 1fr 165px',
    },
    extend: {},
  },
  plugins: [],
};
