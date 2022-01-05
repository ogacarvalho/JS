//Importações
const express = require('express');                                          //Importando Servidor Express
const routes = express.Router();                                             //Importando e Acionando Recurso Gerenciador de Rotas do Express
const homeController = require('./src/controllers/homeController');          //Importação Direta dos controladores da rota Home.

//Exportando
module.exports = routes;                                                     //Exportando Gerenciador de Rotas (server.js usará)

//Rota: Home  !Podemos incluir Middlewares entre os parâmetros.
routes.get('/', homeController.paginaInicial);                               //Conectando requisições do tipo GET para a Rota '/' com o Controlador "Pagina Inicial"
routes.post('/', homeController.trataPost);                                  //Concetando requisições do tipo POST para a Rota '/' com o Controlador "TrataPost"