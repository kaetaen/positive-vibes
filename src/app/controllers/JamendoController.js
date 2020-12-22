const JamendoAPI = require('../../services/JamendoAPI')


class JamendoController {
  async index (_req, res) {
    const songs = await JamendoAPI
    
    const songList = songs.map((song, _index) => {
      const { name, artist_name } = song
      const songInfo = {name, artist_name} 

      return songInfo
    })

    res.status(200).json({ songs : songList })
  }

  async random (_req, res) {
    const songs = await JamendoAPI
    
    const linksToDownload = songs.map((link, _index) => {
      return link.audiodownload
    })

    const randomize = Math.floor(Math.random() * songs.length)
    const selectedSong = linksToDownload[randomize]

    return res.redirect(selectedSong)  
  }
}

module.exports = new JamendoController()
