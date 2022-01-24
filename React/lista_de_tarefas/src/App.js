// Este é o arquivo da nossa aplicação, que representará o componente principal e então fará o export para que o index.js faça a renderização.

import React from 'react';                              // Carrega o React
import Main from './components/Main';                   // Carrega o componente principal.
import './App.css';                                     // Carrega o CSS da aplicação. [Configurações 'root' para css]

export default function App() {                         // A aplicação agora representa o componente principal.
  return < Main />;
}
