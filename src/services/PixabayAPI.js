const axios = require('axios')
require('dotenv').config()

class Pixabay {
  constructor () {
    this.key = process.env.PIXABAY_API_KEY 
  }

  async connect () {
    const api = await axios({
      url: 'https://www.pixabay.com/api/',
      params: {
        key: this.key,
        q: 'nature',
        orientation: 'vertical',
        category: 'nature',
        editors_choice: true,
        per_page: 200
        
      }
    })

    return api
  }

  async parseImages () {
    const images = await this.connect()
    const { hits } = images.data
    const imageUrls = hits.map((photo, _index) => photo.webformatURL)

    return imageUrls
  }
}

module.exports = new Pixabay()
