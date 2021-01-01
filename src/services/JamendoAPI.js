const axios = require('axios')
require('dotenv').config()

class JamendoAPI {
  constructor () {
    this.client_id = process.env.JAMENDO_CLIENT_ID
  }

  async connect () {
    const playlists = [
      '500405631',
      '500361729',
      '500342341',
      '500307898',
      '89178583',
      '89151915',
      '500148373',
      '500157769',
      '500581032'
    ]
    const randomPlaylist = Math.floor(Math.random() * playlists.length)
    const api = await axios({
      url: 'https://api.jamendo.com/v3.0/playlists/tracks',
      params: {
        client_id: this.client_id,
        id: playlists[randomPlaylist] 
      }
    })

    return api
  }

  async parseTracks () {
    const response = await this.connect() 
    const { tracks } = response.data.results[0]

    return tracks
  }
}

module.exports = JamendoAPI
