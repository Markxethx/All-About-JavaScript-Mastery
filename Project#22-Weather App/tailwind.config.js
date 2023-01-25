/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "layoutCol" : "repeat(auto-fit, minmax(300px, 1fr) )"
      },
      gridAutoRows: {
        "layoutRow" : "450px"
      },
      lineHeight: {
        "customLineHeight": "12px"
      }
    },
  },
  plugins: [],
}
