const express = require('express')
var cors = require('cors')

const PORT = process.env.PORT || 5000

const viewLog = []

express()
  .use(cors())
  .get('/ping', (req, res) => {
    const ip = req.headers['x-forwarded-for']
    if (!viewLog.includes(ip)) {
      viewLog.push(ip)
    }
    res.send(JSON.stringify(viewLog))
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
