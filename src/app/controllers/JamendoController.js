const { Random } = require('random-js')
const JamendoAPI = require('../../services/JamendoAPI')

class JamendoController {
  async index (_req, res) {
    const tracks = await new JamendoAPI().parseTracks()
  
    res.status(200).json({ data: tracks }) 
  }

  async random (_req, res) {
    const tracks = await new JamendoAPI().parseTracks()
    const randInt = new Random().integer(0, tracks.length)
    const selectedTrack = tracks[randInt]

    return res.status(200).json({ data: selectedTrack })
  }
}

module.exports = new JamendoController()
