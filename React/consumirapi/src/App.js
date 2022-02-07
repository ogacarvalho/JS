import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'; // O provider torna possível o acesso á aos estados, envolvendo todos os componentes dentro de sí próprio.
import { PersistGate } from 'redux-persist/integration/react'; // O "portão do persistor" permite que a api tenha acesso apenas aqueles que estão salvos no localstorage.

import store, { persistor } from './store'; // Import de todos os estados e dos estados salvos.
import history from './services/history';
import GlobalStyle from './styles/Global';
import Header from './components/Header';
import Routes from './routes';

export default function App() {
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
