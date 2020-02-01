const isProduction = 'production' === process.env.NODE_ENV
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  assetPrefix: isProduction ? '/simulateur' : '',
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/form': { page: '/form' },
    }
  }
})
