const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')
const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/creat-pass', (req, res) => res.render("index", {page: 'creat-pass'}))

route.post('/creat-room', RoomController.creat)
route.get('/room/:room', RoomController.open)




//formato que o formulario de dentro da modal tem que passar para index
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/question/creat/:room', QuestionController.creat)



module.exports = route
