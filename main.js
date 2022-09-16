const express = require('express')
const path = require('path')
const port=8080
const app = express()

app.get('/', function(req, res) {
    res.sendFile('public/main.html', {root: __dirname})
})

app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(port)