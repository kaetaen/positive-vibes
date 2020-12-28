const express = require('express')
const routes = require('./routes')
const cors = require('cors')

class App {
  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(cors({ origin: '*' }))
    this.app.use(express.static(__dirname + '/static'))
  }

  routes () {
    this.app.use(routes)
  }
}

module.exports = new App().app
