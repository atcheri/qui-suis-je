/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Serif JP', 'serif'],
        alice: ['alice'],
      },
    },
  },
  plugins: [require('tailwind-gradient-mask-image'), require('flowbite/plugin')],
};
