const express = require('express');
const routes = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController.js');

module.exports = routes;

//Rotas - home  !Paginas iniciais '/index' podem ser omitidas.
routes.get('/', homeController.index);

//Rotas - login
routes.get('/login/index', loginController.index);
routes.post('/login/register', loginController.register); //Essa rota está sendo usada pelo form. de registro em views.
routes.post('/login/login', loginController.login); 
routes.get('/login/logout', loginController.logout); 