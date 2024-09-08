/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      content: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary:'#22d3ee',
        abu:'#64748b',  
        dar:'#0f172a',
      },
      screens:{
       '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

