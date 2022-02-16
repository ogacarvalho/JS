const express = require('express');                                                              //Importa o microframework (Express)
const routes = express.Router();                                                                 //Aciona o recurso de rotas do Express

const homeController = require('./src/controllers/homeController');                              //Importação do arquivo homeController
const loginController = require('./src/controllers/loginController');                            //Importação do arquivo loginController
const contatoController = require('./src/controllers/contatoController');                        //Importação do arquivo contatoController

const { loginRequired } = require('./src/middlewares/middleware');                               //Middleware que faz a requisição do login.

module.exports = routes;                                                                         //Exports do arquivo routes.js recebe "express.Router()"

//Rotas - Home
routes.get('/', homeController.index);                                                           //Controlador da Home recebe requisições da rota '/'

//Rotas - Login
routes.get('/login/index', loginController.index);                                               //Página de login (não requer login)
routes.post('/login/register', loginController.register);                                        //click "submit" -> controlador -> mtd. register.
routes.post('/login/login', loginController.login);                                              //click "login" -> controlador -> mtd. login
routes.get('/login/logout', loginController.logout);                                             //click "logout" -> controlador ->mtd.logout

//Rotas - Contato                                                                                //Para acessar as rotas abaixo o usuário deve estar logado.
routes.get('/contato/index', loginRequired, contatoController.index);                            //Registro de contato
routes.post('/contato/register',loginRequired, contatoController.register);                      //Botão "registrar contato"
routes.get('/contato/index/:id',loginRequired, contatoController.editIndex);                     //Editar contato                     !Url's com parâmetros 
routes.post('/contato/edit/:id',loginRequired, contatoController.edit);                          //Botão "editar contato"
routes.get('/contato/delete/:id',loginRequired, contatoController.delete);                       //Deletar usuário.