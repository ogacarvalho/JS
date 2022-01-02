
const express = require('express');                                 //Importando o servidor.
const routes = express.Router();                                    //Carregando o separador de rotas.
const homeController = require('./src/controllers/homeController');     //Importação do módulo que tratará das requisições e responses da rota "home"
const contatoController = require('./src/controllers/contatoController');
module.exports = routes;        //Todas as rotas serão enviadas para routes.



//Middleware são funções que entram como parâmetros após as rotas, constituídos da opção next() que permite a continuação.
function middleware(req,res, next){
    console.log('Sou middleware')
};

//Home
routes.get('/', middleware,homeController.paginaInicial);
routes.post('/', homeController.trataPost);
//        (rotas, middlewares, response   )

//Contato
routes.get('/contato', contatoController.paginaInicial);