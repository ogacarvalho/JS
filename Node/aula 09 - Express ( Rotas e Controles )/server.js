
/* Rotas e Controles
Iniciaremos com  Full MVC no qual temos front e back end na mesma aplicação e depois aprender a separá-los.

Abstração:
Após criar os arquivos necessários como routes.js e a pasta controllers vamos simplesmente conectar todos estes dados através da modularização, na primeira parte cuidaremos do servidor e conexões importantes, depois da separação de rotas, que conectará cada rota com seu respectivo arquivo de operações (controladores). 
Os controladores ficarão responsáveis por decidir qual ação executar para cada requisição.

Comandos básicos
1. Aqui vamos importar o servidor e executá-lo (app).
2. Depois importar e acionar o módulo que cuida das rotas.
3. Por último solicitar que o servidor escute a porta 3000 de onde as solicitações virão.

*/

const express = require('express');                                                     //Importa servidor.
const app = express();                                                                  //Aciona o servidor.
const routes = require('./routes');                                                     //Importa as rotas.
app.use(routes);                                                                        //Aciona as rotas. (Enviando os dados da porta)
app.use( express.urlencoded( {extended: true} ) );                                      //Trata os dados das requisições (permitindo o acesso).


app.listen(3000, () => {                                                                //Aciona a porta 3000.
    console.log('Acessar http://localhost:3000')
});


