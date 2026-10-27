const path = require('path');


console.log(">>> TAILWIND <<<"); 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, 'views', '**', '*.pug') 
  ],
  theme: {
    extend: {
      fontFamily: {
        bangers: ['Bangers', 'cursive'],
      }
    },
  },
  plugins: [],
}