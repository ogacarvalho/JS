exports.paginaInicial = (req,res) => {
    res.render('index');
    return;
};


exports.trataPost = (req, res) => {               //POST                              "corpo"
    res.send(req.body);                  //Estamos enviando como resposta ao submit os dados da requisição.
};