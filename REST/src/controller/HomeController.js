/*
Os métodos da classe, controlarão as requisições.


!Export já instânciado, para conseguir o objeto puro instânciado da classe.
!Se jogarmos um console.log no catch veremos um objeto chamado Errors com varias propriedades dizendo quais foram os erros.
*/

import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Claudia',
        sobrenome: 'Fernanda',
        email: 'claudia@fernanda.com.br',
        idade: 45,
        peso: 53,
        altura: 1.55,
      });
      res.json(novoAluno);
    } catch (e) {
      res.status(400).json(e.errors.map((err) => err.message));       // Estamos mapeando o array "erros" e retornando a propriedade "messages" com MAP
    }
  }
}

export default new HomeController();
