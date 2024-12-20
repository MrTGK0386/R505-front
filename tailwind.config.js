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
        'radial-#919AA2' : "radial-gradient(farthest-side circle, rgba(145,154,162,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#CE416B' : "radial-gradient(farthest-side circle, rgba(206,65,107,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#89AAE3' : "radial-gradient(farthest-side circle, rgba(137,170,227,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#C699E5' : "radial-gradient(farthest-side circle, rgba(198,153,229,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#DB9E6E' : "radial-gradient(farthest-side circle, rgba(219,158,110,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#C5B78C' : "radial-gradient(farthest-side circle, rgba(197,183,140,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#95BD43' : "radial-gradient(farthest-side circle, rgba(149,189,67,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#5269AD' : "radial-gradient(farthest-side circle, rgba(82,105,173,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#5A8EA2' : "radial-gradient(farthest-side circle, rgba(90,142,162,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#FF9D55': "radial-gradient(farthest-side circle, rgba(255,157,85,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#71B1FF': "radial-gradient(farthest-side circle, rgba(113,177,255,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#9CDB8D' : "radial-gradient(circle, rgba(156,219,141,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#F4D23C' : "radial-gradient(farthest-side circle, rgba(244,210,60,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#D76088': "radial-gradient(farthest-side circle, rgba(215,96,136,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#73CEC0': "radial-gradient(farthest-side circle, rgba(115,206,192,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#0B6DC3': "radial-gradient(farthest-side circle, rgba(11,109,195,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#7B6C8F': "radial-gradient(farthest-side circle, rgba(123,108,143,1) 25%, rgba(255,255,255,1) 95%)",
        'radial-#FFA3E5': "radial-gradient(farthest-side circle, rgba(255,163,229,1) 25%, rgba(255,255,255,1) 95%)",

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
  safelist: [
    {
      pattern: /bg-radial-(#919AA2|#CE416B|#89AAE3|#C699E5|#DB9E6E|#C5B78C|#95BD43|#5269AD|#5A8EA2|#FF9D55|#71B1FF|#9CDB8D|#F4D23C|#D76088|#73CEC0|#0B6DC3|#7B6C8F|#FFA3E5)/
    }
  ],
}
