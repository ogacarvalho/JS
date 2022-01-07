const mongoose = require('mongoose');
const validator = require('validator');


const ContatoSchema = new mongoose.Schema({
    nome:      {type: String, required: true },
    sobrenome: {type: String, require: false, default: ''},
    email:     {type: String, require: false, default: ''},
    telefone:  {type: String, required: false, default: ''},
    criadoEm:  {type: Date, default: Date.now}
});


const ContatoModel = mongoose.model('Contato', ContatoSchema); //Retorna Promise

function Contato(body){
    this.body = body;
    this.errors = [];
    this.dados = null;
}


Contato.prototype.register = async function(){       //Essa função vai trabalhar direto com a base de dados logo precisa ser ASSYNC
    this.valida();  
    if(this.errors.length > 0) return;
    this.dados = await ContatoModel.create(this.body);   //Registra no MongoDB e os armazena em this.dados: {id,nome...}

};


Contato.prototype.valida = function (){
    this.cleanUp();
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido'); //Short Circuit - Se email é true, checa.
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório');
    if(!this.body.email && !this.body.telefone){
        this.errors.push('Ao menos uma forma de contato precisa ser enviado: e-mail ou telefone.')
    }
}


Contato.prototype.cleanUp = function (){
    for(const key in this.body) {
        if ( typeof this.body[key] !== 'string' ){
         this.body[key] = '';  
        };
    };

    this.body = {
        nome:      this.body.nome,
        sobrenome: this.body.sobrenome,
        email:     this.body.email,
        telefone:  this.body.telefone
    };
};

Contato.prototype.edit = async function (id){                                      //Se o id existir, irá atualizá-lo e envia-lo para dados.
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.dados = await ContatoModel.findByIdAndUpdate(id, this.body, {
        new: true //Quando terminar retorne os dados atualizados.
    });
};

//Métodos estáticos não vao para o Prototype, logo não tem acesso a palavra this.
Contato.buscaPorId = async function(id){ //Buscará pelo id no banco de dados.
    if(typeof id != 'string') return;
    const contato = await ContatoModel.findById(id); //Ou vai retonar o usuário com o ID ou vai retonar "Null".
    return contato;
};

//Métodos estáticos não vao para o Prototype, logo não tem acesso a palavra this.
Contato.buscaContatos = async function(){ 
    const contatos = await ContatoModel.find()
    .sort({ criadoEm: -1 }) //Ordenar por "criadoEm" e -1 para ordem decrescente.
    return contatos;
};

Contato.delete = async function(id){ 
    if(typeof id != 'string') return;
    const contato = await ContatoModel.findOneAndDelete({_id: id});
    return contato;
};



module.exports = Contato;
