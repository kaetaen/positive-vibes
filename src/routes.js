const { Router } = require('express')
const routes = Router()

const QuoteController = require('./app/controllers/QuoteController')

routes.get('/quotes', QuoteController.index)
routes.get('/quotes/random', QuoteController.random)

module.exports = routes
