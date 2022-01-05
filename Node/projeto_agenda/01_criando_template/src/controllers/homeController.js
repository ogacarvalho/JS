//O Controladores estão sendo exportados e estarão disponíveis para importação na pasta modules.exports do arquivo 'homeController.js'


exports.paginaInicial = (req,res) => {                                             //Após receber a requisição do tipo indicado (get)
    res.render('index', {                                                          //Renderizará a página Index, e injetará dados em Locals
        titulo: 'Este é o titulo',                                                 //Os dados aqui serão extraídos no HTML com EJS.
        numeros: [1,2,3,4,5,6,7,8,9]
    });
    return;
};

exports.trataPost = (req, res) => {                                                 //Requisição do tipo POST
    res.send(req.body);                                                             //Retornará com a criação de uma página com os dados da requisição.
    return;
};

