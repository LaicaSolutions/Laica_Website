/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['Baloo 2', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'deep-blue': '#0D1B2A',
        'galactic-purple': '#4B3F72',
        'stellar-light': '#F9F9F9',
        'nebula-yellow': '#FFC857',
        'cosmic-turquoise': '#7FDBDA',
      },
      animation: {
        'float': 'float 15s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite alternate',
        'comet': 'comet 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%': { opacity: 0.3 },
          '100%': { opacity: 1 },
        },
        comet: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
      },
    },
  },
  plugins: [],
};
