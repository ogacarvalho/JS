//Importações                                                                                         Importações
const datamanager = require('dotenv').config();                                                       //Ocultador de dados sigilosos
const express = require('express');                                                                   //Servidor
const app = express();                                                                                //Atrib. e Acionamento do Servidor

const mongoose = require('mongoose');                                                                 //Gerenciador da Base de Dados MongoDB
mongoose.connect(process.env.URLDB)                                                                   //Configurações de Conexão com BD.
.then(() => {
    console.log('Base de dados conectada.')
    app.emit('pronto');
}).catch(e => console.log(e));

const session = require('express-session')                                                            //Sessões
const MongoStore = require('connect-mongo');                                                          //Storage do BD (Onde as Sessions serão armazenadas)
const flash = require('connect-flash');                                                               //Flash Messages(São salvas em Sessions)

const routes = require('./routes');                                                                   //Importando Gerenciador de Rotas do arquivo routes.js
const path = require('path');                                                                         //Recurso Node Path (Caminhos universais)
const helmet = require('helmet');                                                                     //Sistema de Segurança HTTPS Helmet
const csrf = require('csurf');                                                                        //Sistema de Segurança CRSF
const { middlewareGlobal, errorCSRF, mwCSRF } = require('./src/middlewares/middleware');              //Importando dados com AVD do arquivo middleware.js

//Acionando:                                                                   Posições
//app.use(helmet());                                                           // 0  Sistema de Segurança do Express
app.use( express.urlencoded( {extended: true} ) );                             // 1  Permite enviar formulários para dentro da Aplic.
app.use( express.json());                                                      // 2  Permite o envio de JSON para dentro da Aplic.
app.use( express.static(path.resolve(__dirname, 'public')));                   // 3  Arquivos Estáticos (HTML|CSS|JS|IMG)

//Configurando o Express Session
const sessionSettings = session({                                              // 4  Sessões Settings
    secret: 'RIWEYR384937URUA8743Q09RUITGFHSDJK a6()',                         //Use qualquer código.
    store: MongoStore.create({ mongoUrl: process.env.URLDB }),                 //Criando Storage no MongoDB
    resave: false,
    saveUninitialized: false,
    cookie: {                                                                  //Cookie - duração de 7 dias.
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionSettings);                                                      // 4.a Acionando o recurso de sessões no servidor.
app.use(flash());                                                              // 5   Flash Messages

app.set('views', path.resolve(__dirname, 'src', 'views'));                     // 6   (Configurando renderizador)
app.set('view engine', 'ejs');                                                 // 7   (Configurando engine do renderizador)

app.use(csrf());                                                               // 8   Validador de Tokens
app.use(errorCSRF);                                                            // 9   Corretor de falhas de segurança.
app.use(mwCSRF);                                                               // 10   Injetor de Tokens  
app.use(middlewareGlobal);                                                     // 11  Interceptador Genérico
app.use(routes);                                                               // 12  Rotas

app.on('pronto', () => {                                                       //Acionará a escuta de requisições após conectar com o BD.
    app.listen(3000, () => { console.log('Acessar http://localhost:3000') });
});