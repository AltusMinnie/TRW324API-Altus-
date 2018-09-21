const path = require('path')
const port = 5498
const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express() 

app.use(express.static('views'))
app.use(bodyParser.json())
app.post('/createUser', (req, res) => {
  store
    .createUser({
      Name: req.body.Name,
      Password: req.body.Password
    })
    .then(() => res.sendStatus(200))
})

app.listen(port, (err) => {  
    if (err) {
        return console.log('something bad happened', err)
    }
    
    console.log(`server is listening on ${port}`)
})