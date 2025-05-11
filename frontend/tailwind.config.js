/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        visby: ['Visby', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
