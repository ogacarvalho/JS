
/* Middlewares (A nível de todas as rotas)
Aqui vamos criar interceptadores (middlewares) a nível de todas as rotas. (diretamente no server)

1. Criaremos uma pasta no back-end (src) para organizar os middlewares.
2. Criaremos o arquivo middleware que pode ser exportado como default ou como funções específicas.
3. Importaremos o middleware.
4. Agora pedimos ao servidor que use o nosso middleware (app.use(middleware))
5. A partir de agora, todas as requisições serão interceptadas.


! O posicionamento do middleware deve ser antes de routes ( é extremamente importante)
*/




//Importações
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');
const { middlewareGlobal } = require('./src/middlewares/middleware');          //Importação middleware. (AVD)
//    {EXTRAIA ESTE DADO } DO           MIDDLEWARE.MODULO.EXPORTS

//Conexões (A posição é extremamente importante)                               //Posicionamento.
app.use( express.urlencoded( {extended: true} ) );                             // 1 (Acionando decodificação dos dados)
app.use( express.static(path.resolve(__dirname, 'public')));                   // 2 (Acionando o acesso ao HTML e CSS)

app.set('views', path.resolve(__dirname, 'src', 'views'));                     // 3 (Configurando renderizador)
app.set('view engine', 'ejs');                                                 // 4 (Configurando engine do renderizador)

app.use(middlewareGlobal);                                                     // 5 (Acionando Interceptador)
app.use(routes);                                                               // 6 (Acionando rotas)

//Porta
app.listen(3000, () => { console.log('Acessar http://localhost:3000') });

