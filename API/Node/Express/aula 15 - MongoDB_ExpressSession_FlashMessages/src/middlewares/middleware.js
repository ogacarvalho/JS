
exports.middlewareGlobal = (req, res, next) => {
    console.log('Interceptado!');
    next();
};