const tailwind = require('tailwindcss')

module.exports = {
  plugins: {
    plugins: [tailwind('./tailwind.config.js')],
  },
}
