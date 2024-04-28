/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navText': '#C0B288',
        'nicknameColor': '#F0E6CE',
        'asideColor': '#A09B8C',
        'asideBg': '#010A13'
      },
    },
    fontFamily:{
      beaufortLolBold: ["Beaufort for LOL", "sans-serif"],
      spiegelRegular: ["Spiegel Regular", "sans-serif"],
      spiegelSemiBold: ["Spiegel SemiBold", "sans-serif"]
    },
  },
  plugins: [],
}

