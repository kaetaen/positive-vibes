const { Router } = require('express')
const routes = Router()

const JamendoController = require('./app/controllers/JamendoController')
const PensadorController = require('./app/controllers/PensadorController')

routes.get('/quotes', PensadorController.index)
routes.get('/quotes/random', PensadorController.random)

routes.get('/songs', JamendoController.index)
routes.get('/songs/random', JamendoController.random)

module.exports = routes
