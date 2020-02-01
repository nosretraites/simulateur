var ghpages = require('gh-pages')

ghpages.publish('out', {
  repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/nosretraites/simulateur.git',
//  silent: true
}, (err) => {
  console.error("Error")
  console.log(err)
})
