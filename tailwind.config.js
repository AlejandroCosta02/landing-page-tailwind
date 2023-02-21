/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'alert': 'wiggle 3s ease-in-out 1',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(20em, 0)' },
          '50%': { transform: 'translate(0)' },
          '100%': { hidden: 'true' },
        }
        
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
}
