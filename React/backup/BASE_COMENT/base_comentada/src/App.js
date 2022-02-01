
// Este é arquivo principal, ele representa a aplicação front-end, aqui carregamos as conexões, fazemos a integração dos componentes e seu acionamento via JSX.

import React from 'react';                                                        // Carrega a biblioteca. [React]
import { Router } from 'react-router-dom';                                        // Gerenciador de Rotas
import { ToastContainer } from 'react-toastify';                                  // Disparador de alertas
import { Provider } from 'react-redux';                                           // Conecta a Árvore de Estados com o React
import { PersistGate } from 'redux-persist/integration/react';                    // Integrador do Persistor com o React

import store, { persistor } from './store';                                       // store: árvore de estados > export default | persistor: salva estado dos reducers > export
import history from './services/history';                                         // Gerenciador de histórico na sessão.
import GlobalStyle from './styles/Global';                                        // Arquivo que representa o CSS global para a aplicação.
import Header from './components/Header';                                         // Carrega o componente 'header'.
import Routes from './routes';                                                    // Carrega o arquivo de configuração de rotas.

export default function App() {                                                   // Aciona os componentes da aplicação via JSX.
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}
