
exports.middlewareGlobal = (req, res, next) => {
    console.log('Interceptado!');
    if(req.body.cliente){
        console.log(`${req.body.cliente}? Vi o que você postou..`)
    }; 

    if(req.body.cliente === 'Gabriel'){
        req.body.cliente = req.body.cliente.replace('Gabriel', 'NOME PROIBIDO')
    };

    next();
};