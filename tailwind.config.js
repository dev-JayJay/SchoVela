/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'width1': '85px',
        'width2': '650px', 
      },
      height: {
        'height1': '64px',
      },
      fontSize: {
        'fontSize1': '18px',
      },
      colors:{
        Ared: '#FF2400',
      },
      // bg_colors:{
      //   Color1: '#1a1a1a',
      // },
    },
  },
  plugins: [],
}