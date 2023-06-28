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
      },
      boxShadow: {
        basic:
          '2px 2px 6px rgba(0, 0, 0, 0.35), 3px 3px 6px rgba(0, 0, 0, 0.25)',
        basicLg:
          '6px 6px 10px rgba(0, 0, 0, 0.35), 8px 8px 10px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
}
