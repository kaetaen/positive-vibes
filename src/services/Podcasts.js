const rssParser = require('rss-parser')

class Podcasts {
  async connect () {
    const rss = await new rssParser().parseURL('https://anchor.fm/s/16afada0/podcast/rss')
    return rss.items
  }

  async parseEpisodes () {
    const episodes = await this.connect()
    const episodesDetails = episodes.map((episode, _index) => {
      const {
        title,
        enclosure: { url }
      } = episode

      return {
        title,
        url
      }
    })

    return episodesDetails
  }
}

module.exports = Podcasts
