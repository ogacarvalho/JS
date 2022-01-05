//Aqui vamos exportar como default (direto), ou seja, importou o middleware.js já recebe a função aí.

//Dentro do módulo exports, crie o objeto middlewareGlobal dentro do objeto tem a func. Anônima
exports.middlewareGlobal = (req, res, next) => {
    console.log('Interceptado!');                                               //Int. generalizada.
    if(req.body.cliente){
        console.log(`${req.body.cliente}? Vi o que você postou..`)              //Int. Específica.
    }; 

    if(req.body.cliente === 'Gabriel'){                                         //Int. de dados (modificando ao vivo)
        req.body.cliente = req.body.cliente.replace('Gabriel', 'NOME PROIBIDO')
    };

    next();
};