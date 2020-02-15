const isProduction = 'production' === process.env.NODE_ENV
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/result': { page: '/result' },
    }
  }
})
