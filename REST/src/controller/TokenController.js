import jwt from 'jsonwebtoken';                                                      // Carrega recurso gerador de Token
import User from '../models/User';                                                   // Carrega o model do Usuário.

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;                                  // Extração do E-mail e Password, com valor padrão.

    if (!email || !password) {                                                       // Não mandou senha ou email. -> erro.
      return res.status(401).json({
        errors: ['Credenciais Inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });                            // Procura o usuário no BDD via email.

    if (!user) {                                                                      // Se houver erro, gera: usuário não existe.
      return res.status(401).json({
        errors: ['Usuário inexistente'],
      });
    }

    if (!(await user.passwordIsValid(password))) {                                    // Se a senha do usuário reconvertida pelo bcrypt não bater com o hash existente,
      return res.status(401).json({                                                   // Gere erro: senha inválida.
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;                                                              // Extrai identificação do Usuário.
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {                 // Payload: Dados que retornarão: { id/email }
      expiresIn: process.env.TOKEN_EXPIRATION,                                        // Dados opcionais: Data de Expiração.
    });

    return res.json({ token });                                                       // Usuário recebe o [token]
  }
}

export default new TokenController();
