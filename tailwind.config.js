/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-red': '#FF5555', // Correcting the color definition
      },
      fontFamily: {
        clash: ['"Clash Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
