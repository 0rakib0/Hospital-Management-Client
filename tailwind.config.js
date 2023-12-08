/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3CB371",
        secondaryColor: "#008761",
        ThirthColor: "#3e5569"
      }
    },
  },
  plugins: [require("daisyui")],
}

