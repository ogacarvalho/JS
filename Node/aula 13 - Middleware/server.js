
//Importações
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');


//Conexões
app.use(routes);
app.use( express.urlencoded( {extended: true} ) );
app.use( express.static(path.resolve(__dirname, 'public')));          //Conectando e especificando dados estáticos da public 
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


//Porta
app.listen(3000, () => { console.log('Acessar http://localhost:3000') });


