const Pixabay = require('../../services/PixabayAPI')

class Pensador {
  async index (_req, res) {
    const images = await Pixabay.parseImages()
    
    return res.json({ media: images })
  }

  async random (_req, res) {
    const images = await Pixabay.parseImages()
    const randomize = Math.floor(Math.random() * images.length)
    const randomImage = images[randomize]

    return res.json({img: randomImage})
}}

module.exports = new Pensador
