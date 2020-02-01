var ghpages = require('gh-pages')

ghpages.publish('out', {
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/nosretraites/simulateur.git',
  silent: true
}, (err) => {
  console.error("Error")
  console.log(err)
})
