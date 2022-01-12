import express from 'express';                                                // Importação do micro-framework;

class App {                                                                   // Construção da base do servidor.
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {

  }
}

export default new App().app;                                                // "new" vai instanciar a classe. "App().app;" -> executando o "express()"
