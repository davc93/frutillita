/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#21401C',
        primaryDark:'#173313',
        primaryLight:'#52844A',
        secondary:'#818D92',
        secondaryLight:'#a3b9c2',
        secondaryDark:'#576469',
        tertiary:'#E44F17',
        tertiaryLight:'#d5a667',
        tertiaryDark:'#ad3c13',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

