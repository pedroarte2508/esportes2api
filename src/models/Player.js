const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const constants = require('../config/Constants');
const Team = require('./Team');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rg: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        default: constants.base_profile
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PlayerSchema.plugin(mongoosePaginate);

mongoose.model('Player', PlayerSchema);