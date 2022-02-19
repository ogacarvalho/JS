
//                                                                                    Carregando:
import React from 'react';                                                            // Biblioteca
import { Router } from 'react-router-dom';                                            // Gerenciador de rotas
import { ToastContainer } from 'react-toastify';                                      // Ferramenta de notificação
import { Provider } from 'react-redux';                                               // Permite que os componentes dentro dele, tenham acesso aos estados.
import { PersistGate } from 'redux-persist/integration/react';                        // Limita o acesso da aplicação apenas aos dados salvos no localstorage.

import store, { persistor } from './store';                                           // Estados da Árvore e do Persistor. [Persistor salva os dados do usuário].
import history from './services/history';                                             // Salva o histórico de requisição do usuário. [redirect retroativo]
import GlobalStyle from './styles/Global';                                            // [Styled Components] É um recurso que permite padronizar o estilo da aplicação.
import Header from './components/Header';                                             // Componente Fixo [Cabeçalho]
import Routes from './routes';                                                        // Componente responsável pela administração das rotas.


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={2000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

// O Componente [app] representa aplicação e será renderizado no index.html para build, portanto sua responsabilidade é fazer a integração entre os componentes principais.
