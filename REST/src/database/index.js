// Todo model criado, deve ir dentro deste arquivo.
// Precisa chamar este arquivo, quando iniciamos o servidor.

import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
