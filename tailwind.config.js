module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl" : "2000px",
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
  ],
}
