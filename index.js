const path = require('path')
const express = require('express')

const app = express()

app.use('/', express.static(path.join(__dirname, 'create-something-greater')))

app.listen(2111)
console.log('Great listening on http://localhost:2111')