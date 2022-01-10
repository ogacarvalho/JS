const Contato = require('../models/ContatoModel');                                        //Importa dados do Model Contato.             
 
exports.index = (req ,res) => {                                                           //Requisição da home.            !Todos os dados abaixo realizam checagem de login.
    res.render('contato', {                                                               //Usuário logado, renderiza página de contato, com locals "contato" vázio.
        contato: {}
    });         
};


 exports.register = async (req, res) => {                                                 //Usuário quer registrar um contato na agenda.
    try{      
        const instancia = new Contato(req.body);                                          //Instântica -> Classe Contato recebe parâmetros da requisição (post).
        await instancia.register();                                                       //Aciona método de registro.

        if(instancia.errors.length > 0){                                                  //Erros true?
            req.flash('errors', instancia.errors );                                       //Display dos erros.
            req.session.save( () => res.redirect('back') );                               //Salva sessão, redireciona para pagina anterior.
            return;
        }

        req.flash('success', 'Contato registrado com sucesso!');                           //Erros false? Display "sucesso"
        req.session.save( () => res.redirect(`/contato/index/${instancia.dados._id}`) );   //Salva a sessão, redirect para pagina do contato. !ID enviado ao URL.
        return;                                                                            //Retorna.

    }catch(e){
        console.log(e);
        return res.render('404');
    };
};

exports.editIndex = async (req,res) => {                                                  //Usuário redirecionado para pagina inicial do "editar contato"
    if(!req.params.id) return res.render('404');                                          //Se não houver parâmetros de ID no URL -> Renderiza Erro.
    const contato = await Contato.buscaPorId(req.params.id);                              //Constante recebe dados do contato com base no ID. (Busca no BD)

    if(!contato) return res.render('404');                                                //Se não retornar um objeto com o contato, renderiza 404.
    res.render('contato',{ contato });                                                    //Tudo certo? Renderiza paǵina Contato, injeta os dados no locals.
};

exports.edit = async (req, res) => {                                                      //Usuário clica no botão editar contato.
    if(!req.params.id) return res.render('404');                                          //Se não houver parâmetros no URL -> Renderiza 404.
    const contato = new Contato(req.body);                                                //Constante recebe classe de Models com parâmetros da requisição !post.
    await contato.edit(req.params.id);                                                    //Executa método "edit" com o ID do contato nos parâmetros.

    if(contato.errors.length > 0){                                                        //Erros true? 
        req.flash('errors', contato.errors );                                             //Display do erro, salva a sessão e redireciona para a página anterior.
        req.session.save( () => res.redirect('back') );
        return;
    }

    req.flash('success', 'Contato editado com sucesso!');                                 //Erros False?
    req.session.save( () => res.redirect(`/contato/index/${contato.dados._id}`) );        //Salva a sessão, redireciona para a página do contato.
    return;


};

exports.delete = async (req, res) => {                                                    //Usuário quer deletar o contato.
    if(!req.params.id) return res.render('404');                                          //Não há parâmetros de ID no URL? -> Renderiza 404.

    const contato = await Contato.delete(req.params.id);                                  //Constante recebe retorno da execução do método "delete" com parâmetros "id".
    if(!contato) return res.render('404');                                                //Se contato não conseguir apagar, renderiza 404.

    req.flash('success', 'Contato apagado com sucesso.');                                 //Apagou? Display Sucesso.
    req.session.save(() => res.redirect('back'));                                         //Salva a sessão redireciona para a pg. anterior.
    return;

};