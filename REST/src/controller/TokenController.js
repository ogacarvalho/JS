/*

*/

import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;                                  // Extração do E-mail e Password.

    if (!email || !password) {                                                       // Não mandou senha ou email. -> erro.
      return res.status(401).json({
        errors: ['Credenciais Inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });                            // Verifica se o e-mail existe.

    if (!user) {                                                                      // Se o email não existe, erro.
      return res.status(401).json({
        errors: ['Usuário inexistente'],
      });
    }

    if (!(await user.passwordIsValid(password))) {                                    // Senha do usuário é inválida?
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {                 // Payload: Dados que retornarão: { id/email }
      expiresIn: process.env.TOKEN_EXPIRATION,                                        // Dados opcionais: Data de Expiração.
    });

    return res.json({ token });                                                       // Usuário recebe o [token]
  }
}

export default new TokenController();
