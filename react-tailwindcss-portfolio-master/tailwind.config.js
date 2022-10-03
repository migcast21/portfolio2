module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: {
    enabled: true,
    content: [
      './**/*.html'
    ]
  },
  theme: {
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif']
      },
  },
  variants: {},
  plugins: [],
}
