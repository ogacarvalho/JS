// Este é o arquivo que dirige a aplicação, estamos na diretoria.
// Aqui ficam os recursos essênciais para o funcionamento da nossa aplicação que e então são ordenados conforme a necessidade e acionados.

import dotenv from 'dotenv';                                                  // Gerenciador de dados sigilosos.
import { resolve } from 'path';                                               // Gerenciador de caminhos.

dotenv.config();                                                              // Carrega o arquivo [.env]

import './src/database';                                                      // Carrega a base de dados.
import express from 'express';                                                // Carrega o servidor [microframework]

import homeRoutes from  './src/routes/homeRoutes';                            // Gerenciador de rotas da Home
import userRoutes from  './src/routes/userRoutes';                            // Gerenciador de rotas do Usuário
import tokenRoutes from  './src/routes/tokenRoutes';                          // Gerenciador de rotas do Token
import alunoRoutes from  './src/routes/alunoRoutes';                          // Gerenciador de rotas do Aluno
import fotoRoutes from  './src/routes/fotoRoutes';                            // Gerenciador de rotas da Foto

class App {                                                                   // Classe que controla todo sistema [Aplicação]
  constructor() {
    this.app = express();                                                     // O atributo [app] representa e aciona o Express.
    this.middlewares();                                                       // Aplicação aciona middlewares().                         !Executados independente de requisição.
    this.routes();                                                            // Aplicação aciona routes().
  }

  middlewares() {                                                             // Middlewares
    this.app.use(express.urlencoded({ extended: true }));                     // Aciona recurso, que dá acesso aos paramêtros das requisições.
    this.app.use(express.json());                                             // Aciona comunicação por JSON e apenas JSON.
    this.app.use(express.static(resolve(__dirname, 'uploads')));              // Aciona recurso que recebe arquivos estáticos e os envia para o 'uploads'.
  }

  routes() {                                                                  // Rotas
    this.app.use('/', homeRoutes);                                            // Para Home     acione a rota   [ / ] === [ Index ]
    this.app.use('/users/', userRoutes);                                      // Para Usuários acione a rota   [ /users/ ]
    this.app.use('/fotos/', fotoRoutes);                                      // Para Fotos    acione a rota   [ /fotos/ ]
    this.app.use('/tokens/', tokenRoutes);                                    // Para Tokens   acione a rota   [ /tokens/ ]
    this.app.use('/alunos/', alunoRoutes);                                    // Para Alunos   acione a rota   [ /alunos/ ]
  }
}

export default new App().app;                                                 // Este arquivo retorna a propriedade 'app' que é a representação do Express.
