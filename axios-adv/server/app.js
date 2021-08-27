const express = require('express')

const app = express()

app.use(require('cors')())

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send({ data: 'hello world' })
  }, 3000);
})

app.listen(3000)

