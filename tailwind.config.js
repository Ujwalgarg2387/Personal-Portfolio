module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        kalam: ['Kalam', 'sans-serif']
      },
      boxShadow: {
        'orange-glow': '0 0 10px 3px rgba(245, 101, 57, 0.5)',
        'yellow-glow': '0 0 10px 3px rgba(201, 156, 58, 0.5)',
        'blue-glow': '0 0 10px 3px rgba(0, 0, 255, 0.5)',
        'white-glow': '0 0 10px 0 rgba(255, 255, 255, 0.5)',
      },
      colors: {
        'dark-bg': '#262626',
        'customOrange': '#ff8427',
        'customBlue': '#003366'
      },
    },
  },
  plugins: [],
}