/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jpBg: 'rgb(27, 26, 33)',
        jpOverlay: 'rgb(30, 32, 37)'
        // kuzoPurp: '#b077ba',
        // kuzoOrange: '#ffad61'
      },
      fontSize: {
        xxxs: '0.45rem',
        xxs: '0.6rem'
      }
    }
  },
  plugins: []
}
