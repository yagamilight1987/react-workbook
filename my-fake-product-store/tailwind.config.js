/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JavaScript and TypeScript files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary), 0.95)',
        secondary: 'rgba(var(--color-white), 0.07)',
        header: 'rgba(var(--color-primary), 1)',
        white: 'rgba(var(--color-white), 1)',
      },
    },
  },
  plugins: [],
};
