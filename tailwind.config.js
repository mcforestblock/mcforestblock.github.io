/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage:{
        'dark-forestblock': "url('./images/shaders/night.png')",
        'light-forestblock': "url('./images/shaders/dawn.png')",
      },
    },
  },
  plugins: [],
}
