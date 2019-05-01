const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const constants = require('../config/Constants')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    default: constants.base_profile
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.plugin(mongoosePaginate)

mongoose.model('User', UserSchema)
