const mongoose = require('mongoose')

const Player = mongoose.model('Player')

module.exports = {
  async index (req, res) {
    const { page = 1 } = req.query
    const players = await Player.paginate({}, { page, limit: 10 })
    return res.json(players)
  },

  async create (req, res) {
    const player = await Player.create(req.body)
    return res.json(player)
  },

  async details (req, res) {
    const player = await Player.findById(req.params.id)
    return res.json(player)
  },

  async update (req, res) {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(player)
  },

  async delete (req, res) {
    await Player.findOneAndRemove(req.params.id)
    return res.send()
  },

  async byTeam (req, res) {
    const { page = 1 } = req.query
    const players = await Player.paginate(
      {
        teamId: req.params.id
      },
      { page, limit: 10 }
    )
    return res.json(players)
  }
}
