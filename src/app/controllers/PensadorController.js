const PensadorScraper = require('../../services/PensadorScraper')

class Pensador {
  async index (_req, res) {
    const quotes = await PensadorScraper.getQuotes()
    
    return res.json({ data: quotes })
  }

  async random (_req, res) {
    const quotes = await PensadorScraper.getQuotes()
    const randomize = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomize]

    return res.json({ data: randomQuote })  
  }
}

module.exports = new Pensador
