/* 
Nodemon (Express)
O nodemom é um recurso que re-carrega o servidor toda vez em que ele for atualizado, tipo (live server).

Instalação
1.  nodemon é um recurso de desenvolvedor portanto o instalaremos como tal:    npm i nodemon --savedev
2.  Executar o nodemon na mão:          npx nodemon server.js
2.1 Executar após alterar os script:    npm start
*/

const express = require('express');
const app = express();

// express().get(rota, (requisição, resposta) => {});
app.get('/', (req, res) => {
    res.send('Hello <b>World<b>'); //Poderiamos enviar um HTML aqui se quiséssemos. 
});

//Exemplo simples de um Formulário
app.get('/form', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" placeholder = "     digite aqui seu nome" name="nome">
    <button> Enviar Formulário </button>
    </form>`);
});

//Embora a rota seja a mesma, os métodos são diferentes, portanto cada método irá mostrar uma página de acordo com a sua proposta.
app.post('/', (req, res) => {
 res.send(`Obrigado, recebi o seu formulário!`)
});

//Servidor, escute por gentileza essa porta.
let porta = 3000;
app.listen(porta, () => {
    console.log('Acessar http://localhost:3000')                   //Cria um link para a página armazenada na porta 3000.
    console.log(`Servidor sendo executado na porta ${porta}`)});


