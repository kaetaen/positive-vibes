const { Random } = require('random-js')
const PensadorScraper = require('../../services/PensadorScraper')

class Pensador {
  async index (_req, res) {
    const quotes = await PensadorScraper.getQuotes()
    
    return res.json({ data: quotes })
  }

  async random (_req, res) {
    const quotes = await PensadorScraper.getQuotes()
    const randInt = new Random().integer(0, quotes.length)
    const randomQuote = quotes[randInt]

    return res.json({ data: randomQuote })  
  }
}

module.exports = new Pensador
