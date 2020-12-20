const PensadorScraper = require('../../services/scraper')

class Quote {

  async index (_req, res) {
    const quotes = await PensadorScraper.getQuotes()
    
    return res.json({msg: quotes})
  }

  async random (_req, res) {
    const quotes = await PensadorScraper.getQuotes()
    const randomize = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomize]

    return res.json({ msg: randomQuote })  
  }
}

module.exports = new Quote
