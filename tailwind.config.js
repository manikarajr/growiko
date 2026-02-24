/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.7s ease-out forwards',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient-shift 5s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #10b981 100%)',
        'card-gradient': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      },
      boxShadow: {
        'glow-indigo': '0 0 40px rgba(99,102,241,0.3)',
        'glow-emerald': '0 0 40px rgba(16,185,129,0.3)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}