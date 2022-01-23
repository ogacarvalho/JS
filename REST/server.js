
// Aqui criamos a porta que escutará as requisições do nosso proxy-reverso [NginX] e conectamos no arquivo que controla toda a aplicação [.app].

import app from './app';                                                        // Carrega a Aplicação.

const port = 3001;
app.listen(port, () => { console.log('Acessar http://localhost:3001'); });      // Aplicação aciona a escuta das requisições na porta 3001.
