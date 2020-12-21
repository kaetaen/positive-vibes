const axios = require('axios')
const cheerio = require('cheerio')

class PensadorScraper {
  constructor () {
    this.url = 'https://www.pensador.com/motivacional/'
  }

  async fetchData () {
    const result = await axios.get(this.url)
    return result.data
  }

  async scrapQuotes () {
    const content = await this.fetchData()
    const $ = cheerio.load(content)
    let phrases = []
    $('p.fr').each((_index, quote) => {
       const text = $(quote).text()
       phrases.push(text)
    })

    return phrases
  }

  async getQuotes () {
    const x = await this.scrapQuotes()
    return x
  }
}

module.exports = new PensadorScraper()
