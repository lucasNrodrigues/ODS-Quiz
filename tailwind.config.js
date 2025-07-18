/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sobrescreve a família de fontes 'sans' padrão do Tailwind para usar 'Roboto'
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
