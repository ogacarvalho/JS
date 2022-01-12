/* Rotas
A função principal deste módulo é conectar cada rota com seu módulo controlador. 


1. Importaremos o servidor.
2. Carregaremos o método Rotas do servidor.
3. Importaremos os controladores responsáveis por cada rota.
4. Exportaremos este ambiente para que o servidor possa se conectar conosco.


!Toda vez em que a rota for acionada ela enviará automaticamente os dados para o objeto específico do módulo responsável.
*/

const express = require('express');                                 //Importando o servidor.
const routes = express.Router();                                    //Carregando o separador de rotas.
const homeController = require('./src/controllers/homeController');     //Importação do módulo que tratará das requisições e responses da rota "home"
const contatoController = require('./src/controllers/contatoController');
module.exports = routes;                                            //Todas as rotas serão enviadas para routes.


//Home
routes.get('/', homeController.paginaInicial);
routes.post('/', homeController.trataPost);


//Contato
routes.get('/contato', contatoController.paginaInicial);