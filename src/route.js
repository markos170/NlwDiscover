const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/creat-pass', (req, res) => res.render("creat-pass"))
//formato que o formulario de dentro da modal 
//route.get('/room/:room/:question/:action', (req, res) => res.render("exemplo", {req}))

module.exports = route
