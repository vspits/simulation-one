const express = require('express')
require('dotenv').config()
const massive = require('massive')
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express()
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
    .then(db => app.set('db', db))
    .catch(err => console.log(err))

app.get(`/api`, controller.get)
app.post(`/api`, controller.post)
app.put(`/api`, controller.update)
app.delete(`/api`, controller.delete)

const port = process.env.PORT

app.listen(port, () => console.log(`Port ${port} is werkin real hard`))
