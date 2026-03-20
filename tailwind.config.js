/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          50:  '#edfffe',
          100: '#d0fffb',
          200: '#a6fff7',
          300: '#67fff1',
          400: '#22f5e6',
          500: '#00d9cc',
          600: '#00ada3',
          700: '#008982',
          800: '#006c68',
          900: '#065956',
        },
        neon: {
          green: '#39ff14',
          cyan: '#00fff5',
          blue: '#0066ff',
          purple: '#bf00ff',
        },
        dark: {
          900: '#050810',
          800: '#0a0f1e',
          700: '#0f1629',
          600: '#151d35',
          500: '#1e2947',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'typewriter': 'typing 3.5s steps(40, end)',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #00d9cc, 0 0 10px #00d9cc' },
          '50%': { boxShadow: '0 0 20px #00d9cc, 0 0 40px #00d9cc, 0 0 60px #00d9cc' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideUp: {
          from: { transform: 'translateY(40px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
