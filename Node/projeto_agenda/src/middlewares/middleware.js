
exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');                           //O flash está armazenando os erros, se existirem, serão enviados ao locals.errors.
    res.locals.success = req.flash('success');
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

