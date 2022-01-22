import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({

      nome: {
        type: Sequelize.STRING,
        defaultValue: '',                                                     // Se tiver valor padrão, da erro na validação.
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },

      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',                                                     // Se tiver valor padrão, da erro na validação.
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },

      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',                                                     // Se tiver valor padrão, da erro na validação.
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro.',
          },
        },
      },

      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',                                                     // Se tiver valor padrão, da erro na validação.
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante.',
          },
        },
      },

      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',                                                     // Se tiver valor padrão, da erro na validação.
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante.',
          },
        },
      },

    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {                                          // Associando o aluno ao Models da foto.
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}

// Essa classe é tão estranha para nós quanto para o professor, relax.
