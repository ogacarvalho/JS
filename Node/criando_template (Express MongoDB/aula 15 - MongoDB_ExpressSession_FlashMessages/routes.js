//Importando
const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//Exportando
module.exports = routes;

//Rota: Home
routes.get('/', homeController.paginaInicial);
routes.post('/', homeController.trataPost);

//Rota: Contato
routes.get('/contato', contatoController.paginaInicial);