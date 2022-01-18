/* App, tudo que for possível será feito com Class.
1. Importe o Express                                                          !Import/Export === ES6 by Sucrase
2. Crie o App, a partir dele faremos o build do servidor.
3. Exportação somente do atributo app (express), no modo Default.





!! Toda vez que o App for instânciado (new), automaticamente executará seus atributos.
*/

import dotenv from 'dotenv';

dotenv.config();

import './src/database';                                                      // Iniciando base de dados, ao iniciar servidor.

import express from 'express';                                                // Importação do micro-framework;
import homeRoutes from  './src/routes/homeRoutes';
import userRoutes from  './src/routes/userRoutes';
import tokenRoutes from  './src/routes/tokenRoutes';
import alunoRoutes from  './src/routes/alunoRoutes';
import fotoRoutes from  './src/routes/fotoRoutes';

class App {                                                                   // Construção da base do servidor.
  constructor() {
    this.app = express();                                                     // Atributo 'app' está carregando o framework.
    this.middlewares();                                                       // Aciona middlewares().
    this.routes();                                                            // Aciona routes().
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));                     // Ativando acesso ao parâmetros das requisições.
    this.app.use(express.json());                                             // Ativando retornos em JSON.
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);                                    // Ativando listen para esse endereço.
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;                                                 // Já instânciamos por praticidade. evita: const Abc = new xyz.
