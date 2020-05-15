const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Hello jayneel  World!'))
app.get('/aman', (req, res) => res.send('Hello aman  World!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
