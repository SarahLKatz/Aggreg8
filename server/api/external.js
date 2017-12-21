const router = require('express').Router()
const NYT_API =  process.env.NYT_API
const axios = require('axios')
const moment = require('moment')
module.exports = router

router.get('/nyt', (req,res,next) => {
  const stories = [];
  axios.get(`http://api.nytimes.com/svc/news/v3/content/all/all/24.json?api-key=${NYT_API}`)
  .then(res => res.data.results)
  .then(results => {
    results.forEach(result => {
      stories.push({
        title: result.title,
        byline: result.byline,
        abstract: result.abstract.slice(0,280),
        url: result.url,
        date: moment(result.created_date).format('MM/DD/YYYY, h:mmA')

      })
    })
  })
  .then(() => res.json(stories))
  .catch(err => console.error(err))
})