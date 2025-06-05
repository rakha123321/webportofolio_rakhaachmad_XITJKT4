/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center : true, 
      padding : '16px',
    },
    extend: {
      colors : {
        "primary" : "#6d28d9",
        "dark" : "#020617", //warna Hitam
        "secondary" : "#94a3b8", // warna Abu
      }
    }
  },
  plugins: [],
}

