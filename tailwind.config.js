/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#51b5b5",
        secondaryColor: "#e46d47",
        ThirthColor: "#3e5569"
      }
    },
  },
  plugins: [require("daisyui")],
}

