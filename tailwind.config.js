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
      fontFamily: {
        Agbalumo: ['Agbalumo','cursive'],
        Beginner:['Edu TAS Beginner','cursive' ],
        Signika:['Signika Negative', 'cursive'],
        Acme:['Acme','cursive'],
        Archivo:['Archivo Narrow','cursive']
      },
      colors:{
        Ared: '#FF2400',
      },
      spacing: {
        'marginTop1': '65px',
      },
      borderRadius: {
        'rounded1': '50px',
      },
      // bg_colors:{
      //   Color1: '#1a1a1a',
      // },
    },
  },
  plugins: [],
}