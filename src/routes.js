const express = require('express')
const routes = express.Router()

const TeamController = require('./controllers/TeamController')
const PlayerController = require('./controllers/PlayerController')
const EventController = require('./controllers/EventController')
const UserController = require('./controllers/UserController')

routes.get('/teams', TeamController.index)
routes.get('/teams/:id', TeamController.details)
routes.get('/teams/:id/players', TeamController.getPlayers)
routes.put('/teams/:id', TeamController.update)
routes.delete('/teams/:id', TeamController.delete)
routes.post('/teams', TeamController.create)

routes.get('/players', PlayerController.index)
routes.get('/players/:id', PlayerController.details)
routes.put('/players/:id', PlayerController.update)
routes.delete('/players/:id', PlayerController.delete)
routes.post('/players', PlayerController.create)

routes.get('/teams/:id/players', PlayerController.byTeam)

routes.get('/events', EventController.index)
routes.get('/events/:id', EventController.details)
routes.put('/events/:id', EventController.update)
routes.delete('/events/:id', EventController.delete)
routes.post('/events', EventController.create)

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.details)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)
routes.post('/users', UserController.create)
routes.post('/login', UserController.login)

module.exports = routes
