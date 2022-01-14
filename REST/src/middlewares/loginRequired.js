import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;                   // Estamos checando se há token de autorização vindo das headers.

  if (!authorization) {                                    // Retorna um array.
    return res.status(401).json({
      errors: ['Login Required'],
    });
  }

  const [, token] = authorization.split(' ');              // Dividimos o token que está no header, pelo espaço. (bearer [token]), retorna um array de 2 itens

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);         // retorna id e email.
    const { id, email } = dados;

    const user = await User.findOne({                                  // Checando na base de dados, se email ou id bate.
      where: {
        id,                                                            // Ou seja, se houver edição de e-mail ou ID.. precisa re-logar.
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário Inválido'],
      });
    }

    req.userId = id;                                                   // Joga na requisição o id e o email.
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
