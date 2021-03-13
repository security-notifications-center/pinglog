const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const viewLog = []

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/ping', (req, res) => {
    viewLog.push(JSON.stringify(req))
    res.end(viewLog)
  })
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
