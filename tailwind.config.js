/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4effa',
          100: '#e5d9f2',
          200: '#d0b8e8',
          300: '#b68cd9',
          400: '#9e64c8',
          500: '#8444af',
          600: '#6b3390',
          700: '#562772',
          800: '#441752', // Original primary
          900: '#290d30',
        },
        secondary: {
          50: '#fcf3f7',
          100: '#fae9f1',
          200: '#f7d5e4',
          300: '#f2b6ce',
          400: '#EFB6C8', // Original secondary
          500: '#e88fae',
          600: '#d85a88',
          700: '#c23567',
          800: '#a22953',
          900: '#862445',
        },
        accent: {
          50: '#eef5ff',
          100: '#e0edff',
          200: '#c7dcff',
          300: '#a5c2ff',
          400: '#8a9fff',
          500: '#6775fc',
          600: '#5e5eef',
          700: '#4d43cf',
          800: '#4138a8',
          900: '#363385',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
        pulse: 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};