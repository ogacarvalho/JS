
exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');                           //O flash está armazenando os erros, se existirem, serão enviados ao locals.errors.
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();                                                            //E automaticamente acionará o "errors" em messages (includes), que os mostrará.

};

exports.errorCSRF = (err, req, res, next) => {
    if(err) {
        return res.render('404');
    };
    next();
};

exports.mwCSRF = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req,res,next) => {

    if(!req.session.user) {
        req.flash('errors', 'Efetue o login.' );
        req.session.save( () => res.redirect('/') );
        return;
    };
    next(); //Se o usuário estiver logado, segue o baile.
};