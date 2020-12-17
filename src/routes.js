const { Router } = require('express')
const routes = Router()

const QuoteController = require('./app/controllers/QuoteController')

routes.get('/quote', QuoteController.getQuote)

module.exports = routes
