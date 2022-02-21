//                                                                                              Carregando:
import React from 'react';                                                                      // Biblioteca
import { Route, Redirect } from 'react-router-dom';                                             // Métodos para rotas.
import { PropTypes } from 'prop-types';                                                         // Validador de parâmetros
import { useSelector } from 'react-redux';                                                      // Método que permite acessar á arvore de estados.


export default function MyRoute({ component: Component, isClosed, ...rest }) {                  // Criando Middleware (Parâmetros)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);                             // Verificando se o usuário está logado.

  if (isClosed && !isLoggedIn) {                                                                // Se a rota for [fechada] e o usuário não estiver logado:
    return (                                                                                    // Redirect para página de login ou (se tiver) para a página anterior.
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;                                             // Rota aberta ou usuário logado: libera o acesso.
}

// Validando os parâmetros que poderão ser recebidos pelo middleware:
MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};


// Esse componente é um middleware, ele finge ser a "<Route />" para realizar uma validação, feito isso libera o acesso com a rota correta.
