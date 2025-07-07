/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['Baloo 2', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        // Adiciona a fonte pixelada para ser usada com `font-pixel`
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'deep-blue': '#0D1B2A',
        'galactic-purple': '#4B3F72',
        'stellar-light': '#F9F9F9',
        'nebula-yellow': '#FFC857',
        'cosmic-turquoise': '#7FDBDA',
        'neon-pink': '#ff00ff',
        'neon-cyan': '#00ffff',
      },
      animation: {
        'float': 'float 15s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite alternate',
        'comet': 'comet 30s linear infinite',
        // Animação de piscar para o botão principal
        blink: 'blink 1.5s step-start infinite',
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
        blink: {
          '50%': { opacity: 0 },
        },
      },
      // Efeito de brilho para o texto (requer plugin)
      textShadow: {
        'neon-glow-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff',
        'neon-glow-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff',
      },
    },
  },
  plugins: [
    // Instale este plugin para o efeito de brilho: npm install -D tailwindcss-textshadow
    require('tailwindcss-textshadow'),
  ],
};
