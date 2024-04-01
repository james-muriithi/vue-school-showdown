/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
    "./layouts/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#212435",
        primary: "#0BD88F",
        secondary: "#2B2F44",
      },
      fontFamily: {
        sans: [
          'Rubik',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
