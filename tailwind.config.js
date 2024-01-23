/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'poppins':['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },
  },
  plugins: [],
}

