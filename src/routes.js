const { Router } = require('express')
const routes = Router()

const { resolve } = require('path')

const JamendoController = require('./app/controllers/JamendoController')
const PensadorController = require('./app/controllers/PensadorController')
const PixabayController = require('./app/controllers/PixabayController')
const PodcastController = require('./app/controllers/PodcastsController')

routes.get('/', (_req, res) => res.sendFile('index.html'))

routes.get('/quotes', PensadorController.index)
routes.get('/quotes/random', PensadorController.random)

routes.get('/songs', JamendoController.index)
routes.get('/songs/random', JamendoController.random)

routes.get('/images', PixabayController.index)
routes.get('/images/random', PixabayController.random)

routes.get('/podcasts', PodcastController.index)
routes.get('/podcasts/random', PodcastController.random)

module.exports = routes
