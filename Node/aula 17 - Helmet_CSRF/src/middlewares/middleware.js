
/* CSRF
Em todo e qualquer formulário criado, temos que injetar o mwCSRF (middleware responsável por injetar objeto que executa a função csrfToken());

! Lembre-se de importar e acionar os middlewares no server.js
! Lembre-se de injetar em todos os formulários o mwCSRF
*/


exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este é o valor da variável local';
    next();
};

exports.errorCSRF = (err, req, res, next) => {                           //Capturará o erro específico e irá ocultar a falha de segurança.
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');                                        //Se ocorrer o erro Renderiza a 404.                     
    };
    next();
};


exports.mwCSRF = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();                                   //A response será a execução da func. criadora de token.
    next();
};

