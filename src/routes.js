const express = require('express');
const routes = express.Router();

const TeamController = require('./controllers/TeamController');
const PlayerController = require('./controllers/PlayerController');

routes.get('/teams', TeamController.index);
routes.get('/teams/:id', TeamController.details);
routes.get('/teams/:id/players', TeamController.getPlayers);
routes.put('/teams/:id', TeamController.update);
routes.delete('/teams/:id', TeamController.delete);
routes.post('/teams', TeamController.create);

routes.get('/players', PlayerController.index);
routes.get('/players/:id', PlayerController.details);
routes.put('/players/:id', PlayerController.update);
routes.delete('/players/:id', PlayerController.delete);
routes.post('/players', PlayerController.create);

module.exports = routes;