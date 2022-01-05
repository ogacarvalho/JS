/* Conectando com a BD.

Senhas:
1.  Não use sua senha pessoal, nem a exponha publicamente.
1.b Por essa razão, vamos instalar um pacote que cuidará dos nossos dados. 'dotenv' 
1.c Instalação do pacote de gerenciamento de dados:   npm i dotenv (dependências do projeto)
2.  Após instalado, criará variáveis de ambiente, das quais vamos remover do repositório.

Modelagem:
1.  Vamos instalar um pacote que permite realizar a modelagem e a conexão do BD. 'mongoose'
1.b Instalando mongoose: npm i mongoose (dependências do projeto)

Conectando a base de dados:
1.  Em importações, logo abaixo do app = express(), colocaremos: const mongoose = require('mongoose');
2.  mongoose.connect(dados da nossa conexão); (Promise)

Organizando a conexão da base de dados:
!!! É muito importante organizar a ordem das conexões, primeiro queremos que conecte na base de dados, e depois comece a ouvir a porta.
1.  Para isso usando a promises, vamos pedir que o (app) emita um sinal após conectar com a base de dados.
2.  Criaremos uma relação com este sinal que após emitido irá acionar o escutador de portas. (app.on('sinal', () => {escutador}));
3.  Abstração: Base de dados conectada? Sim? Emita um sinal. Sinal emitido? No sinal, acione a escuta das requisições.
!!! Isso irá evitar que haja um gap de conexão entre a base de dados e o servidor evitando falhas de requisições, portanto primeiro se conecta a base de dados, depois o servidor.

Protegendo dados sigilosos com dotenv (boa prática de programação)
1. No começo das importações, coloque: const datamanager = require('dotenv').config();
2. Crie o arquivo: '.env'
3. Coloque os dados que gostaria de proteger no arquivo. (chave=valor).
4. Agora aqui, poderemos substituir a nossa constante com o url de conexão.
5. Em mongoose.connect(urlDB) substitua por ...(process.env.CHAVE)
6. Com o gitignore !não permita! que o arquivo .env seja enviado para o respositório.


Criando um Model
1.  Em (src) criaremos uma nova pasta chamada (models).
1.1 Na pasta crie o arquivo HomeModel.js (Letra maiúscula pois geralmente o model é uma classe)

*/






//Importações
const datamanager = require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.URLDB)
.then(() => {
    console.log('Base de dados conectada.')
    app.emit('pronto');
}).catch(e => console.log(e));
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');


//Conexões (A posição é extremamente importante)                               //Posicionamento.
app.use( express.urlencoded( {extended: true} ) );                             // 1 (Acionando decodificação dos dados)
app.use( express.static(path.resolve(__dirname, 'public')));                   // 2 (Acionando o acesso ao HTML e CSS)

app.set('views', path.resolve(__dirname, 'src', 'views'));                     // 3 (Configurando renderizador)
app.set('view engine', 'ejs');                                                 // 4 (Configurando engine do renderizador)

app.use(middlewareGlobal);                                                     // 5 (Acionando Interceptador)
app.use(routes);                                                               // 6 (Acionando rotas)


//O acionamento do servidor dependerá da conexão com a base de dados.
app.on('pronto', () => {
    app.listen(3000, () => { console.log('Acessar http://localhost:3000') });
});
