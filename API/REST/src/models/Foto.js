
import Sequelize, { Model } from 'sequelize';                                   // Carrega Gerenciador de Banco de Dados e Recurso Model [Sequelize]
import appConfig from '../config/appConfig';                                    // Carrega arquivo de configurações que retorna URL.

export default class Foto extends Model {                                       // Gera Classe Foto com classe Base Model
  static init(sequelize) {                                                      // Carrega parâmetro de conexão com o Sequelize.
    super.init({                                                                // Classe base recebe objetos no primeiro parâmetro

      originalname: {                                                           // Objeto que cria formatação do nome original do arquivo.
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vázio.',
          },
        },
      },

      filename: {                                                               // Objeto que cria formatação do novo nome do arquivo.
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vázio.',
          },
        },
      },

      url: {                                                                   // Objeto que faz a formatação final, adicionando link para acesso + novo nome na foto.
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },

    }, {
      sequelize,                                                               // Aciona conexão entre os elementos e o  sequelize
      tableName: 'fotos',                                                      // Cria um nome para a tabela [fotos]
    });
    return this;
  }

  static associate(models) {                                                   // Essa Model pertence ao Model.aluno através da Foreign Key -> aluno_id
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}

// Essa classe é tão estranha para nós quanto para o professor, relax.
// Aqui trabalhamos diretamente no campo de input dos dados que serão enviados para a base de dados.
