/* Express Servidor Web (Microframework)
O express ira nos ajudar a trabalhar com as rotas da nossa aplicação.

Instalação
1.  Após iniciar o npm, para instalar usamos:        npm i express
2.  Importamos o express para o nosso projeto:       const express = require('express');
3.  Executamos o express com a constante app:        const app     = express();               !convenção

Comandos
1. Inicie pelo terminal (recomendado):      node server.js                  !Terminar o processo, ctrl + c
2. Parar o servidor caso inicie ele por outro local:        ctrl + alt + m || ctrl + shift + p > stop code run

Rotas                      
São as solicitações de endereço enviadas pelo navegador (usuário), e para isso precisamos solicitar que o nosso servidor, fique ouvindo a porta desejada, aguardando uma requisição.

Portas
Portas são processos, portanto certifique-se de usar uma porta que não seja comumente utilizada pelo sistema.(3000, 3333 etc.,)
     
Exemplo:                      ROTA (/) <- Solicitação de acesso.
https://www.meusite.com.br/<- GET -> entregue a página.

Operações CRUD
São operações comumente realizadas na internet:      Create, Read, Update, Delete
Portanto, nosso servidor deve ser capaz de fazer:    POST    GET   PUT     Delete

*/

const express = require('express');
const app = express();

// express().get(rota, (requisição, resposta) => {});
app.get('/', (req, res) => {
    res.send('Hello <b>World<b>'); //Poderiamos enviar um HTML aqui se quiséssemos. 
});

//Outras rotas (http://localhost:3000/contato)
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco!');
});


//Exemplo simples de um Formulário
app.get('/form', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button> Enviar </button>
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


