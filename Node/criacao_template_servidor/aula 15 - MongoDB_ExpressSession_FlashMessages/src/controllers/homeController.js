//Agora temos acesso a um novo recurso(método), chamado "session".
//req.session.usuario: é o local onde poderemos verificar (requisitar) as sessões ativas, agora que nosso servidor as possui.
//req.flash('tipo da msg', 'msg'), é uma bomba relógio, assim que forem acessadas, serão deletas. (mesmo que seja um "log")
//Para chamar as mensagens: req.flash('tipo da msg');




exports.paginaInicial = (req,res) => {
    // req.session.usuario = {nome: 'Gabriel', logado: true}; //Ficará salvo por 7 dias na base de dados (mesmo se apagar)
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    res.render('index');
    return;
};


exports.trataPost = (req, res) => {
    res.send(req.body);
};

