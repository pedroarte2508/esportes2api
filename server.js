const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// iniciando o app
const app = express()
app.use(cors())
app.use(express.json())

// iniciando o banco de dados
mongoose.connect(
  'mongodb+srv://master:1234@cluster0-cygis.mongodb.net/esportesdev?retryWrites=true',
  { useNewUrlParser: true }
)

requireDir('./src/models')

// rotas
app.use('/api', require('./src/routes'))

app.listen(3333)
