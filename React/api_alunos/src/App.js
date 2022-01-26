import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import GlobalStyle from './styles/Global';
import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}
