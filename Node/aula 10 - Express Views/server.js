/* 
Views
Neste módulo vamos criar o renderizador de HTML.
1.  Criamos a pasta views e a colocamos na pasta src.
2.  Através do app.set('view', caminho absoluto(path)) conectamos o servidor a pasta views.
3.  Através do app.set(..) especificamos qual engine o view vai utilizar para renderizar os htmls. (EJS)
3.1 Engines servem para permitir que o documento html estático fique dinâmico.
4.  Após escolhida a engine, vamos instala-la:   npm i ejs
5.  Instalada, agora criamos um novo arquivo em views, chamado index.ejs (html com super poderes)
6.  Agora nos controladores, mudaremos o tipo de response que antes era res.send('<>html</>') para render('index'); !não precisa do .ejs

*/

//Importações
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');


//Conexões
app.use(routes);
app.use( express.urlencoded( {extended: true} ) );
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');                                           //EJS bom para html. !Existem diversas engines, uma para cada ocasião.

//Porta
app.listen(3000, () => { console.log('Acessar http://localhost:3000') });


