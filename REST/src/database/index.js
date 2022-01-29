// Este é o arquivo principal [controlador] da base de dados, é iniciado antes do servidor.
// Todo model recém criado deve ser adicionado aqui.

import Sequelize from 'sequelize';                         // Carrega o gerenciador do banco de dados.

import databaseConfig from '../config/database';           // Carrega as configurações de conexão da base de dados.

import Aluno from '../models/Aluno';                       // Carrega model Aluno
import User from '../models/User';                         // Carrega model User
import Foto from '../models/Foto';                         // Carrega Model Foto

const models = [Aluno, User, Foto];                        // Armazenamento dos Models em uma constante.

const connection = new Sequelize(databaseConfig);          // Conecta Sequelize ao nosso banco de dados.

models.forEach((model) => model.init(connection));         // Aciona conexão dos models.
models.forEach((model) => model.associate && model.associate(connection.models));  // Associando todos os models ao PK 'aluno_id'
