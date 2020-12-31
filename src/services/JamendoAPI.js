const axios = require('axios')
require('dotenv').config()

class JamendoAPI {
  constructor () {
    this.client_id = process.env.JAMENDO_CLIENT_ID
  }

  async connect () {
    const playlistID = this.setPlaylistID()
    const api = await axios({
      url: 'https://api.jamendo.com/v3.0/playlists/tracks',
      params: {
        client_id: this.client_id,
        id: playlistID
      }
    })

    return api
  }

  setPlaylistID() {
    const playlists = [
      '500405631',
      '500361729',
      '500342341',
      '500307898',
      '89178583',
      '89151915',
      '500148373',
      '500157769'
    ]
    const randInt = Math.floor(Math.random() * playlists.length)

    return playlists[randInt]
  }

  async parseTracks () {
    const response = await this.connect()
    const { tracks } = response.data.results[0]
    
    const parsedTracks = tracks.map((track, _index) => {     
      const {
        name,
        artist_name,
        image,
        audiodownload
      } = track

      return {
        name,
        artist_name,
        image,
        audiodownload
      }
    })

    return parsedTracks
  }
}

module.exports = new JamendoAPI().parseTracks()
