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
        'ChalpeyLight': "url('../public/images/ChalpeyLight.jpg')",
        'ChalpeyDark': "url('../public/images/ChalpeyDark.jpg')",
      },
    },
  },
  plugins: [],
}
