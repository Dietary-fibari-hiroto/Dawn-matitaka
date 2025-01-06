/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      writingMode: {
        'horizontal-tb': 'horizontal-tb',
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },
    },
  },
  plugins: [
    require('tailwindcss-logical'),
  ],
}

