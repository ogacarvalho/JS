import React from 'react';

import { Switch as Rotas } from 'react-router-dom';

import MyRoute from './MyRoute'; // Uma espécie de middleware que fará a checagem se o usuário está logado ou não.
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Rotas>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Rotas>
  );
}

/* Este arquivo retorna a organização das rotas dos nossos componentes, no qual aquelas que precisam de Login serão enviadas utilizando o componente MyRoute que vai interceptar a requisição da rota específica "/" simulando ser o "<Route>" uma espécie de middleware que será acionado quando o usuário fizer a requisição para o caminho específico "/" e então o middleware fará a validação, se der tudo certo vai renderizar o component normalmente.

!Importante o gerenciador de rotas foi atualizado, e agora é significativamente diferente, requer uma revisão/curso atualizado.
*/
