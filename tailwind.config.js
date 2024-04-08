/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
      basic : '#031927',
      secondary: '#10abfc',
      primary: '#83efdb',
      accent: '#fd4b68',
      },
    },
  },
  plugins: [],
};
