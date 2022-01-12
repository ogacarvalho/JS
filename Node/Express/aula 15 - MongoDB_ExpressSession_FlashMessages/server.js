/* Express Sessions
Instalações: npm i express-session connect-mongo connect-flash

Conectando:
1. Após conectar com a base de dados (abaixo de mongoose) digite: const session = require('express-session')
2. Conecte o recurso mongostore.
3. Conecte o recurso flash.
4. Configure o Express Session.


!Flash Messages: Recurso de mensagens temporárias de alerta, como "senha inválida e etc.,"
!Uma sessão normalmente é salva em memória do cliente, porém isso é ruim, pois a capacidade é pequena, e perderiamos dados toda vez que o servidor atualiza-se. Por conta disso, salvaremos a session na nossa base de dados.
!Precisamos salvar informações referentes ao navegador do nosso cliente. (Por comodidades, tipo "cookies") para salvar a senha do cliente e entrar automaticamente.
!Cookies, é um hash de dados referentes aos dados do cliente encriptado, receberemos este hash e o servidor irá checar, olha o hash é igual a este cliente aqui..
!As sessions serão salvas em uma nova tabela na base de dados!

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

const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');


//Conexões (A posição é extremamente importante)                               //Posicionamento.
app.use( express.urlencoded( {extended: true} ) );                             // 1 (Acionando decodificação dos dados)
app.use( express.static(path.resolve(__dirname, 'public')));                   // 2 (Acionando o acesso ao HTML e CSS)
//Configurando o Express Session
const sessionSettings = session({                                              // 3 (Configurando sessão do cliente)
    secret: 'RIWEYR384937URUA8743Q09RUITGFHSDJK a6()',                         //Pode ser o que quiser.
    store: MongoStore.create({ mongoUrl: process.env.URLDB }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,                                       //Duração da sessão (7 dias)
        httpOnly: true
    }
});
app.use(sessionSettings);                                                      // 3.a (Acionando o Sessions no servidor).
app.use(flash());                                                              // 4 (Acionando e executando o recurso de Flash Messages).

app.set('views', path.resolve(__dirname, 'src', 'views'));                     // 5 (Configurando renderizador)
app.set('view engine', 'ejs');                                                 // 6 (Configurando engine do renderizador)

app.use(middlewareGlobal);                                                     // 7 (Acionando Interceptador)
app.use(routes);                                                               // 8 (Acionando rotas)


//O acionamento do servidor dependerá da conexão com a base de dados.
app.on('pronto', () => {
    app.listen(3000, () => { console.log('Acessar http://localhost:3000') });
});
