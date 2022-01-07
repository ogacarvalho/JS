const Contato = require('../models/ContatoModel');

exports.index = (req ,res) => {             //Logado, entrou na página "cadastrar contato"
    res.render('contato', {                 //Agora contato precisa fingir que tem contato, para não dar erro.
        contato: {}
    });         
};


exports.register = async (req, res) => {         //Nosso model trabalha diretamente com o BDD logo? ASYNC.
    try{
        const instancia = new Contato(req.body);
        await instancia.register();

        if(instancia.errors.length > 0){
            req.flash('errors', instancia.errors );
            req.session.save( () => res.redirect('back') );
            return;
        }

        req.flash('success', 'Contato registrado com sucesso!');                          //Instãncia.objeto.propriedade
        req.session.save( () => res.redirect(`/contato/index/${instancia.dados._id}`) );   //"contato.contato._id" === this.contato (essa instância).contato
        return;

    }catch(e){
        console.log(e);
        return res.render('404');
    };
};

exports.editIndex = async (req,res) => {
    if(!req.params.id) return res.render('404'); //Se não for enviado este parâmetro(id) - erro.
    const contato = await Contato.buscaPorId(req.params.id); //vai buscar o id enviado no parâmetro, ali no redirect. (retorna o "id")

    if(!contato) return res.render('404');
    res.render('contato',{ contato }); //Esse é o ID retornado.
};

exports.edit = async (req, res) => {
    if(!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if(contato.errors.length > 0){
        req.flash('errors', contato.errors );
        req.session.save( () => res.redirect('back') );
        return;
    }

    req.flash('success', 'Contato editado com sucesso!');
    req.session.save( () => res.redirect(`/contato/index/${contato.dados._id}`) );
    return;


};

exports.delete = async (req, res) => {
    if(!req.params.id) return res.render('404');

    const contato = await Contato.delete(req.params.id);
    if(!contato) return res.render('404');

    req.flash('success', 'Contato apagado com sucesso.');
    req.session.save(() => res.redirect('back'));
    return;

};