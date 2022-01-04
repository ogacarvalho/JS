//Estes interceptadores estão sendo acionados antes das rotas portanto terão acesso as requisições antes dos controladores.

exports.middlewareGlobal = (req, res, next) => {                                //Interceptador genérico, apenas demonstração.
    res.locals.variavelLocal = 'Este é o valor da variável local';
    next();
};

exports.errorCSRF = (err, req, res, next) => {                                  //Intercepta a requisição em busca de erros.
    if(err && err.code === 'EBADCSRFTOKEN') {                                   //Se for o erro indicado,
        return res.render('404');                                               //interromperá a corrente e renderizará a pg. 404.
    };
    next();                                                                     //Caso contrário, siga o fluxo.
};

exports.mwCSRF = (req, res, next) => {                                          //Injetor de Tokens em Formulários (Anti-CSRF)
    res.locals.csrfToken = req.csrfToken();                                     //!Deve ser acionado em todos os formulários da aplicação.
    next();
};

