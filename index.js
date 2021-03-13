const express = require('express')
const PORT = process.env.PORT || 5000

const viewLog = []

express()
  .get('/ping', (req, res) => {
    viewLog.push(req.connection.remoteAddress)
    res.send(JSON.stringify(viewLog))
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
