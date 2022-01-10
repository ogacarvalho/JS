const Contato = require('../models/ContatoModel');                                    //Importação da Classe "Contato"

//Requisições de acesso à pagina principal.
exports.index = async (req, res) => {                                               //Controlador recebe requisição de acesso a rota "home"
    if(!req.session.user) return res.render('login');                               //Verificação de sessão ativa, false? renderiza página de login.
    const contatos = await Contato.buscaContatos();                                 //True? Executa método que busca pelos contatos salvos na agenda.
    res.render('index', { contatos });                                              //Renderiza página "index" e injeta o retorno da busca no Locals.
};                                                                                  //Trabalharemos o retorno de "contatos" no index.ejs