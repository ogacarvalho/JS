// Middleware gerador de portão de login.

import jwt from 'jsonwebtoken';                            // Carrega sistema de Token
import User from '../models/User';                         // Carrega model do User.

export default async (req, res, next) => {                 // Será introduzido no meio das rotas.
  const { authorization } = req.headers;                   // Estamos checando se há token de autorização vindo das headers.

  if (!authorization) {                                    // Retorna um array.
    return res.status(401).json({
      errors: ['Login Required'],
    });
  }

  const [, token] = authorization.split(' ');              // Extraímos o bearer e o token da authorização e os separamos com split, armazenando o token na constante.

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);         // Dados recebe informações durante verificação do Token com o nosso sistema.
    const { id, email } = dados;                                       // Tudo certo, constante recebe extração do ID e Email do usuário.

    const user = await User.findOne({                                  // Checando na base de dados, se email ou id bate.
      where: {                                                         // Tem que bater email e senha.
        id,                                                            // Ou seja, se houver edição de e-mail ou ID.. precisa re-logar.
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário Inválido'],
      });
    }

    req.userId = id;                                                   // Após confirmação, adicionamos na requisição do usuário, o ID e o Email.
    req.userEmail = email;                                             // O que facilitará futuras validações.

    return next();                                                     // Vá para a próxima ação da requisição.
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
