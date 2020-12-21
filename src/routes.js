const { Router } = require('express')
const routes = Router()

const PensadorController = require('./app/controllers/PensadorController')

routes.get('/quotes', PensadorController.index)
routes.get('/quotes/random', PensadorController.random)

module.exports = routes
