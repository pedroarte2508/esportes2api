const mongoose = require('mongoose')

const User = mongoose.model('User')

module.exports = {
  async index (req, res) {
    const { page = 1 } = req.query
    const users = await User.paginate({}, { page, limit: 10 })
    return res.json(users)
  },

  async create (req, res) {
    const user = await User.create(req.body)
    return res.json(user)
  },

  async details (req, res) {
    const user = await User.findById(req.params.id)
    return res.json(user)
  },

  async login (req, res) {
    const user = await User.find(req.body)
    return res.json(user)
  },

  async update (req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(user)
  },

  async delete (req, res) {
    await User.findOneAndRemove(req.params.id)
    return res.send()
  }
}
