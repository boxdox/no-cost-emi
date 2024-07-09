/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{css,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#e6fcee',
        primary: '#57ac6d',
        border: '#6b7280',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
