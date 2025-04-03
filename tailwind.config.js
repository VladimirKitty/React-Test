import { type Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0066FF',
        'gray-black': '#1A1A1A',
        'gray-dark': '#4A4A4A',
        'gray-light': '#E5E5E5',
        'gray-white': '#f9fafb'
      },
      fontFamily: {
        sans: ['fontSans', 'fontSans Fallback', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'spring-button': 'cubic-bezier(.1,4.5,.2,.2)',
        'card': 'cubic-bezier(.4,0,1,1)',
      },
      keyframes: {
        typedjsBlink: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.0298266 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        'cursor-blink': 'typedjsBlink 0.7s infinite'
      }
    },
  },
  plugins: [],
} satisfies Config