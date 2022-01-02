/* Middlewares! (A nível de rotas específicas)
São interceptadores, que vão nos parâmetros das funções após as rotas, podendo modificar adicionar ou interromper requisições. Porém se a função tiver return, então acaba ali.

Com eles podemos interceptar e modificar todos os dados antes, durante ou depois da sessão do cliente.
São com os middlewares que vamos interceptar a conexão, criando "sessões" monitoradas, nos quais então estaremos permitidos a enviar os dados dos usuários para uma base de dados por exemplo. 
exemplo: req.session = { nomeCliente: 'Gabriel, sobrenome: 'Carvalho'};

Função
function middleware(req,res, next){
    qualquercoisa
    next();
}

1* Maneira de usar middleware.
routes.get('/', middleware, móduloderesposta, FuncAnonimaTbmPode);


*/


const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
module.exports = routes;

//Home
routes.get('/', homeController.paginaInicial);
routes.post('/', homeController.trataPost);

//Contato
routes.get('/contato', contatoController.paginaInicial);