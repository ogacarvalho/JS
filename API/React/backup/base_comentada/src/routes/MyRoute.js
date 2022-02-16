
import React from 'react';                                                                      // Carrega a biblioteca
import { Route, Redirect } from 'react-router-dom';                                             // Carrega tag de Rota e Redirecionamento [Gerenciador de rotas]
import { PropTypes } from 'prop-types';                                                         // Validador de Parâmetros [Toda propriedade deve ser validada]

export default function MyRoute({ component: Component, isClosed, ...rest }) {                  // Comp. MyRoute [Utilizado no Routes] {Parâmetros de referência}
  const isLoggedIn = false;                                                                     // Constante de "suposição".

  if (isClosed && !isLoggedIn) {                                                                // Se a rota é fechada, e o usuário não está logado:
    return (                                                                                    // Redireciona o usuário para página de Login e armazena último acesso.
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;                                             // A rota não é fechada, ou o usuário está logado: retorna a rota padrão.
}

MyRoute.defaultProps = {                                                                        // Validação da rota: Por padrão isClosed é falso.
  isClosed: false,
};

MyRoute.propTypes = {                                                                           // Validação do tipo de dado que os parâmetros de ref. devem receber.
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};

// Aonde este componente estiver instalado ele irá interceptar a requisição e verificar se o usuário está ou não logado, e agir conforme.
