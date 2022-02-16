import User from '../models/User';                                                       // Carrega o model do usuário.

class UserController {
  async store(req, res) {                                                                // Método de criação de usário:
    try {                                                                                // Try tentará criar um novo usuário utilizando o método model [create]
      const novoUser = await User.create(req.body);                                      // Se der tudo certo, "novoUser" recebe um objeto com os dados do novo usuário.
      const { id, nome, email } = novoUser;                                              // Extraímos apenas os dados necessários.
      return res.json({ id, nome, email });                                              // Retorne estes dados específicos, confirmando a criação do usuário.
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });       // Se houver erro, mostre-o.
    }
  }

  async index(req, res) {                                                                // Página inicial da rota de usuários.
    try {
      const users =  await User.findAll({ attributes: ['id', 'nome', 'email'] });        // Queremos ver todos os usuários.
      return res.json(users);                                                            // Se tudo ocorrer corretamente, retorne users.
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {                                                                 // Método de busca por usuário:
    try {
      const user =  await User.findByPk(req.params.id);                                  // A busca será feita com base no ID que no caso é a PK dos usuários no BDD.
      const { id, nome, email } = user;                                                  // Deu tudo certo? Extraia identificação, nome e email.
      return res.json({ id, nome, email });                                              // Retorne o usuário.
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {                                                               // Solicitação de atualização de dados.
    try {
      const user =  await User.findByPk(req.userId);                                     // Verificamos se o usuário tem ID e se ele existe no banco de dados.

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário invalido ou inexistente.'],
        });
      }

      const update = await user.update(req.body);                                        // Atualize o usuário com os parâmetros da requisição.
      const { id, nome, email } = update;                                                // Extraia ID, NOME e EMAIL.
      return res.json({ id, nome, email });                                              // retorne-os.
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {                                                                // Requisição de Delete de usuário.
    try {
      const user =  await User.findByPk(req.userId);                                      // Validando existência do usuário [método sequelize]

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário invalido ou inexistente.'],
        });
      }

      await user.destroy();                                                               // Delete o usuário [método sequelize]
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
