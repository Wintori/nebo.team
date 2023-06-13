/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'almost-black': '#0E0E0E',
        'almost-white': '#FAFAFA',
      },
      gridTemplateColumns: {
        'fill160': 'repeat(auto-fit, 160px)',
      }
    },
  },
  plugins: [],
}

