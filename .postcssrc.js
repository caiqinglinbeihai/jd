// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
        utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
        viewportWidth: 640,
        viewportHeight: 1200,
        unitPrecision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['.ignore', '.hairlines'],
        minPixelValue: 1,
        mediaQuery: false,
    },
    // to edit target browsers: use "browserslist" field in package.json

    "postcss-viewport-units": {},
    "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false,
    }
  },
}
