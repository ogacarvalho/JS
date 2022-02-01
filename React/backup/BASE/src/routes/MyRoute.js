// Componente de rota: Este arquivo servirá para substituir o "Route" [react-router-dom] do arquivo Routes;
// Aqui temos uma validação de login, que verifica se a rota esta fechada ou se o usuário está logado, tomando decisões em cada circunstância.
// É uma espécie de middleware, pois aqui o "MyRoute" retorna um "clone" da rota anterior, porém adicionando esta validação.
// No fim desabilitamos um pequeno "erro" do eslint e validamos as propriedades do objeto component que serão utilizadas pelo routes como referência.
/* Resumo: O usuário tenta entrar numa paǵina que requer login, com esta rota, verificamos através do token se ele está ou não logado, se não estiver
   o redirecionamos para a página de login com a página anterior carregada. Feito o login, damos acesso a ele.

   Mas para fazer isso, precisamos de um componente de rota privado ou seja [nosso] como isso funciona? Simplesmente criamos um componente que retorna a antiga rota + a validação que queremos.

   Se o usuário não estiver logado podemos redirecioná-lo com history ou redirect.
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom'; // Recurso de rotas que será retornado + redirect em caso de logged out.
import { PropTypes } from 'prop-types';

//                                           {Login}, parâmetro, ...se houver mais parâmetros
export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false; // Esta informação estará dentro do _estado_ do redux e será acessível globalmente. [esta considerando que o user não está logado]

  if (isClosed && !isLoggedIn) { // Se a rota é fechada e o usuário não está logado: envia para tela de login e então [state: vai redirecionar para o cam. q ele queria.]
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />; // Se deu tudo certo, retorna a rota normal sem o "isClosed".
}

// Para validar as propriedades do objeto component: npm i proptypes
MyRoute.defaultProps = {
  isClosed: false, // Por padrão ele é false, nenhum rota é fechada por padrão.
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]) // O componente pode ser um component do react mesmo [element] ou um component funcional [func]
    .isRequired, // é OBRIGATORIO
  isClosed: PropTypes.bool, //True or False e não é obrigatório.
};
