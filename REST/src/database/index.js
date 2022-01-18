// Todo model criado, deve ir dentro deste arquivo.
// Precisa chamar este arquivo, quando iniciamos o servidor.

import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));  // Associando todos os models ao PK 'aluno_id'
