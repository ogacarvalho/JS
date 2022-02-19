import React from 'react';                                           // Carregando React       [Bibilioteca]
import ReactDOM from 'react-dom';                                    // Carregando ReactDOM    [Habilita métodos como ".render()"]
import App from './App';                                             // Carregando Aplicação.

ReactDOM.render(<App />, document.getElementById('root'));           // Este método irá renderizar a aplicação no arquivo de build [index.html]

// O arquivo index é responsável por fazer a conexão entre a aplicação e o arquivo de build [public] index.html
