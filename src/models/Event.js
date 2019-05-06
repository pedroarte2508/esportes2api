const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const constants = require('../config/Constants')

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    default: constants.event_picture
  },
  beginDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  login: {
    type: String,
    default: 'admin'
  }
})

EventSchema.plugin(mongoosePaginate)

mongoose.model('Event', EventSchema)
