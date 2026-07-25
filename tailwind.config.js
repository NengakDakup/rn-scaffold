const { colors } = require('./src/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: colors.background,
        surface: {
          DEFAULT: colors.surface,
          border: colors.surfaceBorder,
        },
        brand: {
          DEFAULT: colors.brand.primary,
          hover: colors.brand.primaryHover,
          accent: colors.brand.accent,
        },
        'text-muted': colors.text.muted,
      },
    },
  },
  plugins: [],
};
