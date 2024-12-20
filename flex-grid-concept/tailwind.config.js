/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'ChalpeyLight': "url('../public/imgs/ChalpeyLight.jpg')",
        'ChalpeyDark': "url('../public/imgs/ChalpeyDark.jpg')",
      },
    },
  },
  plugins: [],
}
