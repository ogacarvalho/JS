/* A validação será feita aqui mesmo.

Validando Password
• Criamos um campo que não existirá na base de dados: 'password: Sequelize.VIRTUAL,' (ESTÁ AQUI VIRTUALMENTE Ñ EXISTIRÁ NA BD)
• Para jogar o Password virtual no Hash utilizaremos o bcrypt e um hook (anzol) que antes de salvar os dados na base de dados, salvará o virtual no hash.
• Feita a instalação do bcrypt o importamos.

Em seguida, adicionaremos o hook, antes do return digite: this.addHook('beforeSave', f(dados do usuário));                    !Há métodos variados, como "antes de criar, antes de desconectar..."

[3] No email, vamos configurar a mensagem de "unique".

!O sequelize utiliza o Validator, portanto todos os seus métodos são válidos.
!Salt é o tipo de "encriptação"
!Use valores médios para o salt, quanto mais mais processamento de servidor.
*/


import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',                      // Se este campo não for enviado, vamos gerar um erro propositalmente.
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existente.',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {                                                // Aqui testamos adicionando hook que será adicionado antes de salvar.
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);                               // No segundo parâmetro, a função que irá substituir o password pelo hash.
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

