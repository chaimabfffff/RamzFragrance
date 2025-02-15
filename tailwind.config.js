/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e5e3',
          200: '#c7ccc7',
          300: '#a5aca5',
          400: '#848c84',
          500: '#6b746b',
          600: '#555d55',
          700: '#434843',
          800: '#353835',
          900: '#2b2e2b',
        },
      },
    },
  },
  plugins: [],
};