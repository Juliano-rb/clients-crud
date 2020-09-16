const express = require('express');
const ClientController = require('./controllers/ClientController.js');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.send(`<h1>Olá ( ͡° ͜ʖ ͡°)</h1>`);
});

routes.get('/client', ClientController.list);
routes.post('/client', ClientController.add);

module.exports = routes;
