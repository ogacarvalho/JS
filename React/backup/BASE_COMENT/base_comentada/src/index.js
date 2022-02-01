// Este é o arquivo de renderização, responsável por renderizar a aplicação [app.js] no index.html [public].

import React from 'react';                                                      // Carrega Biblioteca React
import ReactDOM from 'react-dom';                                               // Carrega Renderizador da Aplicação.
import App from './App';                                                        // Carrega Aplicação

ReactDOM.render(<App />, document.getElementById('root'));                      // Renderiza a Aplicação, no index.html [public]
