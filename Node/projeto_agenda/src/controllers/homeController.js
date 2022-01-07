const Contato = require('../models/ContatoModel');


exports.index = async (req, res) => {
    if(!req.session.user) return res.render('login');
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos }); //Injetamos contatos dentro do index. (agora estão em locals no index)
}