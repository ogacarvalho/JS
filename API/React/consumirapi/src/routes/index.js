//                                                                                       Carregando:
import React from 'react';                                                               // Biblioteca

import { Switch } from 'react-router-dom';                                               // Método que combina a requisição com a rota correta.

import MyRoute from './MyRoute';                                                         // Middleware (rota privada) de validação.

//           Componentes (Páginas)
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute exact path="*" component={Page404} />
    </Switch>
  );
}

// O Switch vai ouvir as requisições e direcionar para o caminho correto, então o middleware entrará em ação e validará a rota, depois o componente será carregado.
