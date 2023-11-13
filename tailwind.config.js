/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'width1': '85px',
        'width2': '650px',
        'width3': '400px',
        'width4':'590px' 
      },
      height: {
        'height1': '64px',
        'height2': '400px'
      },
      fontSize: {
        'fontSize1': '18px',
        'fontSize2':'35px',
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
        'marginTop1': '75px',
        'bottom1':'120px',
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