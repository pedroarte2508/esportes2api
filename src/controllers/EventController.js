const mongoose = require('mongoose')

const Event = mongoose.model('Event')

module.exports = {
  async index (req, res) {
    const { page = 1 } = req.query
    const events = await Event.paginate({}, { page, limit: 10 })
    return res.json(events)
  },

  async create (req, res) {
    const event = await Event.create(req.body)
    return res.json(event)
  },

  async details (req, res) {
    const team = await Team.findById(req.params.id)
    return res.json(team)
  },

  async update (req, res) {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(event)
  },

  async delete (req, res) {
    await Event.findOneAndRemove(req.params.id)
    return res.send()
  }
}
