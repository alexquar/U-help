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
      primary: '#10abfc',
      secondary: '#ECFFF8',
      accent: '#fd4b68',
      },
    },
  },
  plugins: [],
};
