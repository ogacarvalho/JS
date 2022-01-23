import Aluno from '../models/Aluno';                                                      // Carrega Model Aluno
import Foto from '../models/Foto';                                                        // Carrega Model Foto

class AlunoController {                                                                   // Controlador das requisições destinadas aos Alunos
  async index(req, res) {                                                                 // Index retornará um JSON com os alunos cadastrados no banco de dados.
    const alunos = await Aluno.findAll({                                                  // Aciona método sequelize no Model Aluno que retorna todos. [acesso à BDD? === async]
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],        // Propriedades a serem retornadas
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],                                      // Ordem a serem retornadas.
      include: {                                                                          // Inclua fotos se tiverem.
        model: Foto,
        attributes: ['filename', 'url'],
      },
    });
    res.json(alunos);                                                                     // Retorna todos os alunos cadastrados no banco de dados.
  }

  async store(req, res) {                                                                 // Método que cria novos alunos no BDD [login required]
    try {
      const aluno = await Aluno.create(req.body);                                         // Solicita ao model que crie o aluno e armazene seus dados na constante.

      return res.json(aluno);                                                             // Se não houver erro, o retorno será o aluno recém criado.
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messages),                                      // Retorna valor do erro e mensagem referente.
      });
    }
  }

  async update(req, res) {                                                                // Solicita atualização de dados         [!exige login e identificação nos parâmetros]
    try {
      const { id } = req.params;                                                          // Extrai identificação da requisição com Destructuring.

      if (!id) res.status(400).json({ errors: ['Missing ID'] });                          // Se não houver identificação, retorna erro.

      const aluno = await Aluno.findByPk(id);                                             // Solicita ao Model que encontre o aluno.

      if (!aluno) res.status(400).json({ errors: ['Aluno não existe!'] });                // Se não existir nenhum aluno, retorna erro.

      const alunoAtualizado = await aluno.update(req.body);                               // Aluno existente, solicita ao Model que o atualize.

      return res.json(alunoAtualizado);                                                   // Retorna dados atualizados
    } catch (e) {
      return res.status(400).json({                                                       // Se houver erros, retorna mensagem de erro.
        errors: e.errors.map((err) => err.messages),
      });
    }
  }

  async show(req, res) {                                                                  // Solicitação de busca por aluno. [Exige ID]
    try {
      const { id } = req.params;                                                          // Extraí ID da requisição.

      if (!id) res.status(400).json({ errors: ['Missing ID'] });                          // Se não tiver ID, retorna mensagem de erro.

      const aluno = await Aluno.findByPk(id, {                                            // Há ID, solicita ao Model que encontre o aluno, e retorne:
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],      // Ordem e atributos JSON a serem retornados.
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename', 'url'],
        },
      });

      if (!aluno) res.status(400).json({ errors: ['Aluno não existe!'] });                // Se não houver aluno, retorne erro.

      return res.json(aluno);                                                             // Há aluno, retorne-o.
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messages),                                      // Algum erro, retorne mensagem de erro.
      });
    }
  }

  async delete(req, res) {                                                                // Solicitação de delete.
    try {
      const { id } = req.params;                                                          // Extração do ID

      if (!id) res.status(400).json({ errors: ['Missing ID'] });                          // Não há ID: ERRO.

      const aluno = await Aluno.findByPk(id);                                             // Há ID, solicita ao Model que retorne o aluno.

      if (!aluno) res.status(400).json({ errors: ['Aluno não existe!'] });                // Não há o aluno, retorna erro.

      await aluno.destroy(aluno);                                                         // Há o aluno, solicita ao Model que destrua os dados.
      return res.json({ apagado: true });                                                 // Retorna atualização da solicitação formato obrigatório [json].
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messages),
      });
    }
  }
}


export default new AlunoController();                                                     // Exportação Instânciada
