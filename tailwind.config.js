/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.5)', // Custom glow effect
        'logo-glow': '0 0 15px #FBBF24, 0 0 15px #F59E0B, 0 0 15px #EF4444',
      },
      
    },
  },
  plugins: [],
}

