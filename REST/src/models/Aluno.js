import Sequelize, { Model } from 'sequelize';                                // Carrega o Gerenciador de BDD e o Recurso de Models [Sequelize]

export default class Aluno extends Model {                                   // Gera Classe Aluno com base no Model Sequelize
  static init(sequelize) {                                                   // Aciona o Sequelize
    super.init({                                                             // Classe Base [Model], recebe acionamento de objeto com o seguintes elementos:

      nome: {                                                                // Elemento nome:
        type: Sequelize.STRING,                                              // Tipo de dados: String
        defaultValue: '',                                                    // !Se tiver valor padrão, dará erro na validação.
        validate: {                                                          // Validação básica + tipo de validação [len] + mensagem de erro.
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
        defaultValue: '',
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
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro.',
          },
        },
      },

      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante.',
          },
        },
      },

      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante.',
          },
        },
      },

    }, {
      sequelize,                                                                   // Conectando elementos ao sequelize. [Static init(sequelize)]
    });
    return this;                                                                   // Retorna a instância.
  }

  static associate(models) {                                                       // Criando relação entre o Model Alunos e o modo Fotos via PrimaryKey
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });                         // Se houver fotos registradas no PrimaryKey do aluno, então será disponibilizada.
  }
}
