
import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({

      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',                                                     // Se tiver valor padrão, da erro na validação.
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vázio.',
          },
        },
      },

      filename: {
        type: Sequelize.STRING,
        defaultValue: '',                                                     // Se tiver valor padrão, da erro na validação.
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vázio.',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models) {                                                 // Essa Model pertence ao Model.aluno através da Foreign Key -> aluno_id
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}

// Essa classe é tão estranha para nós quanto para o professor, relax.
// Aqui trabalhamos diretamente no campo de input dos dados que serão enviados para a base de dados.
