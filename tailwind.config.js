/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff0',
          100: '#00FFCA',
          200: '#00FFCA',
          300: '#00FFCA',
          400: '#00FFCA',
          500: '#00FFCA',
          600: '#00FFCA',
          700: '#00FFCA',
          800: '#00FFCA',
          900: '#00FFCA',
        },
      },
      fontFamily: {
        sans: ['General Sans', 'SansSerif'],
      },
      backgroundColor: {
        dark: '#000000',
      },
    },
  },
  plugins: [],
};
