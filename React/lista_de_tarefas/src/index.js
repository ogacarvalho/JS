/* Arquivo de Entrada [Input] do Webpack
Este é o arquivo de configuração do desenvolvimento final, daqui em diante será transpilado e transformado em arquivo de produção.
*/

import React from 'react';                                       // Carregando o React [Importar sempre que utilizar JSX]
import ReactDOM from 'react-dom';                                // Recurso React responsável por renderizar o nosso componente principal, em determinado local.
import App from './App';                                         // Carrega aplicação.

ReactDOM.render( <App />, document.getElementById('root') );     // Renderiza a aplicação, na div [root] dentro do index.html na pasta public.
