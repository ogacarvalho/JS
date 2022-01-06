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

//Função estática (não está atrelada a nenhuma instãncia)
Contato.buscaPorId = async function(id){ //Buscará pelo id no banco de dados.
    if(typeof id != 'string') return;
    const user = await ContatoModel.findById(id); //Ou vai retonar o usuário com o ID ou vai retonar "Null".
    return user;
};


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
}


module.exports = Contato;
