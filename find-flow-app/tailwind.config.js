/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(14, 1, 63)',
        secondary: {
          DEFAULT: 'rgb(238, 26, 152)',
          100: 'rgb(244, 185, 188)',
          200: 'rgb(141, 24, 143)',
          300: 'rgb(135, 0, 117)',
          400: 'rgb(34, 0, 72)',
        },
      },
      fontFamily: {
        sExtraBold: ['Sono-ExtraBold', 'sans-serif'],
        sBold: ['Sono-Bold', 'sans-serif'],
        sSemiBold: ['Sono-SemiBold', 'sans-serif'],
        sRegular: ['Sono-Regular', 'sans-serif'],
        sMedium: ['Sono-Medium', 'sans-serif'],
        sLight: ['Sono-Light', 'sans-serif'],
        sExtraLight: ['Sono-ExtraLight', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
