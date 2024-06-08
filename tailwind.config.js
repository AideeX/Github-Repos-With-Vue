/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f7f7f9',
        charcoal: '#333',
        purple: {
          DEFAULT: '#6a1b9a',
          dark: '#4a148c',
          light: '#bb86fc',
          hover: '#7c4dff'
        }
      },
      boxShadow: {
        'purple': '0 4px 6px rgba(106, 27, 154, 0.1)',
        'purple-dark': '0 4px 6px rgba(187, 134, 252, 0.1)',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

