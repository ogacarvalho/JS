/* Conectaremos o webpack ao nosso servidor.
1. Criaremos uma pasta chamada front-end
2. Copiamos o arquivo de configuração do webpack do nosso modelo para a pasta raiz.
3. Após copiar todos os arquivos necessários do webpack, adicionamos o --ignore no package.
4. Tudo pronto, mande o npm instalar tudo. (npm i)



!. Pasta src ficará responsável pelo back-end
*/

//Importações
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');


//Conexões
app.use(routes);
app.use( express.urlencoded( {extended: true} ) );
app.use( express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


//Porta
app.listen(3000, () => { console.log('Acessar http://localhost:3000') });


