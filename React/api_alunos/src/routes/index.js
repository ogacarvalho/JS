/* Rotas
- Path: Se houver requisição para qualquer paǵina diferente das existentes "*": renderiza o componente 404.
- MyRoute: este componente retorna o antigo "Route" mas adiciona uma validação [checando o login e a rota] se der tudo certo, executa o componente "login".
// Se a rota estiver fechada, automaticamente será redirecionada para paǵina de login.
*/

import React from 'react';

import { Switch as Rotas } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Rotas>
      <MyRoute exact path="/" component={Login}/>
      <MyRoute path="*" component={Page404} />
    </Rotas>
  );
}
