const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const constants = require('../config/Constants');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: constants.base_picture
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

TeamSchema.plugin(mongoosePaginate);

mongoose.model('Team', TeamSchema);