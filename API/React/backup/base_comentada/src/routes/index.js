
import React from 'react';                                    // Carrega a biblioteca

import { Switch as Rotas } from 'react-router-dom';           // Carrega o Switch que aciona a rota toda vez que o URL bate. [Gerenciador de rotas]

import MyRoute from './MyRoute';                              // Carrega o arquivo de rota privada. [Um arquivo que finge ser o <route> e intercepta a requisição]
import Login from '../pages/Login';                           // Carrega paǵina de Login
import Page404 from '../pages/Page404';                       // Carrega página 404

export default function Routes() {                            // Componente Routes [Importado pelo App]
  return (
    <Rotas>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Rotas>
  );
}

/* O Componente de rotas é relativamente simples, conecta o endereço ao componente, no entanto neste caso temos um "Middleware" que está realizando a interceptação das rotas com intuíto de gerar uma checagem de login. [Detalhes no MyRoute]

!Os endereços serão futuramente conectados ao axios que fará cada requisição se conectar a nossa api back-end.
!Importante o gerenciador de rotas foi atualizado, e agora é significativamente diferente, requer uma revisão/curso atualizado.
*/
