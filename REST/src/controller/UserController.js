/*
Os métodos da classe, controlarão as requisições.

2: Estamos mapeando o array "erros" e retornando a propriedade "messages" com MAP
3: O report no Insomnia esta inglês, vamos configurá-lo em Model.
4: Queremos output em Array, para isso no catch em JSON envolvemos seu conteúdo em um objeto e adicionamos uma chave: errors
5: Agora vamos apagar as propriedades do User.create
({
            nome: 'Claudia',
            email: 'claudia@fernanda.com.br',
            password: '123456',
})

5: E torná-los dinâmicos via JSON no insomnia, para isso devemos receber os dados da requisição, adicionando "red.body"

!Export já instânciado, para conseguir o objeto puro instânciado da classe.
!Se jogarmos um console.log no catch veremos um objeto chamado Errors com varias propriedades dizendo quais foram os erros.

*/

import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);                                      // [5]
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });       // [2][4]
    }
  }

  async index(req, res) {
    try {
      const users =  await User.findAll({ attributes: ['id', 'nome', 'email'] });        // Queremos ver todos os usuários
      return res.json(users);                                                            // Se tudo ocorrer corretamente, retorne users.
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user =  await User.findByPk(req.params.id);                                  // Busque com base na PK
      const { id, nome, email } = user;
      return res.json({ id, nome, email });                                                             // Se tudo ocorrer corretamente, retorne users.
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user =  await User.findByPk(req.userId);                                  // userId -> dados verificados pelo LoginRequired.

      if (!user) {                                                                       // Há parâmetros, mas não há usuário?
        return res.status(400).json({
          errors: ['Usuário invalido ou inexistente.'],
        });
      }

      const update = await user.update(req.body);                                        // Tudo ok, atualize e retorne o usuário com os dados do parâmetro.
      const { id, nome, email } = update;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const user =  await User.findByPk(req.userId);                                  // Busque o usuário...

      if (!user) {                                                                       // Há parâmetros, mas não há usuário?
        return res.status(400).json({
          errors: ['Usuário invalido ou inexistente.'],
        });
      }

      await user.destroy();                                                               // Tudo ok, atualize e retorne o usuário com os dados do parâmetro.
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
