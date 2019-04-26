const mongoose = require('mongoose');

const Player = mongoose.model('Player');

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query;
        const players = await Player.paginate({}, { page, limit: 10 });
        return res.json(players);
    },

    async create(req, res) {
        const player = await Player.create(req.body);
        return res.json(player);
    },

    async details(req, res) {
        const team = await Team.findById(req.params.id);
        return res.json(team);
    },

    async update(req, res) {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(team);
    },

    async delete(req, res) {
        await Team.findOneAndRemove(req.params.id);
        return res.send();
    }

}