/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: '#F4801F', dark: '#D96B0B', light: '#FFB066' },
        cream: '#FFF9EF',
        maroon: '#6E1E1E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-deva)', 'sans-serif'],
        deva: ['var(--font-deva)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(110, 30, 30, 0.08)',
        lift: '0 12px 32px rgba(110, 30, 30, 0.16)',
      },
    },
  },
  plugins: [],
};
