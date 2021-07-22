const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')
const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))

route.get('/room/:room', RoomController.open)

route.get('/creat-pass', (req, res) => res.render("index", {page: 'creat-pass'}))

//formato que o formulario de dentro da modal tem que passar para index
route.post('/question/:room/:question/:action', QuestionController.index)

route.post('/creat-room', RoomController.creat)

module.exports = route
