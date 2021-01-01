const { Random } = require('random-js')
const Pixabay = require('../../services/PixabayAPI')

class PixabayAPI {
  async index (_req, res) {
    const images = await Pixabay.parseImages()
    
    return res.json({ data: images })
  }

  async random (_req, res) {
    const images = await Pixabay.parseImages()
    const randInt = new Random().integer(0, images.length)
    const randomImage = images[randInt]

    return res.json({ data: randomImage })
  }
}

module.exports = new PixabayAPI
