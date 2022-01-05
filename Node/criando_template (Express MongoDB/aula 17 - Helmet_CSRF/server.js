/* Instalamos o CSURF e o HELMET
1. Embaixo de path colocaremos: const helmet = require('helmet');
2. Embaixo de helmet colocaremos o csrf: const csrf = require('csurf');
3. Antes das rotas e dos middlewares acionaremos e executaremos o csrf.


Configuração CSRF
1.  Instalaremos dois middlewares antes das rotas.
1.1 O primeiro será para injeçao dos tokens para cada formulário.
1.2 O segundo será para validação dos tokens dos formulários.
!   Veja em middlewares.js




!O CSRF injetará um token (id) de validação para cada formulário.
!Se o sistema estiver ainda em desenvolvimento, usando SSL portanto desative o Helmet.
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
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, errorCSRF, mwCSRF } = require('./src/middlewares/middleware');


//Conexões (A posição é extremamente importante)                               //Posicionamento.
//app.use(helmet());                                                           // 0  (Acionando sistema de segurança do Express)
app.use( express.urlencoded( {extended: true} ) );                             // 1  (Acionando decodificação dos dados)
app.use( express.static(path.resolve(__dirname, 'public')));                   // 2  (Acionando o acesso ao HTML e CSS)

//Configurando o Express Session
const sessionSettings = session({                                              // 3  (Configurando sessão do cliente)
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
app.use(flash());                                                              // 4   (Acionando e executando o recurso de Flash Messages).

app.set('views', path.resolve(__dirname, 'src', 'views'));                     // 5   (Configurando renderizador)
app.set('view engine', 'ejs');                                                 // 6   (Configurando engine do renderizador)

app.use(csrf());                                                               // 7   (Acionando Validador de Token)
app.use(errorCSRF);                                                            // 8   (Acionando o ocultador de erros)
app.use(mwCSRF);                                                               // 9   (Acionando o mw. resp. por executar o injetor de token).   
app.use(middlewareGlobal);                                                     // 10   (Acionando Interceptador)
app.use(routes);                                                               // 11  (Acionando rotas)


//O acionamento do servidor dependerá da conexão com a base de dados.
app.on('pronto', () => {
    app.listen(3000, () => { console.log('Acessar http://localhost:3000') });
});
