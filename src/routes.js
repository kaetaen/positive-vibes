const { Router } = require('express')
const routes = Router()

const JamendoController = require('./app/controllers/JamendoController')
const PensadorController = require('./app/controllers/PensadorController')
const PixabayController = require('./app/controllers/PixabayController')

routes.get('/quotes', PensadorController.index)
routes.get('/quotes/random', PensadorController.random)

routes.get('/songs', JamendoController.index)
routes.get('/songs/random', JamendoController.random)

routes.get('/images', PixabayController.index)
routes.get('/images/random', PixabayController.random)

module.exports = routes
