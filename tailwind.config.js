/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pokeballs' : "url(https://raw.githubusercontent.com/MrTGK0386/R505-front/refs/heads/master/public/assets/GreyPokeball.png)",
        'pokeballsXS' : "url(https://raw.githubusercontent.com/MrTGK0386/R505-front/refs/heads/master/public/assets/GreyPokeball.png)",
      },
      backgroundSize: {
        'pokeballs' : "4%",
        'pokeballsXS' : "15%",
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],  // Ajout de la police
      },

    },
  },
  plugins: [],
}
