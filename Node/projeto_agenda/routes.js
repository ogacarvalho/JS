const express = require('express');
const routes = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

//middlewares pré-destinados.
const { loginRequired } = require('./src/middlewares/middleware'); //Middleware que checa se o usuário já fez login.

module.exports = routes;

//Rotas - Home
routes.get('/', homeController.index);

//Rotas - Login
routes.get('/login/index', loginController.index);
routes.post('/login/register', loginController.register); //Essa rota está sendo usada pelo form. de registro em views.
routes.post('/login/login', loginController.login); 
routes.get('/login/logout', loginController.logout); 

//Rotas - Contato
routes.get('/contato/index', loginRequired, contatoController.index); //loginRequired -> Middleware importado.
routes.post('/contato/register',loginRequired, contatoController.register);
routes.get('/contato/index/:id',loginRequired, contatoController.editIndex);         //:id (parâmetro de url)
routes.post('/contato/edit/:id',loginRequired, contatoController.edit);
routes.get('/contato/delete/:id',loginRequired, contatoController.delete); 