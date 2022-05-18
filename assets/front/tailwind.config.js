const Encore = require('@symfony/webpack-encore');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  purge: Encore.isProduction(),
}
