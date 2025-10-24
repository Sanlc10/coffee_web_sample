/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F5E6D3',
        'dark': '#1A1A1A',
        'darker': '#0D0D0D',
        'brown': '#6B5D52',
        'brown-dark': '#3E342E',
        'gold': '#D4AF37',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
