const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
const constants = require('./src/config/Constants')

// iniciando o app
const app = express()
app.use(cors())
app.use(express.json())

// iniciando o banco de dados
mongoose.connect(constants.connectionstring_dev, { useNewUrlParser: true })

requireDir('./src/models')

// rotas
app.use('/api', require('./src/routes'))

app.listen(process.env.PORT || 3333)
