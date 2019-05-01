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
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: String,
    default: 'admin'
  }
})

EventSchema.plugin(mongoosePaginate)

mongoose.model('Event', EventSchema)
