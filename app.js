const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello jayneel  World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))