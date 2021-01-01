const Podcasts = require('../../services/Podcasts')
const { Random } = require('random-js')

class PodcastController {
  async index (_req, res) {
    const episodes = await new Podcasts().parseEpisodes()
    
    return res.status(200).json({ data: episodes })
  }

  async random (_req, res) {
    const episodes = await new Podcasts().parseEpisodes()
    const randInt = new Random().integer(0, episodes.length)
    const selectedEpisode = episodes[randInt]

    return res.status(200).json({ data: selectedEpisode })
  }
}

module.exports = new PodcastController()
