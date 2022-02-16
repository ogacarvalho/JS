
//Este middleware é global, logo ele intercepta os dados antes do Routes e Controllers.
exports.middlewareGlobal = (req, res, next) => {                       //Ao iniciar o servidor...
    res.locals.errors = req.flash('errors');                           //Propriedade "errors" em locals recebe dados do Flash.
    res.locals.success = req.flash('success');                         //Propriedade "success" em locals recebe dados do Flash.
    res.locals.user = req.session.user;                                //Propriedade "user" em locals, recebe dados do user no Sessions.
    next();                                                            //Passe para o próximo parâmetro.

};

exports.errorCSRF = (err, req, res, next) => {                         //Middleware Global (sistema de segurança CSRF)
    if(err) {                                                          //Se houver qualquer erro, renderiza 404.
        return res.render('404');
    };
    next();                                                            //Continue.
};

exports.mwCSRF = (req, res, next) => {                                 //Middleware Global (Sistema de Segurança CSRF)
    res.locals.csrfToken = req.csrfToken();                            //Propriedade "csrfToken" em locals recebe dados de "req.csrfToken()"
    next();                                                            //Continue.
};

exports.loginRequired = (req,res,next) => {                            //Interceptador Específico, sendo usado em routes.

    if(!req.session.user) {                                            //Se o usuário não estiver em sessão...
        req.flash('errors', 'Efetue o login.' );                       //Display erros: "Efetue o login", salva a sessão e redireciona para a home.
        req.session.save( () => res.redirect('/') );
        return;
    };
    next();                                                            //Se o usuário estiver logado, segue o baile.
};